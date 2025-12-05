import { EventDefinition, ResourceType, Era } from '../types';

export const COSMIC_EVENTS: EventDefinition[] = [
  {
    id: 'quantum_surge',
    name: 'Sursaut Quantique',
    description: 'Une instabilité locale booste massivement l\'entropie.',
    type: 'positive',
    duration: 15,
    multiplier: { [ResourceType.ENTROPY]: 5.0 },
    minEra: Era.PLANCK,
    chance: 0.3
  },
  {
    id: 'vacuum_decay',
    name: 'Faux Vide',
    description: 'L\'univers tente de s\'effondrer. Production réduite.',
    type: 'negative',
    duration: 10,
    multiplier: { [ResourceType.ENTROPY]: 0.1, [ResourceType.MATTER]: 0.1, [ResourceType.COMPLEXITY]: 0.1 },
    minEra: Era.INFLATION,
    chance: 0.1
  },
  {
    id: 'stellar_nursery',
    name: 'Poupinière Stellaire',
    description: 'Formation d\'étoiles accélérée.',
    type: 'positive',
    duration: 20,
    multiplier: { [ResourceType.MATTER]: 3.0 },
    minEra: Era.STELLAR,
    chance: 0.25
  },
  {
    id: 'gamma_ray_burst',
    name: 'Sursaut Gamma',
    description: 'Une étoile proche a explosé. La vie souffre, l\'énergie abonde.',
    type: 'mixed',
    duration: 12,
    multiplier: { [ResourceType.ENTROPY]: 10.0, [ResourceType.COMPLEXITY]: 0.0 },
    minEra: Era.BIOLOGICAL,
    chance: 0.15
  },
  {
    id: 'technological_singularity',
    name: 'Singularité Techno',
    description: 'Le progrès s\'emballe tout seul.',
    type: 'positive',
    duration: 25,
    multiplier: { [ResourceType.COMPLEXITY]: 4.0 },
    minEra: Era.CIVILIZATION,
    chance: 0.2
  },
  {
    id: 'hyperspace_lane',
    name: 'Route Hyperspatiale',
    description: 'Découverte d\'un raccourci dans la trame.',
    type: 'positive',
    duration: 30,
    multiplier: { [ResourceType.ENTROPY]: 2.0, [ResourceType.MATTER]: 2.0, [ResourceType.COMPLEXITY]: 2.0 },
    minEra: Era.INTERSTELLAR,
    chance: 0.2
  },
  {
    id: 'glitch_storm',
    name: 'Tempête de Glitch',
    description: 'La simulation perd en cohérence.',
    type: 'mixed',
    duration: 10,
    multiplier: { [ResourceType.MATTER]: 0, [ResourceType.ENTROPY]: 100 },
    minEra: Era.SIMULATION,
    chance: 0.3
  }
];