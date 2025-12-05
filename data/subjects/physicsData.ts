
import { Lesson, KnowledgeLevel } from '../../types';

export const PHYSICS_LESSONS: Lesson[] = [
    {
        id: 'phys_1', title: 'Atomes', description: 'Les briques de tout.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "Tout ce que tu touches est fait de milliards de petites boules appelées atomes.",
            [KnowledgeLevel.INTERMEDIATE]: "Noyau (Protons, Neutrons) + Électrons qui orbitent. Le vide constitue 99% de l'atome.",
            [KnowledgeLevel.EXPERT]: "Modèle quantique. Les électrons sont des nuages de probabilité. Tableau périodique de Mendeleïev."
        },
        quiz: [{ id: 'q1', question: "Charge électron ?", options: ["Positive", "Négative", "Neutre"], correctIndex: 1, explanation: "-" }],
        reward: "Badge: Atome"
    },
    {
        id: 'phys_2', title: 'Gravité', description: 'Ce qui tombe.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "C'est la force qui te garde les pieds sur Terre et fait tomber les pommes.",
            [KnowledgeLevel.INTERMEDIATE]: "Loi de Newton : F = G(m1m2)/d². Attire tous les corps massifs entre eux.",
            [KnowledgeLevel.EXPERT]: "Einstein (Relativité Générale) : La gravité est la courbure de l'espace-temps par la masse."
        },
        quiz: [{ id: 'q1', question: "Qui a reçu la pomme ?", options: ["Newton", "Galilée", "Curie"], correctIndex: 0, explanation: "Légende." }],
        reward: "Badge: Pomme"
    },
    {
        id: 'phys_3', title: 'Lumière', description: 'Onde ou particule ?', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "La lumière voyage très vite et nous permet de voir les couleurs.",
            [KnowledgeLevel.INTERMEDIATE]: "Vitesse c = 300 000 km/s. Spectre visible (Arc-en-ciel) et invisible (UV, IR).",
            [KnowledgeLevel.EXPERT]: "Dualité Onde-Corpuscule. Les photons se comportent à la fois comme des billes et des vagues."
        },
        quiz: [{ id: 'q1', question: "Vitesse lumière ?", options: ["Son", "300 000 km/s", "Infinie"], correctIndex: 1, explanation: "Limite cosmique." }],
        reward: "Badge: Prisme"
    },
    {
        id: 'phys_4', title: 'Électricité', description: 'L\'énergie moderne.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "C'est le courant qui allume les lampes. Attention, ça pique !",
            [KnowledgeLevel.INTERMEDIATE]: "Déplacement d'électrons. Tension (Volt), Intensité (Ampère), Résistance (Ohm).",
            [KnowledgeLevel.EXPERT]: "Loi d'Ohm : U = RI. Courant alternatif (AC) transporté, continu (DC) stocké."
        },
        quiz: [{ id: 'q1', question: "Unité Tension ?", options: ["Volt", "Watt", "Litre"], correctIndex: 0, explanation: "V." }],
        reward: "Badge: Éclair"
    },
    {
        id: 'phys_5', title: 'Thermodynamique', description: 'Chaleur et énergie.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "Le chaud va toujours vers le froid. Rien ne se perd, tout se transforme.",
            [KnowledgeLevel.INTERMEDIATE]: "Conservation de l'énergie. L'entropie augmente toujours (désordre).",
            [KnowledgeLevel.EXPERT]: "Principes : 1. Conservation 2. Irréversibilité (Entropie) 3. Zéro absolu inatteignable."
        },
        quiz: [{ id: 'q1', question: "Rien ne se perd...", options: ["Tout se crée", "Tout se transforme", "Tout disparaît"], correctIndex: 1, explanation: "Lavoisier." }],
        reward: "Badge: Feu"
    },
    {
        id: 'phys_6', title: 'Forces', description: 'Pousser et tirer.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "Pour bouger un objet, il faut le pousser. C'est une force.",
            [KnowledgeLevel.INTERMEDIATE]: "4 forces fondamentales : Gravité, Électromagnétique, Nucléaire Forte, Faible.",
            [KnowledgeLevel.EXPERT]: "Vecteurs force (Norme, Direction, Sens). F = ma (2ème loi de Newton)."
        },
        quiz: [{ id: 'q1', question: "Force aimants ?", options: ["Gravité", "Électromagnétisme", "Nucléaire"], correctIndex: 1, explanation: "Attraction magnétique." }],
        reward: "Badge: Aimant"
    },
    {
        id: 'phys_7', title: 'États Matière', description: 'Solide, Liquide, Gaz.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "L'eau peut être glace, liquide ou vapeur. C'est magique !",
            [KnowledgeLevel.INTERMEDIATE]: "Dépend de la température/pression. Changements d'état : Fusion, Solidification, Évaporation.",
            [KnowledgeLevel.EXPERT]: "Plasma (4ème état). Condensat de Bose-Einstein (5ème état près du zéro absolu)."
        },
        quiz: [{ id: 'q1', question: "Glace devient eau ?", options: ["Fusion", "Sublimation", "Solidification"], correctIndex: 0, explanation: "Fondre." }],
        reward: "Badge: Glace"
    },
    {
        id: 'phys_8', title: 'Relativité', description: 'E=mc²', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "Le temps ne passe pas pareil si on va très vite.",
            [KnowledgeLevel.INTERMEDIATE]: "Einstein. E=mc² lie matière et énergie. Le temps est relatif à l'observateur.",
            [KnowledgeLevel.EXPERT]: "Relativité Restreinte (Vitesse c) et Générale (Gravité courbe l'espace-temps). Dilatation temporelle."
        },
        quiz: [{ id: 'q1', question: "Auteur E=mc² ?", options: ["Newton", "Einstein", "Hawking"], correctIndex: 1, explanation: "Albert." }],
        reward: "Badge: Horloge Molle"
    },
    {
        id: 'phys_9', title: 'Ondes Sonores', description: 'Vibrations de l\'air.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "Le son, c'est de l'air qui tremble et qui tape dans ton oreille.",
            [KnowledgeLevel.INTERMEDIATE]: "Onde mécanique. Vitesse ~340 m/s dans l'air. Fréquence = Hauteur (Grave/Aigu).",
            [KnowledgeLevel.EXPERT]: "Effet Doppler (changement de fréquence avec le mouvement). Ne se propage pas dans le vide."
        },
        quiz: [{ id: 'q1', question: "Son dans l'espace ?", options: ["Oui", "Non", "Sourd"], correctIndex: 1, explanation: "Pas d'air." }],
        reward: "Badge: Note"
    },
    {
        id: 'phys_10', title: 'Mécanique Quantique', description: 'L\'infiniment petit.', subject: 'PHYSICS',
        content: {
            [KnowledgeLevel.NOVICE]: "Les particules minuscules peuvent être à deux endroits en même temps !",
            [KnowledgeLevel.INTERMEDIATE]: "Chat de Schrödinger : Mort et Vivant. Superposition et Intrication.",
            [KnowledgeLevel.EXPERT]: "Fonction d'onde. Principe d'incertitude d'Heisenberg. Probabiliste, pas déterministe."
        },
        quiz: [{ id: 'q1', question: "Chat célèbre ?", options: ["Garfield", "Schrödinger", "Felix"], correctIndex: 1, explanation: "Dans la boîte." }],
        reward: "Badge: Boîte"
    },
    {
        id: 'phys_11', title: 'Magnétisme', description: 'Invisible attraction.', subject: 'PHYSICS',
        pages: [
            { title: "Pôles", content: "Chaque aimant a un pôle Nord et un pôle Sud. Les opposés s'attirent, les mêmes se repoussent." },
            { title: "Terre", content: "La Terre est un aimant géant ! C'est pour ça que la boussole marche." }
        ],
        questionPool: [
            { id: 'mg1', type: 'MCQ', question: "Nord et Nord ?", options: ["S'attirent", "Se repoussent", "Rien"], correctIndex: 1, explanation: "Répulsion." },
            { id: 'mg2', type: 'INPUT', question: "Outil magnétique ?", acceptedAnswers: ["Boussole"], explanation: "Indique le Nord." }
        ],
        reward: "Badge: Fer"
    },
    {
        id: 'phys_12', title: 'Le Système Solaire', description: 'La danse des planètes.', subject: 'PHYSICS',
        pages: [
            { title: "Orbite", content: "Les planètes tombent vers le Soleil mais avancent assez vite pour ne jamais s'écraser." },
            { title: "Kepler", content: "Les orbites ne sont pas des cercles parfaits, ce sont des ellipses (ovales)." }
        ],
        questionPool: [
            { id: 'ss1', type: 'INPUT', question: "Nombre de planètes ?", acceptedAnswers: ["8", "huit"], explanation: "Pluton ne compte plus." },
            { id: 'ss2', type: 'MCQ', question: "Forme de l'orbite ?", options: ["Cercle", "Carré", "Ellipse"], correctIndex: 2, explanation: "Ovale." }
        ],
        reward: "Badge: Planète"
    },
    {
        id: 'phys_13', title: 'Frottement', description: 'Ça freine.', subject: 'PHYSICS',
        pages: [
            { title: "Résistance", content: "Quand deux choses frottent, ça chauffe et ça ralentit. C'est pour ça que la voiture s'arrête." },
            { title: "Utile", content: "Sans frottement, on ne pourrait pas marcher, on glisserait tout le temps !" }
        ],
        questionPool: [
            { id: 'fr1', type: 'MCQ', question: "Effet du frottement ?", options: ["Accélère", "Chauffe/Ralentit", "Gèle"], correctIndex: 1, explanation: "Perte énergie." },
            { id: 'fr2', type: 'INPUT', question: "Qu'est-ce qui glisse ?", acceptedAnswers: ["Glace", "Huile", "Savon"], explanation: "Peu de frottement." }
        ],
        reward: "Badge: Pneu"
    },
    {
        id: 'phys_14', title: 'Pression', description: 'La force de l\'air.', subject: 'PHYSICS',
        pages: [
            { title: "Le poids de l'air", content: "L'air pèse lourd ! Au fond de la mer, l'eau écrase tout : c'est la pression." },
            { title: "Pascal", content: "On mesure la pression en Pascals ou en Bars." }
        ],
        questionPool: [
            { id: 'pr1', type: 'INPUT', question: "Unité de pression ?", acceptedAnswers: ["Bar", "Pascal", "PSI"], explanation: "Blaise Pascal." },
            { id: 'pr2', type: 'MCQ', question: "Pression en altitude ?", options: ["Monte", "Baisse", "Pareil"], correctIndex: 1, explanation: "Moins d'air." }
        ],
        reward: "Badge: Ballon"
    },
    {
        id: 'phys_15', title: 'Trous Noirs', description: 'Les monstres cosmiques.', subject: 'PHYSICS',
        pages: [
            { title: "Gravité Infinie", content: "Une étoile morte qui s'est effondrée. Elle est si lourde que même la lumière ne peut pas s'échapper." },
            { title: "Horizon", content: "L'horizon des événements est la limite de non-retour." }
        ],
        questionPool: [
            { id: 'tn1', type: 'MCQ', question: "Qui s'échappe ?", options: ["Lumière", "Rien", "Fusée"], correctIndex: 1, explanation: "Pas même la lumière." },
            { id: 'tn2', type: 'INPUT', question: "Limite du trou noir ?", acceptedAnswers: ["Horizon"], explanation: "Horizon des événements." }
        ],
        reward: "Badge: Vide"
    }
];
