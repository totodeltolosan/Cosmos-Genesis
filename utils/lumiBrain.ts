
import { KnowledgeNode, GameState } from '../types';
import { SYNAPTIC_CONNECTIONS } from '../data/knowledge/synapticConnections';

// --- IMPORTS : ORIGINS (Phase 1.1) ---
import { THERMO_ENTROPY } from '../data/knowledge/physics/thermo_1';
import { COSMO_INFLATION } from '../data/knowledge/cosmology/inflation_1';
import { BIO_CELL } from '../data/knowledge/biology/cell_1';

// --- IMPORTS : FOUNDATIONS (Phase 1.1 Extension) ---
import { PHYS_HEISENBERG } from '../data/knowledge/physics/heisenberg';
import { PHYS_RELATIVITY } from '../data/knowledge/physics/relativity';
import { COSMO_DARK_MATTER } from '../data/knowledge/cosmology/dark_matter';
import { COSMO_DARK_ENERGY } from '../data/knowledge/cosmology/dark_energy';
import { COSMO_STARS } from '../data/knowledge/cosmology/stars';
import { BIO_DNA } from '../data/knowledge/biology/dna';
import { BIO_EVOLUTION } from '../data/knowledge/biology/evolution';
import { CHEM_ATOM } from '../data/knowledge/chemistry/atom';
import { CHEM_TABLE } from '../data/knowledge/chemistry/table';
import { CS_TURING } from '../data/knowledge/cs/turing';

// --- IMPORTS : DEEP SCIENCE (Phase 1.3) ---
import { PHYS_HIGGS, PHYS_ANTIMATTER, PHYS_ENTANGLEMENT, PHYS_TUNNELING, PHYS_STRING } from '../data/knowledge/physics/quantum_deep';
import { COSMO_FERMI, COSMO_DYSON, COSMO_GOLDILOCKS, COSMO_PANSPERMIA, COSMO_FILTER } from '../data/knowledge/cosmology/extreme';
import { BIO_MITOCHONDRIA, BIO_ATP, BIO_NEURON, BIO_TELOMERES, BIO_ENZYME } from '../data/knowledge/biology/mechanisms';
import { META_SIMULATION, META_BOLTZMANN, META_ROKO, META_PAPERCLIP, META_UNCANNY } from '../data/knowledge/cs/meta_sim';
import { MATH_CHAOS, MATH_FRACTAL, MATH_FIBONACCI, MATH_IMAGINARY, MATH_ZERO_ABS } from '../data/knowledge/math/chaos';
import { HUM_FIRE, HUM_WRITING, HUM_MONEY, HUM_MOORE, HUM_ART } from '../data/knowledge/humanity/anthropology';

// --- IMPORTS : EXPANSION (Phase 1.5) ---
import { PHILO_COGITO, PHILO_QUALIA, PHILO_THESEUS, PHILO_NIHILISM, PHILO_UTILITARIAN, PHILO_DETERMINISM, PHILO_SOLIPSISM, PHILO_STOICISM, PHILO_DUALISM, PHILO_EMPIRICISM } from '../data/knowledge/philosophy/mind';
import { COSMO_QUASAR, COSMO_PULSAR, COSMO_NEBULA, COSMO_OORT, COSMO_MAGNETOSPHERE, COSMO_CMB, COSMO_EVENT_HORIZON, COSMO_LANI_AKEA, COSMO_NEUTRON_STAR, COSMO_SOLAR_WIND } from '../data/knowledge/cosmology/objects';
import { PHYS_INERTIA, PHYS_DOPPLER, PHYS_FISSION, PHYS_FUSION, PHYS_REFRACTION, PHYS_RESONANCE, PHYS_HALF_LIFE, PHYS_CONVECTION, PHYS_LASER, PHYS_VACUUM } from '../data/knowledge/physics/forces';
import { BIO_HOMEOSTASIS, BIO_PLACEBO, BIO_ADRENALINE, BIO_VIRUS_RNA, BIO_SYMBIOSIS, BIO_INSTINCT, BIO_PHOTOSYNTHESIS_DEEP, BIO_FERMENTATION, BIO_CLONING, BIO_HIBERNATION } from '../data/knowledge/biology/survival';
import { HUM_AGRICULTURE, HUM_DEMOCRACY, HUM_PRINTING, HUM_INTERNET, HUM_LAW, HUM_MYTH, HUM_TRADE, HUM_VACCINE, HUM_PLASTIC, HUM_SPACE_RACE } from '../data/knowledge/humanity/society';

