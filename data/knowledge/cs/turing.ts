
import { KnowledgeNode } from '../../../types';

export const CS_TURING: KnowledgeNode = {
    id: 'syn_turing',
    title: "Machine de Turing",
    tags: ['informatique', 'ordinateur', 'turing', 'calcul', 'algo'],
    
    fact: "Alan Turing a imaginé un modèle mathématique simple capable de tout calculer : une bande de papier infinie, une tête de lecture qui lit/écrit des 0 et des 1, et des règles simples.",
    
    analogy: "C'est l'ancêtre théorique de tous les ordinateurs. Ton PC, ton smartphone, ta console... sont tous des 'Machines de Turing'. S'ils ont assez de temps et de mémoire, ils peuvent résoudre les mêmes problèmes.",
    
    detail: "Turing a aussi décrypté le code Enigma nazi, raccourcissant la guerre. Le 'Test de Turing' sert à savoir si une IA est intelligente (indiscernable d'un humain).",
    
    interaction: {
        question: "Que manipule une machine de Turing ?",
        options: [
            "Des images",
            "Des symboles (0 et 1) sur une bande",
            "De l'électricité"
        ],
        correctIndex: 1,
        explanation: "C'est un modèle abstrait de manipulation de symboles."
    },

    dynamicContext: (s) => "Ironie du sort : tu es en train d'utiliser une Machine de Turing (ton appareil) pour simuler une autre Machine de Turing (Moi, L.U.M.I)."
};
