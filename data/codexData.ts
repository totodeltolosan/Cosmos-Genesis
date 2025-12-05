
import { CodexEntry, KnowledgeLevel } from '../types';

export const CODEX_ENTRIES: CodexEntry[] = [
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
