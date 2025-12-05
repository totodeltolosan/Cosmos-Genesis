
import { KnowledgeNode, Era } from '../../../types';

export const BIO_EVOLUTION: KnowledgeNode = {
    id: 'syn_evolution',
    title: "Sélection Naturelle",
    tags: ['biologie', 'darwin', 'évolution', 'adaptation', 'survie'],
    
    fact: "Les individus d'une espèce ne sont pas tous identiques. Ceux qui ont des traits aidant à survivre (ex: cou plus long) ont plus de bébés. Petit à petit, toute l'espèce change.",
    
    analogy: "Si le climat devient froid, les ours avec le plus de poils survivent mieux. Ils font des bébés poilus. Après mille ans, tous les ours sont très poilus. La nature a 'sélectionné' les poilus.",
    
    detail: "Théorisée par Darwin (1859). Ce n'est pas le plus fort qui survit, mais le plus adapté à son environnement. L'évolution n'a pas de but, c'est un processus aveugle.",
    
    interaction: {
        question: "Qui survit le mieux ?",
        options: [
            "Le plus fort",
            "Le plus intelligent",
            "Le plus adapté"
        ],
        correctIndex: 2,
        explanation: "L'adaptation dépend du milieu. Dans l'eau, avoir des nageoires vaut mieux que des muscles."
    },

    dynamicContext: (s) => s.universeAge > 5 ? `Ton univers a ${s.universeAge.toFixed(1)} milliards d'années. C'est amplement suffisant pour que l'évolution transforme des bactéries en civilisations complexes.` : "Ton univers est trop jeune pour une évolution biologique complexe."
};