// --- IMPORTS : MASSIVE UPDATE (Phase 1.7 - 100 Synapses) ---
import { PHYS_LQG, PHYS_HOLOGRAPHIC, PHYS_TIME_CRYSTAL, PHYS_SUPERSYMMETRY, PHYS_TACHYON, PHYS_MAXWELL_DEMON, MATH_GODEL, MATH_PNP, MATH_GAME_LIFE, PHYS_MONOPOLE, PHYS_FALSE_VACUUM, PHYS_QUANTUM_FOAM, PHYS_PLANCK_CONST, MATH_SHANNON, MATH_ATTRACTOR, PHYS_M_THEORY, MATH_HAUSDORFF, MATH_GRAHAM, MATH_RIEMANN, MATH_NON_EUCLID } from '../data/knowledge/physics/exotic';
import { COSMO_KARDASHEV, COSMO_MATRIOSHKA, COSMO_SHKADOV, COSMO_BIG_RIP, COSMO_BIG_CRUNCH, COSMO_BIG_BOUNCE, COSMO_BOOTES, COSMO_ATTRACTOR, COSMO_SOUTH_WALL, COSMO_WHITE_HOLE, COSMO_WORMHOLE, COSMO_ALCUBIERRE, COSMO_KUGELBLITZ, COSMO_ROCHE, COSMO_HILL, COSMO_HAWKING, COSMO_ACCRETION, COSMO_LENS, COSMO_STRINGS, COSMO_VOID } from '../data/knowledge/cosmology/structures';
import { BIO_SILICON, BIO_HIVE, BIO_UPLOAD, BIO_CRYONICS, BIO_DESIGNER_BABY, BIO_GREY_GOO, BIO_DYSON_TREE, BIO_UPLIFT, BIO_CYBORG, BIO_IMMORTALITY, BIO_BIOPRINT, BIO_BCI, BIO_NEURAL_LACE, BIO_EXOCORTEX, BIO_MORPH_FREEDOM, BIO_POSTGENDER, BIO_SENS, BIO_DIRECTED_PANSPERMIA, BIO_TERRAFORMING, BIO_XENOBIOLOGY } from '../data/knowledge/biology/future_bio';
import { PHILO_CAVE, PHILO_PASCAL, PHILO_ZOMBIE, PHILO_ETERNAL_RETURN, PHILO_BRAIN_VAT, PHILO_MARY, PHILO_CHINESE_ROOM, PHILO_NEWCOMB, PHILO_SORITES, PHILO_GRANDFATHER, PHILO_BOOTSTRAP, PHILO_OMPHALOS, PHILO_PANPSYCHISM, PHILO_ABSURDISM, PHILO_LAST_THURSDAY, PHILO_OCKHAM, PHILO_BLACK_SWAN, PHILO_OVERTON, PHILO_NEG_UTIL, PHILO_OPEN_IND } from '../data/knowledge/philosophy/meta_2';
import { CS_AMDAHL, CS_BROOKS, CS_DEAD_INTERNET, CS_DARK_FOREST, CS_CAPTCHA, CS_HALTING, CS_QUINE, CS_ZK_PROOF, CS_BLOCKCHAIN, CS_CYBERWAR, CS_DEEPFAKE, CS_ALGO_BIAS, CS_VON_NEUMANN, CS_BERSERKER, CS_HARD_TAKEOFF, CS_FRIENDLY_AI, CS_ASIMOV, CS_SMART_DUST, CS_AR, CS_METAVERSE } from '../data/knowledge/cs/cybernetics';

