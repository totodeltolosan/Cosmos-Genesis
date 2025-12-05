
import { Era, ResourceType, Upgrade } from '../types';

export const UPGRADES_STANDARD: Upgrade[] = [
  // --- PLANCK & INFLATION ---
  {
    id: 'quantum_fluctuation', name: 'Fluctuation Quantique', description: 'Le début de tout.',
    baseCost: 10, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}), 
    productionBonus: { resource: ResourceType.ENTROPY, amount: 100000000 }, reqEra: Era.PLANCK, count: 0, icon: '✨'
  },
  {
    id: 'inflaton_field', name: 'Champ d\'Inflaton', description: 'L\'univers grandit exponentiellement.',
    baseCost: 100, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 500000000 }, reqEra: Era.PLANCK, count: 0, icon: '🎈',
    parentUpgradeId: 'quantum_fluctuation'
  },
  
  // --- NUCLEOSYNTHESIS & RECOMBINATION ---
  {
    id: 'quark_soup', name: 'Soupe de Quarks', description: 'La matière commence à se former.',
    baseCost: 1000, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 5000 }, reqEra: Era.INFLATION, count: 0, icon: '🍲',
    parentUpgradeId: 'inflaton_field'
  },
  {
    id: 'strong_force', name: 'Interaction Forte', description: 'Colle les quarks ensemble.',
    baseCost: 2500, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 15000 }, reqEra: Era.INFLATION, count: 0, icon: '🔴',
    parentUpgradeId: 'quark_soup'
  },
  {
    id: 'photon_decoupling', name: 'Découplage des Photons', description: 'Lumière libre !',
    baseCost: 5000, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 1000000000 }, reqEra: Era.NUCLEOSYNTHESIS, count: 0, icon: '🔆',
    parentUpgradeId: 'strong_force'
  },

  // --- DARK AGES & STELLAR ---
  {
    id: 'cosmic_dust', name: 'Poussière Cosmique', description: 'Les premiers nuages froids.',
    baseCost: 8000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 8000 }, reqEra: Era.RECOMBINATION, count: 0, icon: '🌫️',
    parentUpgradeId: 'photon_decoupling'
  },
  {
    id: 'gravity_wells', name: 'Puits Gravitationnels', description: 'Rassemblement du gaz.',
    baseCost: 10000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 10000 }, reqEra: Era.DARK_AGES, count: 0, icon: '🕳️',
    parentUpgradeId: 'cosmic_dust'
  },
  {
    id: 'protostars', name: 'Proto-Étoiles', description: 'Ça chauffe, mais ça ne brille pas encore.',
    baseCost: 25000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 2000000000 }, reqEra: Era.DARK_AGES, count: 0, icon: '🌑',
    parentUpgradeId: 'gravity_wells'
  },
  // FIX: Changed from STELLAR to DARK_AGES to allow entry into Stellar Era
  {
    id: 'star_ignition', name: 'Ignition Stellaire', description: 'Les premières étoiles s\'allument.',
    baseCost: 50000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 5000000000 }, reqEra: Era.DARK_AGES, count: 0, icon: '🌟',
    parentUpgradeId: 'protostars'
  },
  // FIX: Changed from STELLAR to DARK_AGES/Early STELLAR logic (kept Stellar as it is post-ignition)
  {
    id: 'supernova', name: 'Supernovae', description: 'Création d\'éléments lourds.',
    baseCost: 100000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 50000 }, reqEra: Era.STELLAR, count: 0, icon: '💥',
    parentUpgradeId: 'star_ignition'
  },

  // --- PLANETARY ---
  {
    id: 'accretion_disk', name: 'Disque d\'Accrétion', description: 'Formation des planètes.',
    baseCost: 200000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 100 }, reqEra: Era.STELLAR, count: 0, icon: '💿',
    parentUpgradeId: 'supernova'
  },
  {
    id: 'magnetic_field', name: 'Champ Magnétique', description: 'Bouclier contre le vent solaire.',
    baseCost: 350000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 250 }, reqEra: Era.STELLAR, count: 0, icon: '🛡️',
    parentUpgradeId: 'accretion_disk'
  },
  // FIX: Changed from PLANETARY to STELLAR so we can acquire it to ENTER Planetary era
  {
    id: 'heavy_bombardment', name: 'Grand Bombardement', description: 'Apport d\'eau et de minéraux.',
    baseCost: 500000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 500 }, reqEra: Era.STELLAR, count: 0, icon: '☄️',
    parentUpgradeId: 'magnetic_field'
  },

  // --- BIOLOGICAL ---
  // FIX: Changed from PLANETARY to PLANETARY (Keep)
  {
    id: 'primordial_soup', name: 'Soupe Primordiale', description: 'Chimie organique de base.',
    baseCost: 2000000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 5000 }, reqEra: Era.PLANETARY, count: 0, icon: '🧪',
    parentUpgradeId: 'heavy_bombardment'
  },
  // FIX: Changed from BIOLOGICAL to PLANETARY so we can enter Biological Era
  {
    id: 'rna_world', name: 'Monde ARN', description: 'Premières molécules auto-réplicantes.',
    baseCost: 3000000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 7500 }, reqEra: Era.PLANETARY, count: 0, icon: '🧬',
    parentUpgradeId: 'primordial_soup'
  },
  // FIX: Changed from BIOLOGICAL to PLANETARY
  {
    id: 'photosynthesis', name: 'Photosynthèse', description: 'Manger le soleil.',
    baseCost: 5000000, costType: ResourceType.ENTROPY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 10000 }, reqEra: Era.PLANETARY, count: 0, icon: '🍃',
    parentUpgradeId: 'rna_world'
  },
  // FIX: Changed from BIOLOGICAL to PLANETARY
  {
    id: 'multicellularity', name: 'Multicellularité', description: 'L\'union fait la force.',
    baseCost: 10000000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 25000 }, reqEra: Era.PLANETARY, count: 0, icon: '🦠',
    parentUpgradeId: 'photosynthesis'
  },

  // --- CIVILIZATION ---
  {
    id: 'stone_tools', name: 'Outils de Pierre', description: 'Le début de la technique.',
    baseCost: 1000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 100000 }, reqEra: Era.BIOLOGICAL, count: 0, icon: '🪨',
    parentUpgradeId: 'multicellularity'
  },
  // FIX: Changed from CIVILIZATION to BIOLOGICAL (Late Stage)
  {
    id: 'fire_discovery', name: 'Maîtrise du Feu', description: 'Cuire et s\'éclairer.',
    baseCost: 5000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 100000000 }, reqEra: Era.BIOLOGICAL, count: 0, icon: '🔥',
    parentUpgradeId: 'stone_tools'
  },
  // FIX: Changed from CIVILIZATION to BIOLOGICAL
  {
    id: 'writing', name: 'Écriture', description: 'Transmettre le savoir.',
    baseCost: 15000, costType: ResourceType.COMPLEXITY, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.COMPLEXITY, amount: 200000 }, reqEra: Era.BIOLOGICAL, count: 0, icon: '📜',
    parentUpgradeId: 'fire_discovery'
  },
  // FIX: Changed from CIVILIZATION to BIOLOGICAL
  {
    id: 'industrial_revolution', name: 'Révolution Industrielle', description: 'Machines et vapeur.',
    baseCost: 50000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.MATTER, amount: 500000 }, reqEra: Era.BIOLOGICAL, count: 0, icon: '🏭',
    parentUpgradeId: 'writing'
  },

  // --- INTERSTELLAR ---
  // FIX: Changed from CIVILIZATION (Keep)
  {
    id: 'fusion_drive', name: 'Propulsion à Fusion', description: 'Quitter le berceau.',
    baseCost: 500000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 1000000000 }, reqEra: Era.CIVILIZATION, count: 0, icon: '🚀',
    parentUpgradeId: 'industrial_revolution'
  },
  {
    id: 'dyson_swarm', name: 'Essaim de Dyson', description: 'Capturer toute l\'énergie d\'une étoile.',
    baseCost: 1000000, costType: ResourceType.MATTER, multiplier: 1.01, effect: () => ({}),
    productionBonus: { resource: ResourceType.ENTROPY, amount: 50000000000 }, reqEra: Era.INTERSTELLAR, count: 0, icon: '☀️',
    parentUpgradeId: 'fusion_drive'
  }
];
