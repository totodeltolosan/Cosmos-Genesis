
import { KnowledgeNode, ResourceType } from '../../../types';

export const COSMO_DARK_MATTER: KnowledgeNode = {
    id: 'syn_dark_matter',
    title: "Matière Noire",
    tags: ['cosmologie', 'matière', 'noire', 'galaxie', 'gravité'],
    
    fact: "La matière noire est une substance invisible qui compose environ 27% de l'univers. On ne peut pas la voir, mais on détecte sa gravité qui empêche les galaxies de se disloquer.",
    
    analogy: "C'est comme l'homme invisible qui s'assoit sur un matelas. Tu ne le vois pas, mais tu vois le matelas s'enfoncer. Les étoiles tournent trop vite dans les galaxies : sans la matière noire pour les retenir, elles seraient éjectées.",
    
    detail: "Elle n'interagit pas avec la lumière (d'où son nom). Ce n'est pas de l'antimatière ni des trous noirs. Sa nature exacte reste un des plus grands mystères de la physique moderne (WIMPs ? Axions ?).",
    
    interaction: {
        question: "Peut-on voir la matière noire au télescope ?",
        options: [
            "Oui, elle est noire",
            "Non, elle est invisible",
            "Oui, avec des rayons X"
        ],
        correctIndex: 1,
        explanation: "Elle n'émet ni ne reflète aucune lumière. On ne voit que ses effets gravitationnels."
    },

    dynamicContext: (s) => s.resources[ResourceType.DARK_MATTER] > 0 ? `Incroyable ! Tu as réussi à isoler ${s.resources[ResourceType.DARK_MATTER]} unités de Matière Noire. Tes scientifiques ont dépassé la physique du 21ème siècle.` : "Tes galaxies tournent, donc la matière noire est là, cachée dans ton code, attendant d'être découverte."
};