// 1. REGISTRY AGGREGATION
const SYNAPSES: KnowledgeNode[] = [
    // Origins
    THERMO_ENTROPY, COSMO_INFLATION, BIO_CELL,
    // Foundations
    PHYS_HEISENBERG, PHYS_RELATIVITY, COSMO_DARK_MATTER, COSMO_DARK_ENERGY, COSMO_STARS,
    BIO_DNA, BIO_EVOLUTION, CHEM_ATOM, CHEM_TABLE, CS_TURING,
    // Deep Physics
    PHYS_HIGGS, PHYS_ANTIMATTER, PHYS_ENTANGLEMENT, PHYS_TUNNELING, PHYS_STRING,
    // Deep Cosmo
    COSMO_FERMI, COSMO_DYSON, COSMO_GOLDILOCKS, COSMO_PANSPERMIA, COSMO_FILTER,
    // Deep Bio
    BIO_MITOCHONDRIA, BIO_ATP, BIO_NEURON, BIO_TELOMERES, BIO_ENZYME,
    // Meta / CS
    META_SIMULATION, META_BOLTZMANN, META_ROKO, META_PAPERCLIP, META_UNCANNY,
    // Math
    MATH_CHAOS, MATH_FRACTAL, MATH_FIBONACCI, MATH_IMAGINARY, MATH_ZERO_ABS,
    // Anthropology
    HUM_FIRE, HUM_WRITING, HUM_MONEY, HUM_MOORE, HUM_ART,
    // Philosophy
    PHILO_COGITO, PHILO_QUALIA, PHILO_THESEUS, PHILO_NIHILISM, PHILO_UTILITARIAN, PHILO_DETERMINISM, PHILO_SOLIPSISM, PHILO_STOICISM, PHILO_DUALISM, PHILO_EMPIRICISM,
    // Cosmic Objects
    COSMO_QUASAR, COSMO_PULSAR, COSMO_NEBULA, COSMO_OORT, COSMO_MAGNETOSPHERE, COSMO_CMB, COSMO_EVENT_HORIZON, COSMO_LANI_AKEA, COSMO_NEUTRON_STAR, COSMO_SOLAR_WIND,
    // Forces
    PHYS_INERTIA, PHYS_DOPPLER, PHYS_FISSION, PHYS_FUSION, PHYS_REFRACTION, PHYS_RESONANCE, PHYS_HALF_LIFE, PHYS_CONVECTION, PHYS_LASER, PHYS_VACUUM,
    // Survival Bio
    BIO_HOMEOSTASIS, BIO_PLACEBO, BIO_ADRENALINE, BIO_VIRUS_RNA, BIO_SYMBIOSIS, BIO_INSTINCT, BIO_PHOTOSYNTHESIS_DEEP, BIO_FERMENTATION, BIO_CLONING, BIO_HIBERNATION,
    // Society
    HUM_AGRICULTURE, HUM_DEMOCRACY, HUM_PRINTING, HUM_INTERNET, HUM_LAW, HUM_MYTH, HUM_TRADE, HUM_VACCINE, HUM_PLASTIC, HUM_SPACE_RACE,
    // NEW 100
    PHYS_LQG, PHYS_HOLOGRAPHIC, PHYS_TIME_CRYSTAL, PHYS_SUPERSYMMETRY, PHYS_TACHYON, PHYS_MAXWELL_DEMON, MATH_GODEL, MATH_PNP, MATH_GAME_LIFE, PHYS_MONOPOLE, PHYS_FALSE_VACUUM, PHYS_QUANTUM_FOAM, PHYS_PLANCK_CONST, MATH_SHANNON, MATH_ATTRACTOR, PHYS_M_THEORY, MATH_HAUSDORFF, MATH_GRAHAM, MATH_RIEMANN, MATH_NON_EUCLID,
    COSMO_KARDASHEV, COSMO_MATRIOSHKA, COSMO_SHKADOV, COSMO_BIG_RIP, COSMO_BIG_CRUNCH, COSMO_BIG_BOUNCE, COSMO_BOOTES, COSMO_ATTRACTOR, COSMO_SOUTH_WALL, COSMO_WHITE_HOLE, COSMO_WORMHOLE, COSMO_ALCUBIERRE, COSMO_KUGELBLITZ, COSMO_ROCHE, COSMO_HILL, COSMO_HAWKING, COSMO_ACCRETION, COSMO_LENS, COSMO_STRINGS, COSMO_VOID,
    BIO_SILICON, BIO_HIVE, BIO_UPLOAD, BIO_CRYONICS, BIO_DESIGNER_BABY, BIO_GREY_GOO, BIO_DYSON_TREE, BIO_UPLIFT, BIO_CYBORG, BIO_IMMORTALITY, BIO_BIOPRINT, BIO_BCI, BIO_NEURAL_LACE, BIO_EXOCORTEX, BIO_MORPH_FREEDOM, BIO_POSTGENDER, BIO_SENS, BIO_DIRECTED_PANSPERMIA, BIO_TERRAFORMING, BIO_XENOBIOLOGY,
    PHILO_CAVE, PHILO_PASCAL, PHILO_ZOMBIE, PHILO_ETERNAL_RETURN, PHILO_BRAIN_VAT, PHILO_MARY, PHILO_CHINESE_ROOM, PHILO_NEWCOMB, PHILO_SORITES, PHILO_GRANDFATHER, PHILO_BOOTSTRAP, PHILO_OMPHALOS, PHILO_PANPSYCHISM, PHILO_ABSURDISM, PHILO_LAST_THURSDAY, PHILO_OCKHAM, PHILO_BLACK_SWAN, PHILO_OVERTON, PHILO_NEG_UTIL, PHILO_OPEN_IND,
    CS_AMDAHL, CS_BROOKS, CS_DEAD_INTERNET, CS_DARK_FOREST, CS_CAPTCHA, CS_HALTING, CS_QUINE, CS_ZK_PROOF, CS_BLOCKCHAIN, CS_CYBERWAR, CS_DEEPFAKE, CS_ALGO_BIAS, CS_VON_NEUMANN, CS_BERSERKER, CS_HARD_TAKEOFF, CS_FRIENDLY_AI, CS_ASIMOV, CS_SMART_DUST, CS_AR, CS_METAVERSE
];

