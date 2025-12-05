
import { KnowledgeNode } from '../../../types';

export const CHEM_TABLE: KnowledgeNode = {
    id: 'syn_table',
    title: "Tableau Périodique",
    tags: ['chimie', 'mendeleïev', 'éléments', 'tableau', 'atome'],
    
    fact: "Le tableau de Mendeleïev classe tous les éléments de l'univers par poids et par comportement. Les éléments d'une même colonne réagissent de la même façon.",
    
    analogy: "C'est comme un calendrier géant des ingrédients de l'univers. Tout ce qui existe est cuisiné avec ces 118 ingrédients. Mendeleïev était si fort qu'il a laissé des cases vides pour des éléments pas encore découverts !",
    
    detail: "Les lignes sont les 'périodes', les colonnes sont les 'familles' (ex: Gaz Nobles, Halogènes). Les éléments lourds (après le Fer) sont créés dans les supernovas.",
    
    interaction: {
        question: "Pourquoi des cases étaient vides au début ?",
        options: [
            "Il avait oublié",
            "Il a prédit des éléments inconnus",
            "Pour faire joli"
        ],
        correctIndex: 1,
        explanation: "Il a deviné leurs propriétés avant même qu'on les trouve."
    },

    dynamicContext: (s) => (s.upgrades['supernova'] || 0) > 0 ? "Grâce à tes Supernovae, tu as rempli le bas du tableau périodique (Or, Uranium). Avant cela, il n'y avait que de l'Hydrogène et de l'Hélium." : "Pour l'instant, ton univers est trop simple chimiquement. Il te faut des explosions stellaires pour créer des métaux."
};
