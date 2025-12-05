
import { KnowledgeNode, Era } from '../../../types';

export const BIO_CELL: KnowledgeNode = {
    id: 'syn_cell',
    title: "La Cellule Vivante",
    tags: ['vie', 'biologie', 'adn', 'microscope', 'corps'],
    
    fact: "La cellule est l'unité de base de la vie. Tous les êtres vivants sont faits de cellules. Elle est délimitée par une membrane et contient le matériel génétique (ADN).",
    
    analogy: "Une cellule est comme une usine autonome. Les murs sont la membrane. Le patron est le Noyau (avec les plans ADN). Les machines sont les organites (Mitochondries pour l'énergie, Ribosomes pour construire les protéines).",
    
    detail: "Il existe deux grands types : les Procaryotes (comme les bactéries, simples et sans noyau) et les Eucaryotes (comme nos cellules, complexes avec noyau). Ton corps contient environ 30 000 milliards de cellules !",
    
    interaction: {
        question: "Quel est le rôle de la membrane ?",
        options: [
            "Fabriquer de l'énergie",
            "Protéger et filtrer les entrées/sorties",
            "Stocker l'ADN"
        ],
        correctIndex: 1,
        explanation: "C'est la frontière de l'usine qui contrôle ce qui entre (nutriments) et ce qui sort (déchets)."
    },

    dynamicContext: (s) => s.era === Era.BIOLOGICAL ? "Tu es en plein dans l'Ère Biologique. Des milliards de cellules comme celle-ci sont en train de naître dans tes océans virtuels." : null
};
