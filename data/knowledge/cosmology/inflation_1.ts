
import { KnowledgeNode, Era } from '../../../types';

export const COSMO_INFLATION: KnowledgeNode = {
    id: 'syn_inflation',
    title: "L'Inflation Cosmique",
    tags: ['inflation', 'expansion', 'big bang', 'taille', 'univers'],
    
    fact: "L'Inflation est une période extrêmement brève (entre 10^-36 et 10^-32 secondes après le Big Bang) durant laquelle l'univers a grossi d'un facteur colossal (au moins 10^26 fois).",
    
    analogy: "Imagine un grain de sable qui deviendrait instantanément aussi grand que la Voie Lactée. C'est ça, l'Inflation. C'est bien plus rapide que la vitesse de la lumière (car c'est l'espace lui-même qui grandit, pas les objets dedans).",
    
    detail: "Cette expansion brutale explique pourquoi l'univers semble le même partout (homogénéité) et pourquoi il est plat géométriquement. Elle a été causée par un champ d'énergie appelé 'Inflaton' qui a ensuite transféré son énergie pour créer la matière.",
    
    interaction: {
        question: "L'Inflation a-t-elle duré longtemps ?",
        options: [
            "Oui, des milliards d'années",
            "Non, une fraction de seconde infime",
            "Elle continue encore aujourd'hui"
        ],
        correctIndex: 1,
        explanation: "C'était un événement explosif ultra-court au tout début de l'univers."
    },

    dynamicContext: (s) => (s.upgrades['inflaton_field'] || 0) > 0 ? "Tu as activé le Champ d'Inflaton. Sans cela, ton univers serait resté une bille microscopique incapable d'héberger la vie." : null
};
