
import { Era, ResourceType } from '../types';

// Helper to check if player has a specific diploma
const hasDiploma = (unlockedDiplomas: string[], diplomaId: string) => unlockedDiplomas.includes(diplomaId);

export const determineEra = (
    r: { [key in ResourceType]: number }, 
    u: { [id: string]: number },
    unlockedDiplomas: string[] = [] // New dependency
): Era => {
  const has = (id: string) => (u[id] || 0) > 0;

  // --- PHASE 4: METAPHYSICAL ASCENSION ---
  if (has('ouroboros') && r.COMPLEXITY > 1e33) return Era.INFINITE;
  if (has('pure_concept') && r.COMPLEXITY > 1e30) return Era.ASCENSION;
  if (has('fourth_wall') && has('admin_access')) return Era.PLAYER;
  if (has('admin_access') && r.COMPLEXITY > 1e26) return Era.SOURCE_CODE;
  
  // --- PHASE 3: COSMIC MASTERY (Needs Logic/Philosophy) ---
  if (has('acausality') && has('let_there_be_light')) return Era.OMEGA;
  if (has('brane_collision') && has('dark_matter_control')) return Era.MULTIVERSE;
  
  // --- PHASE 2: CIVILIZATION (Needs Physics & History) ---
  if (has('dark_matter_control') && has('galactic_network')) return Era.UNIVERSAL;
  if (has('galactic_network') && has('dyson_swarm') && has('ftl_travel')) return Era.GALACTIC;
  
  // ACADEMIC GATE: Must understand Physics to go Interstellar
  if (has('fusion_drive') && has('industrial_revolution')) {
      if (hasDiploma(unlockedDiplomas, 'dip_phys_license')) return Era.INTERSTELLAR;
      // If missing diploma, stays in Civilization (Guide should warn user)
  }
  
  // ACADEMIC GATE: Must understand History/Civics to build Civilization
  if (has('industrial_revolution') && has('writing') && has('fire_discovery') && has('stone_tools')) {
      if (hasDiploma(unlockedDiplomas, 'dip_hist_license')) return Era.CIVILIZATION;
  }

  // --- PHASE 1: FORMATION (Needs Biology) ---
  // ACADEMIC GATE: Must understand Biology to evolve Life
  if (has('multicellularity') && has('photosynthesis') && has('rna_world') && has('primordial_soup')) {
      if (hasDiploma(unlockedDiplomas, 'dip_bio_license')) return Era.BIOLOGICAL;
  }
  
  // Planetary Requirements
  if (has('heavy_bombardment') && has('magnetic_field') && has('accretion_disk')) return Era.PLANETARY;
  
  // Stellar Requirements
  if (has('star_ignition') && has('protostars') && has('gravity_wells')) return Era.STELLAR;
  
  // Dark Ages Requirements
  if (has('cosmic_dust') && has('photon_decoupling')) return Era.DARK_AGES;

  // --- PHASE 0: PRIMORDIAL ---
  if (has('photon_decoupling') && has('strong_force') && has('quark_soup')) return Era.RECOMBINATION;
  if (has('quark_soup') && has('inflaton_field')) return Era.NUCLEOSYNTHESIS;
  if (has('inflaton_field') && has('quantum_fluctuation')) return Era.INFLATION;

  return Era.PLANCK;
};
