
import { Lesson, KnowledgeLevel } from '../../types';

export const LOGIC_LESSONS: Lesson[] = [
    {
        id: 'log_1', title: 'Suites Logiques', description: '1, 2, 3...', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Devine ce qui vient après ! Rond, Carré, Rond, Carré... ?",
            [KnowledgeLevel.INTERMEDIATE]: "Identifier le motif (pattern). Arithmétique (+2) ou Géométrique (x2).",
            [KnowledgeLevel.EXPERT]: "Suites complexes (Fibonacci, n²-1). Test classique de QI (Matrices de Raven)."
        },
        quiz: [{ id: 'q1', question: "2, 4, 8, 16... ?", options: ["20", "32", "24"], correctIndex: 1, explanation: "Double (x2)." }],
        reward: "Badge: Suite"
    },
    {
        id: 'log_2', title: 'Déduction', description: 'Sherlock Holmes.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Si le sol est mouillé, c'est qu'il a plu (ou qu'on a renversé de l'eau).",
            [KnowledgeLevel.INTERMEDIATE]: "Syllogisme : Tous les hommes sont mortels, Socrate est un homme, donc...",
            [KnowledgeLevel.EXPERT]: "Modus Ponens / Modus Tollens. Raisonnement déductif vs inductif."
        },
        quiz: [{ id: 'q1', question: "A=B, B=C donc ?", options: ["A=C", "A≠C", "Rien"], correctIndex: 0, explanation: "Transitivité." }],
        reward: "Badge: Loupe"
    },
    {
        id: 'log_3', title: 'Intrus', description: 'Cherchez l\'erreur.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Pomme, Banane, Chaise, Fraise. Lequel n'a rien à faire là ?",
            [KnowledgeLevel.INTERMEDIATE]: "Catégorisation. Identifier la propriété commune et l'exception.",
            [KnowledgeLevel.EXPERT]: "Pensée latérale. Parfois l'intrus dépend du critère (forme, couleur, usage, étymologie)."
        },
        quiz: [{ id: 'q1', question: "Chien, Chat, Table, Lion ?", options: ["Lion", "Table", "Chat"], correctIndex: 1, explanation: "Objet vs Animal." }],
        reward: "Badge: Croix"
    },
    {
        id: 'log_4', title: 'Mémoire Spatiale', description: 'Rotation mentale.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Imagine un cube qui tourne dans ta tête. Tu vois l'autre côté ?",
            [KnowledgeLevel.INTERMEDIATE]: "Capacité à manipuler des objets 3D mentalement. Pliage de patrons.",
            [KnowledgeLevel.EXPERT]: "Essentiel en ingénierie et architecture. Test des cubes de Kohs."
        },
        quiz: [{ id: 'q1', question: "Cube déplié = ?", options: ["Cercle", "Croix 6 carrés", "Triangle"], correctIndex: 1, explanation: "Patron." }],
        reward: "Badge: Cube"
    },
    {
        id: 'log_5', title: 'Énigmes', description: 'Pensée latérale.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Qu'est-ce qui a des dents mais ne mord pas ? Un peigne !",
            [KnowledgeLevel.INTERMEDIATE]: "Sortir du cadre (Out of the box). La solution n'est pas directe.",
            [KnowledgeLevel.EXPERT]: "Problème des 9 points. Paradoxes logiques. Flexibilité cognitive."
        },
        quiz: [{ id: 'q1', question: "Je commence la Nuit et fini le MatiN ?", options: ["Soleil", "Lune", "N"], correctIndex: 2, explanation: "La lettre N." }],
        reward: "Badge: ??"
    },
    {
        id: 'log_6', title: 'Algèbre Booléenne', description: 'Vrai ou Faux.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Si tu as faim ET qu'il y a un gâteau, tu manges. Si pas gâteau, tu manges pas.",
            [KnowledgeLevel.INTERMEDIATE]: "Opérateurs logiques : AND, OR, NOT, XOR. Base de l'informatique.",
            [KnowledgeLevel.EXPERT]: "Tables de vérité. Lois de De Morgan. Circuits logiques."
        },
        quiz: [{ id: 'q1', question: "VRAI et FAUX = ?", options: ["VRAI", "FAUX", "Peut-être"], correctIndex: 1, explanation: "AND exige tout vrai." }],
        reward: "Badge: 1/0"
    },
    {
        id: 'log_7', title: 'Probabilités', description: 'Intuition du hasard.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Si tu joues à pile ou face 10 fois, tu n'auras pas toujours 5 piles et 5 faces.",
            [KnowledgeLevel.INTERMEDIATE]: "Loi des grands nombres. Le hasard n'a pas de mémoire (Gambler's Fallacy).",
            [KnowledgeLevel.EXPERT]: "Bayésianisme : mettre à jour ses croyances avec de nouvelles preuves. Problème de Monty Hall."
        },
        quiz: [{ id: 'q1', question: "Pile ou Face : proba ?", options: ["50/50", "100%", "0%"], correctIndex: 0, explanation: "Équiprobable." }],
        reward: "Badge: Dé"
    },
    {
        id: 'log_8', title: 'Analyse', description: 'Décortiquer.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Regarde bien l'image. Il manque un détail !",
            [KnowledgeLevel.INTERMEDIATE]: "Observation fine. Trouver les différences. Identifier les composants d'un système.",
            [KnowledgeLevel.EXPERT]: "Pensée systémique. Comprendre les relations de cause à effet multiples."
        },
        quiz: [{ id: 'q1', question: "L'eau bout à ?", options: ["50°", "100°", "1000°"], correctIndex: 1, explanation: "Celsius." }],
        reward: "Badge: Œil"
    },
    {
        id: 'log_9', title: 'Codage', description: 'Décrypter.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "A=1, B=2... Alors 'BAD' = 2-1-4 !",
            [KnowledgeLevel.INTERMEDIATE]: "Chiffre de César (décalage). Substitutions simples.",
            [KnowledgeLevel.EXPERT]: "Reconnaissance de motifs (Pattern matching). Cryptanalyse fréquentielle."
        },
        quiz: [{ id: 'q1', question: "A=1, B=2. C = ?", options: ["3", "4", "5"], correctIndex: 0, explanation: "Logique." }],
        reward: "Badge: Clé"
    },
    {
        id: 'log_10', title: 'Stratégie', description: 'Anticiper.', subject: 'QI',
        content: {
            [KnowledgeLevel.NOVICE]: "Aux échecs, il faut deviner ce que l'autre va faire.",
            [KnowledgeLevel.INTERMEDIATE]: "Planification à plusieurs coups. Minimax. Gestion des ressources.",
            [KnowledgeLevel.EXPERT]: "Théorie des Jeux (Nash). Dilemme du Prisonnier. Coopérer ou trahir ?"
        },
        quiz: [{ id: 'q1', question: "Jeu de stratégie ?", options: ["Dés", "Échecs", "Loto"], correctIndex: 1, explanation: "Pas de hasard." }],
        reward: "Badge: Roi"
    },
    {
        id: 'log_11', title: 'Illusions d\'Optique', description: 'L\'œil trompé.', subject: 'QI',
        pages: [
            { title: "Réalité", content: "Ton cerveau construit l'image. Parfois, il se trompe sur la taille ou la couleur." },
            { title: "Exemple", content: "Deux lignes de même taille peuvent paraître différentes selon le dessin autour (Müller-Lyer)." }
        ],
        questionPool: [
            { id: 'il1', type: 'MCQ', question: "Qui est trompé ?", options: ["L'œil", "Le cerveau", "La lumière"], correctIndex: 1, explanation: "Interprétation." },
            { id: 'il2', type: 'INPUT', question: "Illusion de mouvement ?", acceptedAnswers: ["Cinéma"], explanation: "Images fixes." }
        ],
        reward: "Badge: Spirale"
    },
    {
        id: 'log_12', title: 'Syllogismes', description: 'Si... Alors.', subject: 'QI',
        pages: [
            { title: "Logique pure", content: "Tous les chats sont gris. Minou est un chat. Donc Minou est gris." },
            { title: "Piège", content: "Attention aux faux liens ! 'Il pleut donc je suis mouillé' (pas forcément, j'ai un parapluie)." }
        ],
        questionPool: [
            { id: 'sy1', type: 'MCQ', question: "Tous les A sont B. C est A. Donc ?", options: ["C est B", "C est D", "Rien"], correctIndex: 0, explanation: "Déduction." },
            { id: 'sy2', type: 'INPUT', question: "Socrate est... ?", acceptedAnswers: ["Mortel"], explanation: "Tous les hommes sont mortels." }
        ],
        reward: "Badge: Cerveau"
    },
    {
        id: 'log_13', title: 'Pliage 3D', description: 'Origami mental.', subject: 'QI',
        pages: [
            { title: "Visualisation", content: "Imagine une feuille pliée en 4. Si je coupe un coin, à quoi ça ressemble déplié ?" },
            { title: "Symétrie", content: "C'est un test de géométrie dans l'espace très courant." }
        ],
        questionPool: [
            { id: 'pl1', type: 'MCQ', question: "Plier en 2 deux fois ?", options: ["2 couches", "4 couches", "8 couches"], correctIndex: 1, explanation: "2 x 2." },
            { id: 'pl2', type: 'INPUT', question: "Feuille pliée en deux ?", acceptedAnswers: ["Symétrie"], explanation: "Axe central." }
        ],
        reward: "Badge: Grue"
    },
    {
        id: 'log_14', title: 'Cryptarithmétique', description: 'Lettres et chiffres.', subject: 'QI',
        pages: [
            { title: "Code", content: "SEND + MORE = MONEY. Chaque lettre est un chiffre unique." },
            { title: "Logique", content: "Il faut déduire les valeurs par retenue et élimination." }
        ],
        questionPool: [
            { id: 'cr1', type: 'INPUT', question: "A+A=B, B=4. A=?", acceptedAnswers: ["2"], explanation: "2+2=4." },
            { id: 'cr2', type: 'MCQ', question: "Maximum chiffre ?", options: ["9", "10", "Infini"], correctIndex: 0, explanation: "Base 10." }
        ],
        reward: "Badge: Chiffre"
    },
    {
        id: 'log_15', title: 'Pensée Latérale', description: 'Pas évident.', subject: 'QI',
        pages: [
            { title: "Contre-intuitif", content: "Un homme habite au 10ème étage. Il prend l'ascenseur pour descendre, mais l'escalier pour monter. Pourquoi ?" },
            { title: "Réponse", content: "Il est trop petit pour appuyer sur le bouton 10 !" }
        ],
        questionPool: [
            { id: 'pl1', type: 'MCQ', question: "Mois à 28 jours ?", options: ["Février", "Aucun", "Tous"], correctIndex: 2, explanation: "Tous ont au moins 28." },
            { id: 'pl2', type: 'INPUT', question: "Qu'est-ce qui sèche en mouillant ?", acceptedAnswers: ["Serviette"], explanation: "Elle absorbe l'eau." }
        ],
        reward: "Badge: Ampoule"
    }
];
