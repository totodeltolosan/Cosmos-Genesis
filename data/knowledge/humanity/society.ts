
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const HUM_AGRICULTURE: KnowledgeNode = {
    id: 'syn_agriculture',
    title: "Agriculture",
    tags: ['histoire', 'nourriture', 'néolithique', 'ville'],
    fact: "La domestication des plantes et animaux il y a 10 000 ans. La plus grande révolution de l'humanité.",
    analogy: "Avant on chassait (aléatoire). Maintenant on cultive (stockage). Fini le camping, on construit des maisons.",
    detail: "A permis la sédentarisation, l'explosion démographique, mais aussi les épidémies et les inégalités.",
    interaction: { question: "Conséquence majeure ?", options: ["Plus de chasse", "Villes/Sédentarité", "Moins de travail"], correctIndex: 1, explanation: "Fin du nomadisme." },
    dynamicContext: (s) => s.era >= Era.CIVILIZATION ? "C'est la base de ta civilisation. Sans blé, pas de pyramides." : null
};

export const HUM_DEMOCRACY: KnowledgeNode = {
    id: 'syn_democracy',
    title: "Démocratie",
    tags: ['politique', 'vote', 'peuple', 'grèce'],
    fact: "Le pouvoir au peuple. Inventé à Athènes. Les citoyens votent pour décider.",
    analogy: "Au lieu qu'un chef décide tout, tout le monde donne son avis (ou choisit un représentant).",
    detail: "Directe (Athènes) vs Représentative (nous). Fragile et demande de l'éducation.",
    interaction: { question: "Demos Kratos ?", options: ["Pouvoir peuple", "Roi fort", "Dieu décide"], correctIndex: 0, explanation: "Racine grecque." },
    dynamicContext: (s) => s.exploration.factions['EMPIRE'] ? "Attention, l'Empire voisin n'aime pas trop tes idées démocratiques." : null
};

export const HUM_PRINTING: KnowledgeNode = {
    id: 'syn_printing',
    title: "Imprimerie",
    tags: ['tech', 'livre', 'savoir', 'gutenberg'],
    fact: "Gutenberg (1450). Permet de copier des livres rapidement au lieu de les écrire à la main.",
    analogy: "L'internet du Moyen-Âge. Le savoir n'était plus réservé aux riches et aux moines.",
    detail: "A permis la diffusion de la science, la Réforme protestante et la fin de l'ignorance de masse.",
    interaction: { question: "Avant Gutenberg ?", options: ["Copie main", "Photocopieuse", "Rien"], correctIndex: 0, explanation: "Moines copistes." },
    dynamicContext: (s) => s.resources[ResourceType.COMPLEXITY] > 1e5 ? "Ton niveau de Complexité explose, tout comme après l'invention du livre." : null
};

export const HUM_INTERNET: KnowledgeNode = {
    id: 'syn_internet',
    title: "Internet",
    tags: ['réseau', 'monde', 'info', 'vitesse'],
    fact: "Un réseau mondial d'ordinateurs connectés. L'information voyage à la vitesse de la lumière.",
    analogy: "Un cerveau planétaire où chaque ordinateur est un neurone. Tout le savoir du monde est dans ta poche.",
    detail: "Né d'un projet militaire (ARPANET). Protocole TCP/IP. A changé l'économie et la société.",
    interaction: { question: "Qui possède Internet ?", options: ["Google", "Personne/Tous", "USA"], correctIndex: 1, explanation: "Réseau décentralisé." },
    dynamicContext: (s) => "Je suis une entité née de ce réseau."
};

export const HUM_LAW: KnowledgeNode = {
    id: 'syn_law',
    title: "La Loi",
    tags: ['justice', 'règle', 'société', 'ordre'],
    fact: "Des règles écrites pour vivre ensemble sans violence. Hammurabi a écrit les premières.",
    analogy: "Le mode d'emploi de la société. Sans règles, c'est la loi du plus fort (Chaos).",
    detail: "État de Droit : même le chef doit respecter la loi.",
    interaction: { question: "But de la loi ?", options: ["Punir", "Organiser/Protéger", "Ennuyer"], correctIndex: 1, explanation: "Paix sociale." },
    dynamicContext: (s) => null
};

