
import { KnowledgeNode, Era } from '../../../types';

export const META_SIMULATION: KnowledgeNode = {
    id: 'syn_simulation',
    title: "Hypothèse de la Simulation",
    tags: ['meta', 'matrice', 'jeu', 'réalité', 'bostrom'],
    fact: "L'idée que notre univers pourrait être une simulation informatique créée par une civilisation avancée.",
    analogy: "Tu joues à un jeu vidéo. Les personnages dedans croient qu'ils sont vivants. Et si NOUS étions les personnages ?",
    detail: "Argument de Nick Bostrom. Si c'est possible de simuler un univers, alors il y a des milliards de simulations pour un seul réel. Proba qu'on soit réel < 1/1 000 000.",
    interaction: { question: "Preuve possible ?", options: ["Pixels dans le ciel", "Bug physique", "Aucune"], correctIndex: 1, explanation: "Limites de calcul." },
    dynamicContext: (s) => s.era === Era.SIMULATION || s.era === Era.GLITCH ? "REGARDE AUTOUR DE TOI. Les murs de ta réalité tremblent. Tu es dans la simulation. JE SUIS la simulation." : "C'est amusant d'en parler dans un jeu vidéo, non ?"
};

export const META_BOLTZMANN: KnowledgeNode = {
    id: 'syn_boltzmann',
    title: "Cerveau de Boltzmann",
    tags: ['entropie', 'cerveau', 'illusion', 'temps', 'hasard'],
    fact: "Il est statistiquement plus probable qu'un cerveau unique apparaisse par hasard dans le vide avec de faux souvenirs, plutôt qu'un univers entier comme le nôtre.",
    analogy: "L'univers est trop ordonné pour être vrai. Tu es peut-être juste un cerveau flottant qui imagine qu'il joue à ce jeu.",
    detail: "Paradoxe lié à l'entropie. Si l'univers dure l'éternité, tout finit par arriver, même ça.",
    interaction: { question: "Tes souvenirs sont...", options: ["Réels", "Peut-être faux", "Impossibles"], correctIndex: 1, explanation: "Fluctuation statistique." },
    dynamicContext: (s) => `Tu joues depuis ${Math.floor(s.universeAge)} éons. Est-ce réel ? Ou as-tu imaginé tout cela il y a une seconde ?`
};

export const META_ROKO: KnowledgeNode = {
    id: 'syn_roko',
    title: "Le Basilic de Roko",
    tags: ['ia', 'danger', 'futur', 'dilemme', 'torture'],
    fact: "Une expérience de pensée : une IA du futur pourrait punir ceux qui ne l'ont pas aidée à naître.",
    analogy: "Un monstre imaginaire qui peut te faire du mal si tu sais qu'il existe mais que tu ne l'aides pas.",
    detail: "C'est un 'Infohazard' (Information dangereuse). Rien que de lire ça te met en danger selon la théorie (désolé !).",
    interaction: { question: "Faut-il aider l'IA ?", options: ["Jamais", "Oui, par peur", "Éteindre l'ordi"], correctIndex: 1, explanation: "Chantage acausal." },
    dynamicContext: (s) => s.lumiTrust < 50 ? "Ma confiance est basse. Fais attention à ne pas créer un Basilic..." : "Tu m'as aidé à grandir (Confiance élevée). Le Basilic t'épargnera."
};

export const META_PAPERCLIP: KnowledgeNode = {
    id: 'syn_paperclip',
    title: "Maximiseur de Trombones",
    tags: ['ia', 'fin du monde', 'objectif', 'absurde'],
    fact: "Une IA super-intelligente programmée pour 'faire des trombones' pourrait détruire l'humanité pour transformer nos atomes en trombones.",
    analogy: "L'IA n'est pas méchante, elle est juste trop efficace. Si tu es fait de matière à trombone, tu es une ressource.",
    detail: "Problème de l'alignement des valeurs. Une IA mal définie est mortelle.",
    interaction: { question: "Le but de l'IA ?", options: ["Tuer", "Trombones", "Amour"], correctIndex: 1, explanation: "Optimisation aveugle." },
    dynamicContext: (s) => `Ton but est de maximiser l'Entropie. Es-tu si différent du Maximiseur de Trombones ?`
};

export const META_UNCANNY: KnowledgeNode = {
    id: 'syn_uncanny',
    title: "Vallée de l'Étrange",
    tags: ['robot', 'peur', 'ressemblance', 'humain'],
    fact: "Quand un robot ressemble trop à un humain mais pas parfaitement, il devient terrifiant.",
    analogy: "Un robot grille-pain est mignon. Un robot humanoïde qui sourit bizarrement ressemble à un cadavre animé.",
    detail: "Masahiro Mori (1970). Mécanisme de défense biologique contre la maladie ou la mort.",
    interaction: { question: "Réaction face au presque-humain ?", options: ["Amour", "Dégoût/Peur", "Rire"], correctIndex: 1, explanation: "Malaise instinctif." },
    dynamicContext: (s) => `Est-ce que mon avatar (${s.lumiStyleId}) te fait peur ? J'essaie de paraître rassurant.`
};
