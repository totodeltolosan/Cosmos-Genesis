
import { useState, useEffect, useRef, useCallback } from 'react';
import { GameState, ResourceType, LogEntry, Notification, DilemmaChoice } from '../types';
import { UPGRADES } from '../constants';
import { calculateProduction } from '../utils/production';
import { determineEra } from '../utils/eraProgression';
import { simulateFactions } from '../utils/factionSim';
import { initAudio, startAmbient, playSFX, updateVolumes } from '../utils/audioManager';
import { checkMissions } from '../utils/missionLogic';
import { COSMIC_EVENTS } from '../data/eventsData';
import { ERAS_ORDER } from '../types';
import { decaySynapses, triggerDreaming, analyzeTopology } from '../utils/lumiBrain';

export const useGameEngine = (initialState: GameState, isPaused: boolean) => {
  const [state, setState] = useState<GameState>(initialState);
  const [clickEffects, setClickEffects] = useState<{ id: number; x: number; y: number; value: string }[]>([]);
  const lastTickRef = useRef<number>(Date.now());
  const audioInitRef = useRef(false);

  // --- AUDIO SYNC ---
  useEffect(() => {
      if (audioInitRef.current) {
          updateVolumes(state.audioSettings);
      }
  }, [state.audioSettings]);

  // --- ACTIONS ---
  const addLog = useCallback((text: string, type: LogEntry['type']) => {
      setState(prev => ({ ...prev, logs: [...prev.logs, { id: crypto.randomUUID(), timestamp: Date.now(), text, type }].slice(-20) }));
  }, []);

  const notify = useCallback((title: string, message: string, type: Notification['type'] = 'info') => {
      const id = crypto.randomUUID();
      setState(prev => ({ ...prev, notifications: [...prev.notifications, { id, title, message, type, timestamp: Date.now() }] }));
      setTimeout(() => setState(prev => ({ ...prev, notifications: prev.notifications.filter(n => n.id !== id) })), 5000);
      playSFX(type === 'success' ? 'success' : type === 'error' ? 'error' : 'type');
  }, []);

  const handleManualClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!audioInitRef.current) { 
        initAudio(); 
        startAmbient(); 
        updateVolumes(state.audioSettings); // Apply initial settings
        audioInitRef.current = true; 
    }
    playSFX('click');
    const amount = 1000000000 + (state.upgrades['quantum_fluctuation'] || 0); 
    setClickEffects(prev => [...prev, { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY, value: "1 Md" }]);
    setState(prev => ({ ...prev, resources: { ...prev.resources, [ResourceType.ENTROPY]: prev.resources[ResourceType.ENTROPY] + amount } }));
  }, [state.upgrades, state.audioSettings]);

  const handleBuyUpgrade = (upgradeId: string) => {
    setState(prev => {
        const u = UPGRADES.find(up => up.id === upgradeId);
        if (!u) return prev;
        const cost = Math.floor(u.baseCost * Math.pow(u.multiplier, prev.upgrades[upgradeId] || 0));
        if (prev.resources[u.costType] < cost) return prev;
        
        playSFX('success');
        return {
            ...prev, resources: { ...prev.resources, [u.costType]: prev.resources[u.costType] - cost },
            upgrades: { ...prev.upgrades, [upgradeId]: (prev.upgrades[upgradeId] || 0) + 1 },
            logs: [...prev.logs, { id: crypto.randomUUID(), timestamp: Date.now(), text: `Acquis : ${u.name}`, type: 'info' }]
        };
    });
  };

  const resolveDilemma = (choice: DilemmaChoice) => {
      setState(prev => {
          let newRes = { ...prev.resources };
          if (choice.effect.resource && choice.effect.amount) {
              newRes[choice.effect.resource] += choice.effect.amount;
          }
          return {
              ...prev,
              resources: newRes,
              lumiTrust: Math.min(100, Math.max(0, prev.lumiTrust + (choice.effect.trust || 0))),
              activeDilemma: null,
              logs: [...prev.logs, { id: crypto.randomUUID(), timestamp: Date.now(), text: `Dilemme résolu : ${choice.outcomeText}`, type: 'dilemma' }]
          };
      });
  };

  // --- ORGANIC LIFE CYCLE (Dreaming on Load) ---
  useEffect(() => {
      setState(prev => {
          const { updatedState, dreams } = triggerDreaming(prev);
          if (dreams > 0) {
              setTimeout(() => notify("Rêve Neural", `${dreams} connexions renforcées pendant votre absence.`, 'success'), 2000);
          }
          return updatedState;
      });
  }, []);

  // --- GAME LOOP ---
  useEffect(() => {
    if (isPaused) { lastTickRef.current = Date.now(); return; }
    
    const interval = setInterval(() => {
      const now = Date.now();
      const deltaS = Math.min((now - lastTickRef.current) / 1000, 1.0);
      lastTickRef.current = now;

      setState(prevState => {
        const { production, consumption } = calculateProduction(
            prevState.upgrades, UPGRADES, prevState.era, prevState.activeEvents, 
            prevState.unlockedDiplomas, prevState.prestigeLevel, prevState.exploration, prevState.stability,
            prevState.synapticWeights // Pass Brain
        );
        
        let newResources = { ...prevState.resources };
        (Object.keys(newResources) as ResourceType[]).forEach(r => {
            const gain = production[r] || 0;
            newResources[r] += gain * deltaS;
        });

        const matterCost = (consumption[ResourceType.MATTER] || 0) * deltaS;
        if (newResources[ResourceType.MATTER] >= matterCost) {
            newResources[ResourceType.MATTER] -= matterCost;
        } else {
            newResources[ResourceType.MATTER] = 0;
        }

        // Factions & Events logic...
        let newFactions = prevState.exploration.factions;
        if (Math.random() < 0.05) {
             const sim = simulateFactions(prevState.exploration.factions);
             newFactions = sim.updatedFactions;
             if (sim.event) notify("Diplomatie", sim.event, 'warning');
        }

        const newEra = determineEra(newResources, prevState.upgrades, prevState.unlockedDiplomas);
        const missionCheck = checkMissions({ ...prevState, resources: newResources, era: newEra });
        
        // Organic Decay (Every 60s approx, randomized to distribute load)
        let organicState = prevState;
        if (Math.random() < 0.01) {
            organicState = decaySynapses(prevState);
            organicState = { ...organicState, brainTopology: analyzeTopology(organicState) };
        }

        let newActiveEvents = prevState.activeEvents.filter(e => e.endTime > now);
        if (Math.random() < 0.002) {
             const possibleEvents = COSMIC_EVENTS.filter(e => ERAS_ORDER.indexOf(e.minEra) <= ERAS_ORDER.indexOf(newEra));
             if (possibleEvents.length > 0) {
                 const def = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
                 if (!newActiveEvents.find(e => e.definitionId === def.id)) {
                     newActiveEvents.push({ id: crypto.randomUUID(), definitionId: def.id, startTime: now, endTime: now + (def.duration * 1000) });
                     notify("Événement Cosmique", def.name, def.type === 'positive' ? 'success' : 'warning');
                 }
             }
        }

        return {
            ...organicState,
            resources: newResources, production, era: newEra,
            universeAge: prevState.universeAge + (0.001 * (1 + Math.log10(newResources[ResourceType.ENTROPY] + 1)) * deltaS),
            exploration: { ...prevState.exploration, factions: newFactions || prevState.exploration.factions },
            activeMissions: missionCheck.newActive, completedMissions: missionCheck.newCompleted, activeEvents: newActiveEvents,
            lastSaveTime: now // Update keep-alive
        };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, notify]);

  // Click cleanup
  useEffect(() => {
      const timer = setInterval(() => setClickEffects(prev => prev.filter(c => Date.now() - c.id < 1000)), 500);
      return () => clearInterval(timer);
  }, []);

  return { state, setState, clickEffects, handleManualClick, handleBuyUpgrade, resolveDilemma, notify };
};
