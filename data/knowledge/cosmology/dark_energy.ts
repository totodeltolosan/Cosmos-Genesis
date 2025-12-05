
import { KnowledgeNode, Era } from '../../../types';

export const COSMO_DARK_ENERGY: KnowledgeNode = {
    id: 'syn_dark_energy',
    title: "Énergie Noire",
    tags: ['cosmologie', 'énergie', 'noire', 'expansion', 'univers'],
    
    fact: "L'énergie noire est une force mystérieuse qui remplit tout l'espace et qui accélère l'expansion de l'univers. Elle repousse les galaxies les unes des autres.",
    
    analogy: "Imagine que tu jettes une pomme en l'air. Normalement, elle ralentit et retombe (gravité). Avec l'énergie noire, la pomme monterait de plus en plus vite vers le ciel ! L'univers ne fait pas que grandir, il grandit de plus en plus vite.",
    
    detail: "Elle représente environ 68% de l'énergie totale de l'univers. C'est l'opposé de la gravité. On pense qu'elle est liée à l'énergie du vide (Constante Cosmologique d'Einstein).",
    
    interaction: {
        question: "Que fait l'énergie noire à l'univers ?",
        options: [
            "Elle le contracte (Big Crunch)",
            "Elle le stabilise",
            "Elle accélère son expansion"
        ],
        correctIndex: 2,
        explanation: "Elle agit comme une sorte d'anti-gravité à grande échelle."
    },

    dynamicContext: (s) => s.era === Era.GALACTIC || s.era === Era.UNIVERSAL ? "Dans ton ère actuelle, l'Énergie Noire a gagné la bataille contre la gravité. L'expansion est devenue inarrêtable." : null
};
