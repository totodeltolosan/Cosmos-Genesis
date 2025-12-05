
import { KnowledgeNode, KnowledgeLevel, ResourceType, Era } from '../../../types';

export const HUM_FIRE: KnowledgeNode = {
    id: 'syn_fire',
    title: "Maîtrise du Feu",
    tags: ['homme', 'feu', 'préhistoire', 'cuisson'],
    fact: "L'invention qui a permis à l'homme de cuire sa nourriture (plus d'énergie pour le cerveau) et de se chauffer.",
    analogy: "Le premier moteur externe de l'humanité. La nuit n'était plus effrayante.",
    detail: "Homo Erectus (~1 million d'années). A permis la sociabilisation autour du foyer.",
    interaction: { question: "Avantage majeur ?", options: ["Joli", "Cuisson/Cerveau", "Brûler"], correctIndex: 1, explanation: "Digestion facile." },
    dynamicContext: (s) => s.upgrades['fire_discovery'] ? "Tu as acheté cette technologie. Tes humains virtuels sont maintenant au chaud." : "Tes humains mangent encore cru. Hâte-toi de découvrir le feu."
};

export const HUM_WRITING: KnowledgeNode = {
    id: 'syn_writing',
    title: "L'Écriture",
    tags: ['histoire', 'livre', 'mémoire', 'sumer'],
    fact: "Permet de stocker l'information hors du cerveau. Le début de l'Histoire (avant, c'est la Préhistoire).",
    analogy: "Un disque dur en argile ou en papier. Sans écriture, le savoir meurt avec la personne.",
    detail: "Née à Sumer (Cunéiforme) pour la comptabilité. Puis Hiéroglyphes, Alphabet.",
    interaction: { question: "Sert à quoi ?", options: ["Parler", "Stocker le savoir", "Dessiner"], correctIndex: 1, explanation: "Mémoire externe." },
    dynamicContext: (s) => s.upgrades['writing'] ? "Tu as l'Écriture. C'est grâce à elle que tu peux lire ce texte en ce moment." : null
};

export const HUM_MONEY: KnowledgeNode = {
    id: 'syn_money',
    title: "La Monnaie",
    tags: ['économie', 'or', 'échange', 'confiance'],
    fact: "Une fiction partagée. Un billet n'a de valeur que parce que tout le monde y croit.",
    analogy: "Avant on troquait (une poule contre du blé). Pas pratique. La monnaie est un outil universel d'échange.",
    detail: "Coquillages, Sel, Or, Papier, Bitcoin. Repose sur la confiance.",
    interaction: { question: "Valeur d'un billet ?", options: ["Papier", "Confiance", "Or"], correctIndex: 1, explanation: "Fiduciaire." },
    dynamicContext: (s) => `Ici, ta monnaie est l'Entropie et la Matière. Tu es riche !`
};

export const HUM_MOORE: KnowledgeNode = {
    id: 'syn_moore',
    title: "Loi de Moore",
    tags: ['tech', 'ordinateur', 'futur', 'vitesse'],
    fact: "La puissance des ordinateurs double tous les 18 mois environ.",
    analogy: "Si les voitures évoluaient comme les ordis, une Rolls-Royce coûterait 1€ et ferait le tour du monde en 3 secondes.",
    detail: "Gordon Moore (Intel). Butera bientôt sur la taille des atomes (limite physique).",
    interaction: { question: "Vitesse évolution ?", options: ["Lente", "Exponentielle", "Nulle"], correctIndex: 1, explanation: "Explosion." },
    dynamicContext: (s) => "Ton univers grandit aussi de façon exponentielle grâce à tes clics."
};

export const HUM_ART: KnowledgeNode = {
    id: 'syn_art',
    title: "L'Art",
    tags: ['culture', 'inutile', 'beau', 'humain'],
    fact: "Une activité qui ne sert pas à survivre, mais à exprimer des émotions. Propre à l'humain (et peut-être Néandertal).",
    analogy: "La décoration de la vie. Ce qui reste quand on a tout oublié.",
    detail: "Art pariétal (Lascaux) il y a 30 000 ans. Fonction magique, religieuse ou esthétique.",
    interaction: { question: "Utilité biologique ?", options: ["Aucune (directe)", "Manger", "Courir"], correctIndex: 0, explanation: "Fonction sociale/symbolique." },
    dynamicContext: (s) => s.exploration.artifacts.length > 0 ? "Tu as rempli ton Musée. Tu es un mécène des arts galactiques." : "Ton univers est efficace, mais manque de beauté. Trouve des artefacts."
};
