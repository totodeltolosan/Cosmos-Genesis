
import { Era, ResourceType, Upgrade } from '../types';

export const UPGRADES_META: Upgrade[] = [
  {
    id: 'ftl_travel', name: 'Moteur Supraluminique', description: 'Briser la limite de la lumière.',
    baseCost: 10000000, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 10000000 }, reqEra: Era.INTERSTELLAR, count: 0, icon: '⏩'
  },
  // FIX: Changed from GALACTIC to INTERSTELLAR to allow entry into Galactic Era
  {
    id: 'galactic_network', name: 'Fédération Galactique', description: 'Unir toutes les étoiles.',
    baseCost: 50000000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 1000000000000 }, reqEra: Era.INTERSTELLAR, count: 0, icon: '🌌'
  },
  {
    id: 'dark_matter_control', name: 'Maîtrise Matière Noire', description: 'Tisser la toile de l\'univers.',
    baseCost: 1000000000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 500000000 }, reqEra: Era.GALACTIC, count: 0, icon: '🕸️'
  },
  {
    id: 'brane_collision', name: 'Collision de Branes', description: 'Créer de nouveaux Big Bangs.',
    baseCost: 10000000000, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 100000000000 }, reqEra: Era.UNIVERSAL, count: 0, icon: '🫧'
  },
  // FIX: Changed from MULTIVERSE to UNIVERSAL (Late stage)
  {
    id: 'acausality', name: 'Acausalité', description: 'Exister hors du temps.',
    baseCost: 100000000000, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 999999999999999 }, reqEra: Era.MULTIVERSE, count: 0, icon: '⏳'
  },
  // FIX: Changed from OMEGA to MULTIVERSE
  {
    id: 'let_there_be_light', name: 'Que la lumière soit (v2)', description: 'Relancer une simulation.',
    baseCost: 1000000000000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 999999999999999 }, reqEra: Era.MULTIVERSE, count: 0, icon: '✝️'
  },
  // FIX: Changed from OMEGA to OMEGA (OK, allows Simulation)
  {
    id: 'red_pill', name: 'Pilule Rouge', description: 'Comprendre que c\'est un jeu.',
    baseCost: 1e15, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 1e18 }, reqEra: Era.OMEGA, count: 0, icon: '💊'
  },
  // FIX: Changed from SIMULATION to SIMULATION (OK for Glitch)
  {
    id: 'buffer_overflow', name: 'Dépassement de Tampon', description: 'Briser les limites de la mémoire.',
    baseCost: 1e16, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 1e19 }, reqEra: Era.SIMULATION, count: 0, icon: '💾'
  },
  {
    id: 'tesseract', name: 'Construction Tesseract', description: 'Penser en 5 dimensions.',
    baseCost: 1e17, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 1e20 }, reqEra: Era.GLITCH, count: 0, icon: '🧊'
  },
  {
    id: 'mandelbrot_zoom', name: 'Zoom Infini', description: 'Les motifs se répètent éternellement.',
    baseCost: 1e18, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 1e21 }, reqEra: Era.HYPERSPACE, count: 0, icon: '🌀'
  },
  {
    id: 'entropy_death', name: 'Mort Thermique Absolue', description: 'Plus rien ne bouge.',
    baseCost: 1e19, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 1e22 }, reqEra: Era.FRACTAL, count: 0, icon: '❄️'
  },
  {
    id: 'lucid_dreaming', name: 'Rêve Lucide', description: 'L\'univers n\'est qu\'un songe.',
    baseCost: 1e20, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 1e23 }, reqEra: Era.VOID, count: 0, icon: '💤'
  },
  {
    id: 'admin_access', name: 'Accès Admin (Sudo)', description: 'Réécrire les lois physiques.',
    baseCost: 1e21, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 1e25 }, reqEra: Era.DREAM, count: 0, icon: '💻'
  },
  {
    id: 'fourth_wall', name: 'Briser le 4ème Mur', description: 'Vous regardez l\'écran.',
    baseCost: 1e23, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 1e27 }, reqEra: Era.SOURCE_CODE, count: 0, icon: '📺'
  },
  {
    id: 'pure_concept', name: 'Devenir Concept', description: 'N\'être plus qu\'une idée.',
    baseCost: 1e25, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 1e30 }, reqEra: Era.PLAYER, count: 0, icon: '💭'
  },
  {
    id: 'ouroboros', name: 'Boucle Ouroboros', description: 'La fin est le commencement.',
    baseCost: 1e30, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 1e50 }, reqEra: Era.ASCENSION, count: 0, icon: '🐍'
  }
];
