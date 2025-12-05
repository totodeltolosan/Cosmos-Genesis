
import React from 'react';

export enum ResourceType {
  ENTROPY = 'ENTROPY', MATTER = 'MATTER', COMPLEXITY = 'COMPLEXITY',
  DARK_MATTER = 'DARK_MATTER', CHRONO_CRYSTALS = 'CHRONO_CRYSTALS', STELLAR_PLASMA = 'STELLAR_PLASMA'
}

export enum Era {
  PLANCK = 'Ère de Planck', INFLATION = 'Inflation Cosmique', NUCLEOSYNTHESIS = 'Nucléosynthèse',
  RECOMBINATION = 'Recombinaison', DARK_AGES = 'Âges Sombres', STELLAR = 'Ère Stellaire',
  PLANETARY = 'Ère Planétaire', BIOLOGICAL = 'Ère Biologique', CIVILIZATION = 'Ère Civilisationnelle',
  INTERSTELLAR = 'Ère Interstellaire', GALACTIC = 'Empire Galactique', UNIVERSAL = 'Conscience Universelle',
  MULTIVERSE = 'Multivers', OMEGA = 'Point Oméga', SIMULATION = 'Simulation Détectée',
  GLITCH = 'Corruption des Données', HYPERSPACE = 'Hyper-Espace 5D', FRACTAL = 'Réalité Fractale',
  VOID = 'Le Grand Néant', DREAM = 'Rêve du Démiurge', SOURCE_CODE = 'Code Source',
  PLAYER = 'L\'Interface', ASCENSION = 'Ascension Méta-Physique', INFINITE = 'L\'Infini'
}

export type ViewType = 'COCKPIT' | 'EXPLORATION' | 'CODEX' | 'SETTINGS' | 'COURSE' | 'PROGRESS' | 'MUSEUM' | 'LUMI_CHAT';
export enum KnowledgeLevel { NOVICE = 'NOVICE', INTERMEDIATE = 'INTERMEDIATE', EXPERT = 'EXPERT' }
export type GameMode = 'SANDBOX' | 'ACADEMY';
export type SubjectCategory = 'MATH' | 'HISTORY' | 'GEO' | 'FRENCH' | 'CS' | 'BIO' | 'PSYCH' | 'CIVIC' | 'QI' | 'PHYSICS';

// --- RPG & ACADEMY ---
export interface Character { id: string; name: string; description: string; personaPrompt: string; bonusDescription: string; }
export interface LumiStyle { id: string; name: string; cssClass: string; icon: string; description: string; }
export type Gender = 'MALE' | 'FEMALE' | 'NB' | 'ROBOT';
export interface PlayerClass { id: string; title: string; description: string; bonus: string; icon: string; }
export interface PlayerAvatar { id: string; icon: string; gender: Gender; }
export interface PlayerProfile { name: string; gender: Gender; classId: string; avatarIcon: string; age: number; knowledgeLevel: KnowledgeLevel; }

// --- ACADEMY ---
export type QuestionType = 'MCQ' | 'INPUT';
export interface QuizQuestion { id: string; type?: QuestionType; question: string; options?: string[]; acceptedAnswers?: string[]; correctIndex?: number; explanation: string; }
export interface LessonPage { title: string; content: string; image?: string; }
export interface Lesson { id: string; title: string; description: string; subject: SubjectCategory; pages?: LessonPage[]; questionPool?: QuizQuestion[]; requiredEra?: Era; content?: { [key in KnowledgeLevel]: string }; quiz?: QuizQuestion[]; reward: string; }
export interface Diploma { id: string; title: string; description: string; color: string; icon: string; requiredCategory?: SubjectCategory; requiredCount?: number; requiredLessonIds?: string[]; }

