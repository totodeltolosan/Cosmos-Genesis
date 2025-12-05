
import { Era, ResourceType, Upgrade, ActiveEvent, ExplorationState } from '../types';
import { COSMIC_EVENTS } from '../data/eventsData';

export const calculateProduction = (
    upgrades: { [id: string]: number }, 
    upgradeList: Upgrade[], 
    era: Era,
    activeEvents: ActiveEvent[],
    diplomas: string[] = [],
    prestigeLevel: number = 0,
    exploration?: ExplorationState,
    stability: number = 100,
    synapticWeights: { [linkId: string]: { weight: number } } = {} // New Param
) => {
  const prod: { [key in ResourceType]: number } = {
      [ResourceType.ENTROPY]: 0,
      [ResourceType.MATTER]: 0,
      [ResourceType.COMPLEXITY]: 0,
      [ResourceType.DARK_MATTER]: 0,
      [ResourceType.CHRONO_CRYSTALS]: 0,
      [ResourceType.STELLAR_PLASMA]: 0
  };
  
  let consumptionMatter = 0;

  // 1. Base Upgrades
  upgradeList.forEach(u => {
    const count = upgrades[u.id] || 0;
    if (count > 0) {
        prod[u.productionBonus.resource] += u.productionBonus.amount * count;
    }
  });

  const qfLevel = upgrades['quantum_fluctuation'] || 0;
  if (qfLevel >= 50) prod[ResourceType.ENTROPY] += (1000000000 + qfLevel) * 10;

  // 3. Colony Production
  if (exploration) {
      Object.values(exploration.colonies).forEach(col => {
          const efficiency = col.level * (col.population || 1) * ((col.happiness || 50) / 100);
          consumptionMatter += col.level * 10; 
          if (col.type === 'MINING') prod[ResourceType.MATTER] += efficiency * 500;
          else if (col.type === 'RESEARCH') prod[ResourceType.COMPLEXITY] += efficiency * 200;
          else if (col.type === 'ENERGY') prod[ResourceType.ENTROPY] += efficiency * 100000;
      });
      Object.values(exploration.megastructures).forEach(mega => {
          if (mega.stage === 3) { 
              if (mega.type === 'DYSON_SPHERE') prod[ResourceType.ENTROPY] += 1e16;
              if (mega.type === 'MATRIOSHKA_BRAIN') prod[ResourceType.COMPLEXITY] += 1e13;
              if (mega.type === 'STELLAR_ENGINE') prod[ResourceType.STELLAR_PLASMA] += 1;
          }
      });
  }

  // 4. Multipliers
  const stabilityFactor = stability / 100;
  const techSynergy = 1 + (Object.values(upgrades).reduce((a, b) => a + b, 0) * 0.005); 
  // ORGANIC BRAIN SYNERGY: Sum of weights increases Complexity
  const totalWeight = Object.values(synapticWeights).reduce((a, b) => a + b.weight, 0);
  const brainSynergy = 1 + (totalWeight * 0.01);

  const academicMultiplier = 1 + (diplomas.length * 0.2);
  const prestigeMultiplier = 1 + (prestigeLevel * 0.5);

  const globalMult = techSynergy * academicMultiplier * prestigeMultiplier * stabilityFactor;

  // Event Multipliers
  const eventMult: { [key in ResourceType]: number } = {
      ENTROPY: 1, MATTER: 1, COMPLEXITY: 1, DARK_MATTER: 1, CHRONO_CRYSTALS: 1, STELLAR_PLASMA: 1
  };

  activeEvents.forEach(event => {
      const def = COSMIC_EVENTS.find(e => e.id === event.definitionId);
      if (def?.multiplier) {
          (Object.keys(def.multiplier) as ResourceType[]).forEach(r => {
              if (def.multiplier[r]) eventMult[r] *= def.multiplier[r]!;
          });
      }
  });

  // Apply
  (Object.keys(prod) as ResourceType[]).forEach(r => {
      let val = prod[r] * globalMult * eventMult[r];
      if (r === ResourceType.COMPLEXITY) val *= brainSynergy; // Special Brain Bonus
      prod[r] = val;
  });
  
  return { 
      production: prod,
      consumption: { [ResourceType.MATTER]: consumptionMatter }
  };
};
