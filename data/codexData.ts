
import { CodexEntry, KnowledgeLevel } from '../types';

export const CODEX_ENTRIES: CodexEntry[] = [
    // --- MANUEL DE JEU (HOW TO PLAY) ---
    {
        id: 'guide_basics',
        title: 'MANUEL : Les Bases',
        category: 'GUIDE',
        content: {
            [KnowledgeLevel.NOVICE]: "Bienvenue Pilote. Votre but est de faire grandir l'univers. Cliquez sur 'Déclencher Entropie' pour gagner de l'énergie. Achetez des améliorations pour produire automatiquement. Suivez les Missions du Guide en bas à droite.",
            [KnowledgeLevel.INTERMEDIATE]: "Le jeu repose sur 3 ressources : Entropie (Énergie), Matière (Construction) et Savoir (Recherche). L'Entropie débloque le Big Bang. La Matière forme les étoiles. Le Savoir débloque les technologies avancées.",
            [KnowledgeLevel.EXPERT]: "Optimisez votre production en équilibrant les ressources. La Stabilité (Barre en haut) influence votre rendement : ne croissez pas trop vite sans gérer les fondations sociales ou écologiques."
        },
        unlockCondition: () => true // Always unlocked
    },
    {
        id: 'guide_academy',
        title: 'MANUEL : L\'Académie',
        category: 'GUIDE',
        content: {
            [KnowledgeLevel.NOVICE]: "L'école n'est pas une punition ! C'est le seul moyen d'avancer. Si tu es bloqué, va en classe. Apprends des choses pour obtenir des Diplômes.",
            [KnowledgeLevel.INTERMEDIATE]: "Certaines ères (Biologique, Interstellaire) sont verrouillées par des Diplômes. Vous devez valider 15 leçons dans une matière pour obtenir sa Licence.",
            [KnowledgeLevel.EXPERT]: "Chaque Diplôme obtenu confère un bonus passif de production de +20% (cumulable). Le savoir est littéralement une force productive dans cet univers."
        },
        unlockCondition: () => true
    },
    {
        id: 'guide_lumi',
        title: 'MANUEL : L.U.M.I & Cerveau',
        category: 'GUIDE',
        content: {
            [KnowledgeLevel.NOVICE]: "L.U.M.I est ton ami robot. Il apprend avec toi. Parle-lui via le bouton 'Oracle' en haut. Plus tu lui parles, plus il devient intelligent.",
            [KnowledgeLevel.INTERMEDIATE]: "Le système 'Neural Link' simule un cerveau vivant. Les synapses se renforcent quand vous les utilisez (Plasticité). Faire des liens logiques donne des bonus d'XP.",
            [KnowledgeLevel.EXPERT]: "La 'Synergie Cérébrale' (Somme des poids synaptiques) est un multiplicateur caché de votre production de Complexité. Ne négligez pas le Chat, c'est un moteur de jeu."
        },
        unlockCondition: () => true
    },
    {
        id: 'guide_4x',
        title: 'MANUEL : Exploration 4X',
        category: 'GUIDE',
        content: {
            [KnowledgeLevel.NOVICE]: "Une fois que tu as des étoiles, tu peux explorer la galaxie ! Trouve des planètes, installe des colonies et cherche des trésors.",
            [KnowledgeLevel.INTERMEDIATE]: "Débloqué à l'ère Stellaire. Vous pouvez gérer des colonies (Mines, Labos), construire des Mégastructures (Sphères de Dyson) et interagir avec des Factions.",
            [KnowledgeLevel.EXPERT]: "Les Colonies ont besoin de bonheur pour produire. Les Factions IA s'étendent toutes seules. Construire un Moteur Stellaire permet de déplacer des systèmes entiers."
        },
        unlockCondition: (u) => u.includes('star_ignition')
    },

    // --- ENTRIES EXISTANTES ---
    {
        id: 'entropy',
        title: 'Entropie & Fluctuation',
        category: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "Imagine une chambre bien rangée. Si tu ne fais rien, elle va finir en désordre toute seule. L'univers c'est pareil ! Il préfère le désordre (Entropie). Au tout début, une petite secousse d'énergie (Fluctuation) a suffi à tout démarrer.",
            [KnowledgeLevel.INTERMEDIATE]: "L'entropie mesure le désordre. Au niveau quantique, le vide n'est jamais vraiment vide : il bouillonne d'énergie. Une 'Fluctuation Quantique' a brisé l'équilibre du néant, créant un point d'énergie infinie qui deviendra notre Big Bang.",
            [KnowledgeLevel.EXPERT]: "L'entropie (S) est une grandeur thermodynamique exprimant le degré de dispersion de l'énergie. La fluctuation initiale est une violation temporaire de la conservation de l'énergie permise par le principe d'incertitude d'Heisenberg (ΔE·Δt ≥ ℏ/2), initiant l'expansion."
        },
        unlockCondition: (u) => u.includes('quantum_fluctuation')
    },
    {
        id: 'inflation',
        title: 'Inflation Cosmique',
        category: 'COSMOLOGY',
        content: {
            [KnowledgeLevel.NOVICE]: "Juste après le début, l'univers a grandi d'un coup, super vite ! Comme un ballon qui grossit instantanément. Ça a permis de lisser tout les plis de l'espace.",
            [KnowledgeLevel.INTERMEDIATE]: "Entre 10^-36s et 10^-32s, l'univers a grandi d'un facteur immense. C'est l'Inflation. Elle explique pourquoi l'univers se ressemble partout, peu importe où on regarde.",
            [KnowledgeLevel.EXPERT]: "L'époque inflationnaire, propulsée par l'énergie du vide d'un champ scalaire (Inflaton), résout les problèmes de l'horizon et de la platitude. L'espace a subi une expansion exponentielle de l'ordre de 60 e-folds."
        },
        unlockCondition: (u) => u.includes('inflaton_field')
    },
    {
        id: 'nucleosynthesis',
        title: 'Nucléosynthèse',
        category: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "L'univers était comme une grosse cuisine très chaude. Il a cuisiné les premiers ingrédients simples : l'Hydrogène et l'Hélium. Tout ce qui existe est fait de ça au début !",
            [KnowledgeLevel.INTERMEDIATE]: "Pendant les 3 premières minutes, l'univers était un réacteur nucléaire. Il a fusionné des protons pour créer de l'Hélium. 75% d'Hydrogène, 25% d'Hélium : c'est la recette de base.",
            [KnowledgeLevel.EXPERT]: "La nucléosynthèse primordiale (BBN) s'est produite quand la température a chuté à 10^9 K. La fusion du Deutérium a permis la formation d'Hélium-4 et de traces de Lithium-7. L'abondance observée confirme le modèle du Big Bang."
        },
        unlockCondition: (u) => u.includes('quark_soup')
    }
];