// --- KNOWLEDGE SYSTEM (THE BRAIN) ---
export interface SynapseInteraction {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface KnowledgeNode {
    id: string;
    title: string;
    tags: string[]; // Keywords for the search engine
    fact: string; // The core scientific truth
    analogy: string; // The simplification
    detail: string; // The deep dive
    interaction?: SynapseInteraction; // Active learning check
    // V1.2: Dynamic Context Injection
    dynamicContext?: (state: GameState) => string | null; 
}

// --- MISSIONS & LUMI ---
export interface Mission { id: string; title: string; description: string; triggerCondition: (state: GameState) => boolean; completionCondition: (state: GameState) => boolean; rewardText: string; isCompleted: boolean; dialogueStart: { [key in KnowledgeLevel]: string }; dialogueEnd: { [key in KnowledgeLevel]: string }; }
export type LumiPersonalityType = 'NEUTRAL' | 'SCIENTIST' | 'WARRIOR' | 'BUILDER' | 'MYSTIC';
export interface LumiAccessory { id: string; name: string; icon: string; minTrust: number; cssStyle: React.CSSProperties; }
export interface DilemmaChoice { text: string; outcomeText: string; effect: { trust?: number; resource?: ResourceType; amount?: number }; }
export interface Dilemma { id: string; title: string; question: string; choices: DilemmaChoice[]; minEra: Era; }

// --- CORE GAME ---
export interface Upgrade { id: string; name: string; description: string; baseCost: number; costType: ResourceType; multiplier: number; effect: (state: GameState) => Partial<GameState>; productionBonus: { resource: ResourceType; amount: number; }; reqEra: Era; count: number; icon: string; parentUpgradeId?: string; reqParentLevel?: number; }
export interface LogEntry { id: string; timestamp: number; text: string; type: 'info' | 'discovery' | 'milestone' | 'achievement' | 'event_bad' | 'event_good' | 'narrative' | 'mission' | 'academic' | 'dilemma'; }
export interface Achievement { id: string; name: string; description: string; icon: string; condition: (state: GameState) => boolean; }
export interface ActiveEvent { id: string; definitionId: string; startTime: number; endTime: number; }
export interface EventDefinition { id: string; name: string; description: string; type: 'positive' | 'negative' | 'mixed'; duration: number; multiplier: { [key in ResourceType]?: number }; minEra: Era; chance: number; }
export interface CodexEntry { 
    id: string; 
    title: string; 
    category: 'PHYSICS' | 'COSMOLOGY' | 'BIOLOGY' | 'META' | 'GUIDE'; 
    content: { [key in KnowledgeLevel]: string }; 
    unlockCondition: (upgrades: string[]) => boolean; 
}

// --- EXPLORATION V3.1 (4X Features) ---
export type GalaxyType = 'SPIRAL' | 'ELLIPTICAL' | 'IRREGULAR';
export type StarType = 'RED_DWARF' | 'YELLOW_DWARF' | 'BLUE_GIANT' | 'NEUTRON' | 'BLACK_HOLE';
export type PlanetType = 'ROCKY' | 'GAS_GIANT' | 'ICE_GIANT' | 'LAVA' | 'OCEAN';
export type RuinType = 'NONE' | 'TEMPLE' | 'VAULT' | 'SHIPWRECK';
export type ExoticResourceType = 'NONE' | 'DARK_MATTER' | 'CHRONO_CRYSTALS' | 'STELLAR_PLASMA';
export type FactionId = 'NONE' | 'EMPIRE' | 'CONCLAVE' | 'SYNDICATE';
export type ColonyType = 'MINING' | 'RESEARCH' | 'ENERGY';
export type MegaType = 'DYSON_SPHERE' | 'STELLAR_ENGINE' | 'GATE' | 'MATRIOSHKA_BRAIN';

export interface Faction { id: FactionId; name: string; color: string; description: string; power: number; expansion: number; }
export interface CelestialBody { id: string; name: string; type: string; color: string; coords: { x: number; y: number }; }
export interface Planet extends CelestialBody { 
    type: PlanetType; hasLife: boolean; civStage?: string; 
    ruins: RuinType; rareResource: ExoticResourceType; faction: FactionId;
}
export interface StarSystem extends CelestialBody { type: StarType; planets: Planet[]; faction: FactionId; }
export interface Galaxy extends CelestialBody { type: GalaxyType; stars: StarSystem[]; }
export interface Supercluster extends CelestialBody { galaxies: Galaxy[]; }

export interface ColonyDetails { level: number; type: ColonyType; population: number; happiness: number; } 
export interface MegaDetails { type: MegaType; stage: 0 | 1 | 2 | 3; }
export interface Artifact { id: string; name: string; description: string; icon: string; bonus: string; }

export type ZoomLevel = 'UNIVERSE' | 'SUPERCLUSTER' | 'GALAXY' | 'SYSTEM';

export interface ExplorationState {
    currentZoom: ZoomLevel; selectedId: string | null; path: string[]; bookmarkedIds: string[];
    colonies: { [planetId: string]: ColonyDetails };
    megastructures: { [starId: string]: MegaDetails };
    artifacts: string[]; 
    inventory: { [key in ExoticResourceType]?: number };
    diplomacy: { [factionId: string]: number }; 
    factions: { [id in FactionId]?: Faction };
}

export interface Notification { id: string; title: string; message: string; type: 'success' | 'warning' | 'info' | 'error'; timestamp: number; }

export interface AudioSettings {
    masterVolume: number; // 0.0 to 1.0
    musicVolume: number;  // 0.0 to 1.0
    sfxVolume: number;    // 0.0 to 1.0
    muted: boolean;
}

export interface GameState {
  resources: { [key in ResourceType]: number }; 
  production: { [key in ResourceType]: number };
  era: Era; upgrades: { [id: string]: number }; achievements: string[]; activeEvents: ActiveEvent[];
  logs: LogEntry[]; notifications: Notification[];
  startTime: number; universeAge: number;
  playerProfile: PlayerProfile | null; characterId: string | null;
  activeMissions: string[]; completedMissions: string[]; currentView: ViewType;
  gameMode: GameMode; 
  completedLessons: string[]; quizScores: { [lessonId: string]: number }; lessonMastery: { [lessonId: string]: number }; unlockedDiplomas: string[];
  exploration: ExplorationState;
  lumiStyleId: string; lumiTrust: number; lumiPersonality: LumiPersonalityType; unlockedAccessories: string[]; activeDilemma: Dilemma | null;
  prestigeLevel: number;
  stability: number;
  
