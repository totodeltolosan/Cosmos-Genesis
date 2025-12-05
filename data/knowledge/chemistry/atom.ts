
import { KnowledgeNode, ResourceType } from '../../../types';

export const CHEM_ATOM: KnowledgeNode = {
    id: 'syn_atom',
    title: "Structure de l'Atome",
    tags: ['chimie', 'physique', 'atome', 'proton', 'électron'],
    
    fact: "Un atome est composé d'un noyau minuscule (Protons + et Neutrons) autour duquel tournent des Électrons (-). L'atome est à 99.999% constitué de vide.",
    
    analogy: "Si le noyau était une bille au centre d'un stade de foot, les électrons seraient des mouches tournant dans les tribunes. Tout le reste, le terrain, les gradins, c'est du vide !",
    
    detail: "Le nombre de protons (Numéro Atomique) définit l'élément. 1 proton = Hydrogène, 6 = Carbone, 79 = Or. Les électrons déterminent comment l'atome se lie aux autres (Chimie).",
    
    interaction: {
        question: "Si je change le nombre de protons, je change...",
        options: [
            "Le poids seulement",
            "L'élément (la matière)",
            "La charge électrique"
        ],
        correctIndex: 1,
        explanation: "C'est l'identité de l'atome. Changer les protons transforme du plomb en or !"
    },

    dynamicContext: (s) => s.resources[ResourceType.MATTER] > 1000 ? `Ton univers contient actuellement ${Math.floor(s.resources[ResourceType.MATTER])} unités de matière. C'est l'équivalent de milliards de milliards d'atomes.` : null
};
