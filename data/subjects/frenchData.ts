
import { Lesson, KnowledgeLevel } from '../../types';

export const FRENCH_LESSONS: Lesson[] = [
    {
        id: 'fr_1', title: 'Les Mots', description: 'Le pouvoir du langage.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Les mots sont des briques pour construire des phrases et dire ce qu'on pense.",
            [KnowledgeLevel.INTERMEDIATE]: "La linguistique étudie les mots (lexique) et leur sens (sémantique).",
            [KnowledgeLevel.EXPERT]: "Le signe linguistique est arbitraire (Saussure). Le langage structure la pensée (Sapir-Whorf)."
        },
        quiz: [{ id: 'q1', question: "Unité de base ?", options: ["Mot", "Lettre", "Son"], correctIndex: 0, explanation: "Le mot porte un sens." }],
        reward: "Badge: Plume"
    },
    {
        id: 'fr_2', title: 'Grammaire', description: 'Les règles du jeu.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Pour qu'on se comprenne, il faut mettre les mots dans le bon ordre.",
            [KnowledgeLevel.INTERMEDIATE]: "La syntaxe régit l'ordre des mots. Sujet - Verbe - Complément.",
            [KnowledgeLevel.EXPERT]: "La grammaire générative (Chomsky) postule des structures innées du langage."
        },
        quiz: [{ id: 'q1', question: "Action de la phrase ?", options: ["Sujet", "Verbe", "Adjectif"], correctIndex: 1, explanation: "Le verbe." }],
        reward: "Badge: Règle"
    },
    {
        id: 'fr_3', title: 'Poésie', description: 'Jouer avec les sons.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Faire des rimes, c'est comme chanter avec des mots.",
            [KnowledgeLevel.INTERMEDIATE]: "L'art d'évoquer des émotions par le rythme, l'harmonie et les images.",
            [KnowledgeLevel.EXPERT]: "Versification : Alexandrins, hémistiches. Baudelaire a modernisé la poésie (Spleen)."
        },
        quiz: [{ id: 'q1', question: "Rime AABB ?", options: ["Croisée", "Plate", "Embrassée"], correctIndex: 1, explanation: "Suivie." }],
        reward: "Badge: Lyre"
    },
    {
        id: 'fr_4', title: 'Victor Hugo', description: 'Le géant des lettres.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Un monsieur très célèbre qui a écrit l'histoire de Quasimodo et de Gavroche.",
            [KnowledgeLevel.INTERMEDIATE]: "Chef de file du Romantisme. Auteur des Misérables et Notre-Dame de Paris.",
            [KnowledgeLevel.EXPERT]: "Engagé politiquement contre la peine de mort et pour la République. Funérailles nationales."
        },
        quiz: [{ id: 'q1', question: "Son œuvre ?", options: ["L'Avare", "Les Misérables", "L'Étranger"], correctIndex: 1, explanation: "Cosette." }],
        reward: "Badge: Panthéon"
    },
    {
        id: 'fr_5', title: 'Molière', description: 'Le théâtre comique.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Il écrivait des pièces pour faire rire le Roi Soleil.",
            [KnowledgeLevel.INTERMEDIATE]: "Jean-Baptiste Poquelin. Satire sociale à travers la comédie (L'Avare, Tartuffe).",
            [KnowledgeLevel.EXPERT]: "Le français est la 'langue de Molière'. Il est mort peu après une représentation du Malade Imaginaire."
        },
        quiz: [{ id: 'q1', question: "Son métier ?", options: ["Peintre", "Dramaturge", "Roi"], correctIndex: 1, explanation: "Théâtre." }],
        reward: "Badge: Masque"
    },
    {
        id: 'fr_6', title: 'Conjugaison', description: 'Le temps qui passe.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Je suis, j'étais, je serai. Ça change tout le temps !",
            [KnowledgeLevel.INTERMEDIATE]: "Accorder le verbe en personne, nombre, temps et mode.",
            [KnowledgeLevel.EXPERT]: "Subjonctif vs Indicatif. La concordance des temps est essentielle pour la clarté."
        },
        quiz: [{ id: 'q1', question: "Futur de 'Je suis' ?", options: ["Je serai", "Je fus", "J'étais"], correctIndex: 0, explanation: "Demain." }],
        reward: "Badge: Horloge"
    },
    {
        id: 'fr_7', title: 'Figures de Style', description: 'Décorer le discours.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Dire 'je meurs de faim', c'est une image, pas la vérité !",
            [KnowledgeLevel.INTERMEDIATE]: "Métaphore, Comparaison, Hyperbole, Litote. Enrichit le texte.",
            [KnowledgeLevel.EXPERT]: "L'oxymore (Obscure clarté) crée un contraste saisissant. Outil rhétorique puissant."
        },
        quiz: [{ id: 'q1', question: "'Un froid de canard' ?", options: ["Métaphore", "Expression", "Oxymore"], correctIndex: 1, explanation: "Idiotisme." }],
        reward: "Badge: Style"
    },
    {
        id: 'fr_8', title: 'Lumières', description: 'Le siècle de la raison.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Des savants comme Voltaire voulaient que tout le monde réfléchisse.",
            [KnowledgeLevel.INTERMEDIATE]: "XVIIIe siècle. Voltaire, Rousseau, Diderot. Combat contre l'intolérance et pour la science.",
            [KnowledgeLevel.EXPERT]: "L'Encyclopédie visait à rassembler tout le savoir humain pour éclairer le peuple."
        },
        quiz: [{ id: 'q1', question: "Philosophe ?", options: ["Voltaire", "Platon", "Sartre"], correctIndex: 0, explanation: "XVIIIe." }],
        reward: "Badge: Bougie"
    },
    {
        id: 'fr_9', title: 'Francophonie', description: 'Le français dans le monde.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "On parle français en France, mais aussi au Canada, en Afrique et ailleurs !",
            [KnowledgeLevel.INTERMEDIATE]: "300 millions de locuteurs. OIF (Organisation Internationale de la Francophonie).",
            [KnowledgeLevel.EXPERT]: "Vecteur diplomatique et culturel. Diversité des créoles et dialectes."
        },
        quiz: [{ id: 'q1', question: "Pays francophone ?", options: ["Sénégal", "Japon", "Brésil"], correctIndex: 0, explanation: "Afrique." }],
        reward: "Badge: Monde"
    },
    {
        id: 'fr_10', title: 'Surréalisme', description: 'Le rêve écrit.', subject: 'FRENCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Des poètes qui écrivaient leurs rêves bizarres sans réfléchir.",
            [KnowledgeLevel.INTERMEDIATE]: "Mouvement du XXe (Breton, Eluard). Écriture automatique, inconscient.",
            [KnowledgeLevel.EXPERT]: "'Ceci n'est pas une pipe'. Refus de la logique rationnelle, influence de la psychanalyse."
        },
        quiz: [{ id: 'q1', question: "Artiste ?", options: ["Dali", "Monet", "Rodin"], correctIndex: 0, explanation: "Montres molles." }],
        reward: "Badge: Rêve"
    },
    {
        id: 'fr_11', title: 'Le Roman', description: 'Raconter une histoire.', subject: 'FRENCH',
        pages: [
            { title: "Aventure", content: "Un livre long qui raconte l'histoire de personnages inventés (fiction)." },
            { title: "Héros", content: "Le personnage principal traverse des épreuves et change à la fin." }
        ],
        questionPool: [
            { id: 'rm1', type: 'MCQ', question: "Longue histoire ?", options: ["Poème", "Roman", "Haïku"], correctIndex: 1, explanation: "Prose." },
            { id: 'rm2', type: 'INPUT', question: "Auteur Harry Potter ?", acceptedAnswers: ["Rowling", "JK Rowling"], explanation: "J.K." }
        ],
        reward: "Badge: Livre"
    },
    {
        id: 'fr_12', title: 'Théâtre', description: 'Sur scène.', subject: 'FRENCH',
        pages: [
            { title: "Dialogue", content: "Pas de narrateur, juste des personnages qui parlent (répliques)." },
            { title: "Didascalies", content: "Les textes en italique qui disent 'Il sort en colère'." }
        ],
        questionPool: [
            { id: 'th1', type: 'MCQ', question: "Texte joué ?", options: ["Roman", "Théâtre", "Essai"], correctIndex: 1, explanation: "Scène." },
            { id: 'th2', type: 'INPUT', question: "Divisé en... ?", acceptedAnswers: ["Actes", "Scènes"], explanation: "Parties." }
        ],
        reward: "Badge: Rideau"
    },
    {
        id: 'fr_13', title: 'Science-Fiction', description: 'Futur imaginaire.', subject: 'FRENCH',
        pages: [
            { title: "Et si ?", content: "On imagine le futur, l'espace, les robots. Jules Verne est le grand-père de la SF." },
            { title: "Dystopie", content: "Un futur sombre où tout va mal (comme Hunger Games)." }
        ],
        questionPool: [
            { id: 'sf1', type: 'INPUT', question: "Auteur 20.000 lieues ?", acceptedAnswers: ["Verne", "Jules Verne"], explanation: "Nautilus." },
            { id: 'sf2', type: 'MCQ', question: "Thème SF ?", options: ["Amour", "Robots/Espace", "Nature"], correctIndex: 1, explanation: "Technologie." }
        ],
        reward: "Badge: Alien"
    },
    {
        id: 'fr_14', title: 'La Fable', description: 'Petite leçon.', subject: 'FRENCH',
        pages: [
            { title: "La Fontaine", content: "Des histoires courtes avec des animaux qui parlent (Le Corbeau et le Renard)." },
            { title: "Morale", content: "La petite phrase à la fin qui nous apprend la sagesse." }
        ],
        questionPool: [
            { id: 'fb1', type: 'MCQ', question: "Qui a le fromage ?", options: ["Renard", "Corbeau", "Loup"], correctIndex: 1, explanation: "Maître Corbeau." },
            { id: 'fb2', type: 'INPUT', question: "Auteur fables ?", acceptedAnswers: ["La Fontaine", "Esope"], explanation: "Jean de." }
        ],
        reward: "Badge: Renard"
    },
    {
        id: 'fr_15', title: 'Le Conte', description: 'Il était une fois.', subject: 'FRENCH',
        pages: [
            { title: "Merveilleux", content: "Des fées, des ogres, de la magie. Ça finit souvent bien." },
            { title: "Perrault", content: "Cendrillon, Le Petit Poucet, Barbe Bleue." }
        ],
        questionPool: [
            { id: 'ct1', type: 'INPUT', question: "Phrase de début ?", acceptedAnswers: ["Il était une fois"], explanation: "Classique." },
            { id: 'ct2', type: 'MCQ', question: "Méchante ?", options: ["Fée", "Sorcière", "Princesse"], correctIndex: 1, explanation: "Antagoniste." }
        ],
        reward: "Badge: Baguette"
    }
];