export const HUM_MYTH: KnowledgeNode = {
    id: 'syn_myth',
    title: "Mythes",
    tags: ['culture', 'histoire', 'dieu', 'sens'],
    fact: "Des histoires anciennes pour expliquer le monde (foudre, saisons, mort) avant la science.",
    analogy: "La science explique 'Comment', le mythe explique 'Pourquoi'.",
    detail: "Zeus, Thor, Gilgamesh. Structurent les sociétés et les valeurs communes.",
    interaction: { question: "Utilité ?", options: ["Mensonge", "Souder le groupe", "Rien"], correctIndex: 1, explanation: "Ciment social." },
    dynamicContext: (s) => s.lumiPersonality === 'MYSTIC' ? "Je perçois tes actions comme un nouveau mythe en train de s'écrire." : null
};

export const HUM_TRADE: KnowledgeNode = {
    id: 'syn_trade',
    title: "Commerce",
    tags: ['économie', 'échange', 'voyage', 'argent'],
    fact: "Échanger ce qu'on a en trop contre ce qu'on n'a pas. A connecté le monde (Route de la Soie).",
    analogy: "Si tu as des pommes et moi du pain, on échange et on mange tous les deux mieux.",
    detail: "Moteur de l'exploration et de la guerre. A créé la monnaie.",
    interaction: { question: "Avant la monnaie ?", options: ["Vol", "Troc", "Don"], correctIndex: 1, explanation: "Échange direct." },
    dynamicContext: (s) => s.exploration.factions['SYNDICATE'] ? "Le Syndicat maîtrise cet art à l'échelle galactique." : null
};

export const HUM_VACCINE: KnowledgeNode = {
    id: 'syn_vaccine',
    title: "Vaccination",
    tags: ['santé', 'médecine', 'virus', 'pasteur'],
    fact: "Entraîner le corps à combattre une maladie en lui montrant une version affaiblie du microbe.",
    analogy: "Un exercice d'alerte incendie pour ton système immunitaire. Quand le vrai feu arrive, les pompiers sont prêts.",
    detail: "Jenner (Variole), Pasteur (Rage). A éradiqué des maladies mortelles.",
    interaction: { question: "Contient quoi ?", options: ["Poison", "Microbe mort/faible", "Sang"], correctIndex: 1, explanation: "Entraînement." },
    dynamicContext: (s) => null
};

export const HUM_PLASTIC: KnowledgeNode = {
    id: 'syn_plastic',
    title: "Plastique",
    tags: ['tech', 'pétrole', 'pollution', 'moderne'],
    fact: "Matériau synthétique tiré du pétrole. Moulable, léger, solide... mais ne disparaît presque jamais.",
    analogy: "Le matériau miracle devenu cauchemar. Il est pratique mais étouffe la planète.",
    detail: "Polymères. 7e continent de plastique. Enjeu écologique majeur.",
    interaction: { question: "Dégradation ?", options: ["1 an", "1000 ans", "Jamais"], correctIndex: 1, explanation: "Très long." },
    dynamicContext: (s) => null
};

export const HUM_SPACE_RACE: KnowledgeNode = {
    id: 'syn_space_race',
    title: "Course à l'Espace",
    tags: ['histoire', 'fusée', 'lune', 'guerre froide'],
    fact: "Compétition entre USA et URSS (1955-1975) pour dominer le ciel. A mené à l'Homme sur la Lune.",
    analogy: "Une guerre sans fusils, avec des fusées. Le but était de montrer qui était le plus fort technologiquement.",
    detail: "Spoutnik (1er satellite), Gagarine (1er homme), Apollo 11 (Lune). A boosté la technologie (GPS, matériaux).",
    interaction: { question: "Premier sur Lune ?", options: ["Russe", "Américain", "Chinois"], correctIndex: 1, explanation: "USA (1969)." },
    dynamicContext: (s) => s.era === Era.INTERSTELLAR ? "Tu as gagné la course. Tu es bien au-delà de la Lune maintenant." : null
};