// 2. INTELLIGENT INDEXING
const SYNAPSE_MAP = new Map<string, KnowledgeNode>();
SYNAPSES.forEach(s => SYNAPSE_MAP.set(s.id, s));

// 3. BRAIN VALIDATION & HEALING
const REVERSE_CONNECTIONS: { [key: string]: string[] } = {};

const validateBrain = () => {
    Object.entries(SYNAPTIC_CONNECTIONS).forEach(([sourceId, targets]) => {
        if (!SYNAPSE_MAP.has(sourceId)) return;
        targets.forEach(targetId => {
            if (SYNAPSE_MAP.has(targetId)) {
                if (!REVERSE_CONNECTIONS[targetId]) REVERSE_CONNECTIONS[targetId] = [];
                if (!REVERSE_CONNECTIONS[targetId].includes(sourceId)) {
                    REVERSE_CONNECTIONS[targetId].push(sourceId);
                }
            }
        });
    });
};
validateBrain();

// --- ORGANIC ENGINE (Phase 2.1) ---

const getLinkId = (a: string, b: string) => [a, b].sort().join('-');

export const strengthenConnection = (fromId: string, toId: string, state: GameState): GameState => {
    const linkId = getLinkId(fromId, toId);
    const connection = state.synapticWeights[linkId] || { weight: 0, lastAccess: 0 };
    
    // Hebbian Learning: Fire together, wire together
    const newWeight = connection.weight + 1;
    
    return {
        ...state,
        synapticWeights: {
            ...state.synapticWeights,
            [linkId]: { weight: newWeight, lastAccess: Date.now() }
        },
        lastSynapseId: toId // Store for priming
    };
};

export const calculatePriming = (currentId: string, state: GameState): boolean => {
    if (!state.lastSynapseId) return false;
    // Check if directly connected
    const links = SYNAPTIC_CONNECTIONS[state.lastSynapseId] || [];
    const revLinks = REVERSE_CONNECTIONS[state.lastSynapseId] || [];
    return links.includes(currentId) || revLinks.includes(currentId);
};

export const decaySynapses = (state: GameState): GameState => {
    const now = Date.now();
    const decayRate = 24 * 60 * 60 * 1000; // 24h for 1 point decay
    const newWeights = { ...state.synapticWeights };
    let changed = false;

    Object.keys(newWeights).forEach(key => {
        const conn = newWeights[key];
        const age = now - conn.lastAccess;
        if (age > decayRate && conn.weight > 0) {
            newWeights[key] = { ...conn, weight: Math.max(0, conn.weight - 1) };
            changed = true;
        }
    });

    return changed ? { ...state, synapticWeights: newWeights } : state;
};

