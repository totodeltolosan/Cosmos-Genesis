import { useEffect, useRef } from 'react';
import { GameState, LogEntry, Era, ERAS_ORDER } from '../types';
import { COSMIC_EVENTS } from '../data/eventsData';
import { CHARACTERS } from '../data/charactersData';
import { generateCosmicFlavorText, generateCivilizationDetails, generateCharacterReaction } from '../services/geminiService';
import { UPGRADES } from '../constants';

export const useNarrative = (
  state: GameState,
  addLog: (text: string, type: LogEntry['type']) => void
) => {
  const previousEraRef = useRef<Era>(Era.PLANCK);
  const prevEventIdsRef = useRef<string[]>([]);
  const prevUpgradesCountRef = useRef<number>(0);
  const aiCooldownRef = useRef<boolean>(false);

  // Era Transition
  useEffect(() => {
    if (state.era !== previousEraRef.current) {
        const newEra = state.era;
        if (ERAS_ORDER.indexOf(newEra) > ERAS_ORDER.indexOf(previousEraRef.current)) {
            addLog(`TRANSITION : ${newEra}.`, 'milestone');
            if (state.characterId) {
                const char = CHARACTERS.find(c => c.id === state.characterId);
                if (char) {
                    generateCharacterReaction(char.personaPrompt, newEra, 'era')
                        .then(text => addLog(`${char.name}: "${text}"`, 'narrative'));
                }
            } else {
                generateCosmicFlavorText(newEra, `Le joueur atteint ${newEra}.`)
                    .then(text => addLog(text, 'info'));
            }
        }
        previousEraRef.current = newEra;
    }
  }, [state.era, state.characterId, addLog]);

  // Upgrade Purchase Reaction
  useEffect(() => {
      const currentCount = Object.values(state.upgrades).reduce((a, b) => a + b, 0);
      if (currentCount > prevUpgradesCountRef.current) {
          // Find the last purchased upgrade (heuristic: checking which count increased is expensive, assume latest action)
          // For simplicity in this hook without passing specific action, we'll randomize reaction chance
          if (state.characterId && Math.random() < 0.3 && !aiCooldownRef.current) {
               aiCooldownRef.current = true;
               const char = CHARACTERS.find(c => c.id === state.characterId);
               // Find a recently bought upgrade name or generic
               if (char) {
                   generateCharacterReaction(char.personaPrompt, "Nouvelle Technologie", 'upgrade')
                    .then(text => addLog(`${char.name}: "${text}"`, 'narrative'));
               }
               setTimeout(() => aiCooldownRef.current = false, 5000);
          }
      }
      prevUpgradesCountRef.current = currentCount;
  }, [state.upgrades, state.characterId, addLog]);

  // Events
  useEffect(() => {
    const newEvents = state.activeEvents.filter(e => !prevEventIdsRef.current.includes(e.id));
    newEvents.forEach(ev => {
        const def = COSMIC_EVENTS.find(d => d.id === ev.definitionId);
        if (def) {
            const logType = def.type === 'positive' ? 'event_good' : def.type === 'negative' ? 'event_bad' : 'info';
            addLog(`EVENT: ${def.name}`, logType);
        }
    });
    prevEventIdsRef.current = state.activeEvents.map(e => e.id);
  }, [state.activeEvents, addLog]);
};