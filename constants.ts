
import { Era, ResourceType, Upgrade, FactionId } from './types';
import { UPGRADES_STANDARD } from './data/upgradesStandard';
import { UPGRADES_META } from './data/upgradesMeta';
import { ACHIEVEMENTS } from './data/achievementsData';

export const UPGRADES: Upgrade[] = [...UPGRADES_STANDARD, ...UPGRADES_META];
export { ACHIEVEMENTS };

export const INITIAL_STATE = {
  resources: {
    [ResourceType.ENTROPY]: 0, [ResourceType.MATTER]: 0, [ResourceType.COMPLEXITY]: 0,
    [ResourceType.DARK_MATTER]: 0, [ResourceType.CHRONO_CRYSTALS]: 0, [ResourceType.STELLAR_PLASMA]: 0
  },
  production: {
    [ResourceType.ENTROPY]: 0, [ResourceType.MATTER]: 0, [ResourceType.COMPLEXITY]: 0,
    [ResourceType.DARK_MATTER]: 0, [ResourceType.CHRONO_CRYSTALS]: 0, [ResourceType.STELLAR_PLASMA]: 0
  },
  era: Era.PLANCK,
  upgrades: {},
  achievements: [],
  activeEvents: [],
  logs: [],
  notifications: [],
  startTime: Date.now(),
  universeAge: 0,
  playerProfile: null,
  characterId: null,
  activeMissions: ['m_genesis'],
  completedMissions: [],
  currentView: 'COCKPIT' as const,
  gameMode: 'SANDBOX' as const,
  
  completedLessons: [],
  quizScores: {},
  lessonMastery: {}, 
  unlockedDiplomas: [],
  
  exploration: {
      currentZoom: 'UNIVERSE' as const,
      selectedId: null,
      path: [],
      bookmarkedIds: [],
      colonies: {},
      megastructures: {},
      artifacts: [],
      inventory: {},
      diplomacy: {
          'EMPIRE': 0,
          'CONCLAVE': 0,
          'SYNDICATE': 0
      },
      factions: {
          'EMPIRE': { id: 'EMPIRE' as FactionId, name: 'Hégémonie de Fer', color: '#ef4444', description: 'Militaristes', power: 50, expansion: 0.8 },
          'CONCLAVE': { id: 'CONCLAVE' as FactionId, name: 'Conclave Psionique', color: '#a855f7', description: 'Mystiques', power: 40, expansion: 0.4 },
          'SYNDICATE': { id: 'SYNDICATE' as FactionId, name: 'Syndicat Libre', color: '#fbbf24', description: 'Commerçants', power: 30, expansion: 0.6 }
      }
  },
  lumiStyleId: 'orb',
  lumiTrust: 10, 
  lumiPersonality: 'NEUTRAL' as const,
  unlockedAccessories: [],
  activeDilemma: null,
  prestigeLevel: 0,
  stability: 100,
  
  // Audio Settings V3.2
  audioSettings: {
      masterVolume: 0.5,
      musicVolume: 0.5,
      sfxVolume: 0.5,
      muted: false
  },
  
  // Brain V2.1 Organic
  synapseLevels: {},
  synapticWeights: {},
  generatedSynapses: [],
  lastSaveTime: Date.now(),
  lastSynapseId: null,
  brainTopology: {}
};