export const triggerDreaming = (state: GameState): { updatedState: GameState, dreams: number } => {
    const now = Date.now();
    const offlineTime = now - state.lastSaveTime;
    const hours = offlineTime / (1000 * 60 * 60);
    
    // 1 Dream per hour, max 10
    const dreamCount = Math.min(10, Math.floor(hours));
    if (dreamCount <= 0) return { updatedState: state, dreams: 0 };

    // Random strengthening
    const keys = Object.keys(state.synapticWeights);
    const newWeights = { ...state.synapticWeights };
    if (keys.length > 0) {
        for(let i=0; i<dreamCount; i++) {
            const key = keys[Math.floor(Math.random() * keys.length)];
            newWeights[key].weight += 1;
        }
    }

    return { 
        updatedState: { ...state, synapticWeights: newWeights }, 
        dreams: dreamCount 
    };
};

export const analyzeTopology = (state: GameState): { [key: string]: number } => {
    const tags: { [key: string]: number } = {};
    Object.keys(state.synapseLevels).forEach(synId => {
        const node = SYNAPSE_MAP.get(synId);
        node?.tags.forEach(t => {
            tags[t] = (tags[t] || 0) + 1;
        });
    });
    return tags;
};

// --- API ---

export const searchBrain = (query: string): KnowledgeNode | null => {
    const q = query.toLowerCase().trim();
    if (!q) return null;
    const titleMatch = SYNAPSES.find(s => s.title.toLowerCase() === q);
    if (titleMatch) return titleMatch;
    const partialTitle = SYNAPSES.find(s => s.title.toLowerCase().includes(q));
    if (partialTitle) return partialTitle;
    const tagMatch = SYNAPSES.find(s => s.tags.some(t => q.includes(t)));
    if (tagMatch) return tagMatch;
    return SYNAPSES.find(s => s.fact.toLowerCase().includes(q) || s.analogy.toLowerCase().includes(q)) || null;
};

export const hydrateSynapse = (node: KnowledgeNode, state: GameState): { text: string[], showInteraction: boolean, relatedNodes: KnowledgeNode[], isPrimed: boolean } => {
    const level = state.synapseLevels[node.id] || 0;
    const isPrimed = calculatePriming(node.id, state);
    
    const response: string[] = [];
    if (isPrimed) response.push("✨ AMORÇAGE COGNITIF DÉTECTÉ : Capacité d'apprentissage augmentée.");

    response.push(node.fact);

    if (level >= 1 || isPrimed) {
        response.push(`💡 ANALOGIE : ${node.analogy}`);
        if (node.dynamicContext) {
            try {
                const context = node.dynamicContext(state);
                if (context) response.push(`🌀 CONTEXTE : ${context}`);
            } catch (e) {
                // Ignore errors
            }
        }
    }

    if (level >= 2) {
        response.push(`🔬 EXPERTISE : ${node.detail}`);
    }

    // Suggestions sorted by weight
    const forwardIds = SYNAPTIC_CONNECTIONS[node.id] || [];
    const reverseIds = REVERSE_CONNECTIONS[node.id] || [];
    const allRelatedIds = Array.from(new Set([...forwardIds, ...reverseIds]));

    const relatedNodes = allRelatedIds
        .map(id => {
            if (SYNAPSE_MAP.has(id)) return SYNAPSE_MAP.get(id)!;
            return state.generatedSynapses.find(s => s.id === id);
        })
        .filter((n): n is KnowledgeNode => !!n)
        .map(n => {
            const linkId = getLinkId(node.id, n.id);
            const w = state.synapticWeights[linkId]?.weight || 0;
            return { node: n, weight: w };
        })
        .sort((a, b) => b.weight - a.weight) // Strongest first
        .slice(0, 4)
        .map(w => w.node);

    return { 
        text: response, 
        showInteraction: node.interaction !== undefined && level < 2,
        relatedNodes,
        isPrimed
    };
};