  // Audio V3.2
  audioSettings: AudioSettings;
  
  // Brain V2.0
  synapseLevels: { [synapseId: string]: number }; // 0 = New, 1 = Seen, 2 = Mastered
  
  // V2.1 Neurogenesis & Organic Life
  synapticWeights: { [linkId: string]: { weight: number, lastAccess: number } }; // Force + Temps
  generatedSynapses: KnowledgeNode[]; // Dynamic nodes
  
  lastSaveTime: number; // For dreaming calculation
  lastSynapseId: string | null; // For Priming (Amorçage)
  brainTopology: { [tag: string]: number }; // Stats of learned topics
}

export const ERAS_ORDER = [ Era.PLANCK, Era.INFLATION, Era.NUCLEOSYNTHESIS, Era.RECOMBINATION, Era.DARK_AGES, Era.STELLAR, Era.PLANETARY, Era.BIOLOGICAL, Era.CIVILIZATION, Era.INTERSTELLAR, Era.GALACTIC, Era.UNIVERSAL, Era.MULTIVERSE, Era.OMEGA, Era.SIMULATION, Era.GLITCH, Era.HYPERSPACE, Era.FRACTAL, Era.VOID, Era.DREAM, Era.SOURCE_CODE, Era.PLAYER, Era.ASCENSION, Era.INFINITE ];
