
import { Lesson, KnowledgeLevel } from '../../types';

export const HISTORY_LESSONS: Lesson[] = [
    {
        id: 'hist_1', title: 'Le Big Bang', description: 'Le début de l\'histoire.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "Tout a commencé par une grande expansion. Avant, il n'y avait rien !",
            [KnowledgeLevel.INTERMEDIATE]: "Il y a 13.8 milliards d'années, l'univers a commencé son expansion rapide.",
            [KnowledgeLevel.EXPERT]: "Modèle cosmologique standard. Expansion depuis une singularité initiale chaude et dense."
        },
        quiz: [{ id: 'q1', question: "Âge de l'univers ?", options: ["2024 ans", "13.8 Mds années", "Infini"], correctIndex: 1, explanation: "Calculé scientifiquement." }],
        reward: "Badge: Origine"
    },
    {
        id: 'hist_2', title: 'Formation Terre', description: 'Notre maison.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "La Terre est née de poussières qui se sont collées il y a très longtemps.",
            [KnowledgeLevel.INTERMEDIATE]: "Il y a 4.5 Mds années, l'accrétion de poussières stellaires a formé la Terre.",
            [KnowledgeLevel.EXPERT]: "L'Hadéen marque la formation par accrétion et la différenciation planétaire noyau-manteau."
        },
        quiz: [{ id: 'q1', question: "Âge de la Terre ?", options: ["4.5 Mds années", "1 Md années", "6000 ans"], correctIndex: 0, explanation: "Datation radiométrique." }],
        reward: "Badge: Planète"
    },
    {
        id: 'hist_3', title: 'La Vie', description: 'Le miracle biologique.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "De petites bêtes microscopiques sont apparues dans les océans.",
            [KnowledgeLevel.INTERMEDIATE]: "La vie est apparue sous forme unicellulaire il y a 3.5 Mds années.",
            [KnowledgeLevel.EXPERT]: "L'abiogenèse reste mystérieuse, mais les procaryotes ont dominé pendant des milliards d'années."
        },
        quiz: [{ id: 'q1', question: "Première vie ?", options: ["Dinosaures", "Bactéries", "Poissons"], correctIndex: 1, explanation: "Les microbes." }],
        reward: "Badge: Cellule"
    },
    {
        id: 'hist_4', title: 'Les Dinosaures', description: 'Les géants du passé.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "Des lézards géants dominaient la Terre avant qu'une météorite ne les éteigne.",
            [KnowledgeLevel.INTERMEDIATE]: "Le Mésozoïque était l'ère des reptiles. Ils ont disparu il y a 66 millions d'années.",
            [KnowledgeLevel.EXPERT]: "L'extinction K-T, causée par l'impact de Chicxulub, a permis l'essor des mammifères."
        },
        quiz: [{ id: 'q1', question: "Cause de leur fin ?", options: ["Glaciation", "Météorite", "Guerre"], correctIndex: 1, explanation: "Impact au Mexique." }],
        reward: "Badge: Fossile"
    },
    {
        id: 'hist_5', title: 'Feu & Outils', description: 'L\'essor de l\'Homme.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "Les premiers humains ont appris à tailler la pierre et faire du feu.",
            [KnowledgeLevel.INTERMEDIATE]: "La maîtrise du feu et des outils a permis à Homo Sapiens de survivre et d'évoluer.",
            [KnowledgeLevel.EXPERT]: "Le Paléolithique a vu le développement cognitif majeur lié à la cuisson des aliments et à la technologie lithique."
        },
        quiz: [{ id: 'q1', question: "Premier outil ?", options: ["Pierre taillée", "Fer", "Bronze"], correctIndex: 0, explanation: "Le silex." }],
        reward: "Badge: Silex"
    },
    {
        id: 'hist_6', title: 'Civilisations', description: 'L\'écriture et les villes.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "Les humains ont construit des villes et inventé l'écriture en Mésopotamie.",
            [KnowledgeLevel.INTERMEDIATE]: "Sumer et l'Égypte sont les berceaux de l'histoire écrite, vers -3000.",
            [KnowledgeLevel.EXPERT]: "La Révolution Néolithique (agriculture) a conduit à la sédentarisation et à la complexification sociale."
        },
        quiz: [{ id: 'q1', question: "Première écriture ?", options: ["Alphabet", "Cunéiforme", "Emoji"], correctIndex: 1, explanation: "À Sumer." }],
        reward: "Badge: Pyramide"
    },
    {
        id: 'hist_7', title: 'Empire Romain', description: 'L\'ordre antique.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "Un immense empire qui a construit des routes et des arènes partout en Europe.",
            [KnowledgeLevel.INTERMEDIATE]: "Rome a dominé la Méditerranée, apportant le droit, l'ingénierie et la Pax Romana.",
            [KnowledgeLevel.EXPERT]: "L'héritage romain structure encore l'Occident (langues romanes, droit civil, architecture)."
        },
        quiz: [{ id: 'q1', question: "Langue des Romains ?", options: ["Italien", "Latin", "Grec"], correctIndex: 1, explanation: "Base du Français." }],
        reward: "Badge: Laurier"
    },
    {
        id: 'hist_8', title: 'Imprimerie', description: 'Le savoir pour tous.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "Gutenberg a inventé une machine pour copier les livres rapidement.",
            [KnowledgeLevel.INTERMEDIATE]: "En 1450, l'imprimerie a permis la diffusion massive des connaissances en Europe.",
            [KnowledgeLevel.EXPERT]: "Catalyseur de la Renaissance, de la Réforme et de la Révolution Scientifique en brisant le monopole du savoir."
        },
        quiz: [{ id: 'q1', question: "Inventeur ?", options: ["Da Vinci", "Gutenberg", "Luther"], correctIndex: 1, explanation: "À Mayence." }],
        reward: "Badge: Livre"
    },
    {
        id: 'hist_9', title: 'Révolution Indus.', description: 'La vapeur et l\'acier.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "Les machines à vapeur et les usines ont remplacé le travail à la main.",
            [KnowledgeLevel.INTERMEDIATE]: "Au 19ème siècle, le charbon et la machine à vapeur ont transformé l'économie mondiale.",
            [KnowledgeLevel.EXPERT]: "Transition d'une économie agraire à industrielle, entraînant urbanisation, capitalisme et pollution."
        },
        quiz: [{ id: 'q1', question: "Énergie clé ?", options: ["Pétrole", "Charbon", "Solaire"], correctIndex: 1, explanation: "La vapeur." }],
        reward: "Badge: Rouage"
    },
    {
        id: 'hist_10', title: 'Ère Numérique', description: 'Le monde connecté.', subject: 'HISTORY',
        content: {
            [KnowledgeLevel.NOVICE]: "L'invention des ordinateurs et d'Internet a tout changé.",
            [KnowledgeLevel.INTERMEDIATE]: "La fin du 20ème siècle a vu l'essor de l'informatique et la mondialisation instantanée.",
            [KnowledgeLevel.EXPERT]: "La Troisième Révolution Industrielle. L'information devient la ressource principale. Vers l'IA."
        },
        quiz: [{ id: 'q1', question: "Réseau mondial ?", options: ["Minitel", "Internet", "Radio"], correctIndex: 1, explanation: "Le Web." }],
        reward: "Badge: Wifi"
    },
    {
        id: 'hist_11', title: 'Grèce Antique', description: 'Le berceau.', subject: 'HISTORY',
        pages: [
            { title: "Athènes", content: "Ils ont inventé la Démocratie (le peuple décide) et le Théâtre." },
            { title: "Philosophie", content: "Socrate, Platon et Aristote ont posé les questions importantes de la vie." }
        ],
        questionPool: [
            { id: 'gr1', type: 'MCQ', question: "Ville de la Démocratie ?", options: ["Sparte", "Athènes", "Troie"], correctIndex: 1, explanation: "Périclès." },
            { id: 'gr2', type: 'INPUT', question: "Dieu de la foudre ?", acceptedAnswers: ["Zeus"], explanation: "Roi de l'Olympe." }
        ],
        reward: "Badge: Colonne"
    },
    {
        id: 'hist_12', title: 'Moyen-Âge', description: 'Chevaliers et Châteaux.', subject: 'HISTORY',
        pages: [
            { title: "Féodalité", content: "Les Seigneurs protégeaient les paysans dans leurs châteaux forts en échange de travail." },
            { title: "Cathédrales", content: "On a construit des églises immenses en pierre qui montaient vers le ciel." }
        ],
        questionPool: [
            { id: 'ma1', type: 'MCQ', question: "Guerrier à cheval ?", options: ["Samouraï", "Chevalier", "Légionnaire"], correctIndex: 1, explanation: "En armure." },
            { id: 'ma2', type: 'INPUT', question: "Maladie noire 1347 ?", acceptedAnswers: ["Peste", "Peste Noire"], explanation: "A tué 1/3 de l'Europe." }
        ],
        reward: "Badge: Épée"
    },
    {
        id: 'hist_13', title: 'Renaissance', description: 'Le réveil des arts.', subject: 'HISTORY',
        pages: [
            { title: "L'Homme au centre", content: "Après le Moyen-Âge, on redécouvre l'art antique. Léonard de Vinci peint la Joconde." },
            { title: "Découvertes", content: "Christophe Colomb découvre l'Amérique en 1492." }
        ],
        questionPool: [
            { id: 'rn1', type: 'INPUT', question: "Date Amérique ?", acceptedAnswers: ["1492"], explanation: "Colomb." },
            { id: 'rn2', type: 'MCQ', question: "Peintre Joconde ?", options: ["Picasso", "De Vinci", "Michel-Ange"], correctIndex: 1, explanation: "Léonard." }
        ],
        reward: "Badge: Pinceau"
    },
    {
        id: 'hist_14', title: 'Guerre Mondiale II', description: 'Le conflit global.', subject: 'HISTORY',
        pages: [
            { title: "Le monde en feu", content: "1939-1945. L'Axe contre les Alliés. Le conflit le plus meurtrier de l'histoire." },
            { title: "La fin", content: "Se termine avec la bombe atomique et la création de l'ONU pour la paix." }
        ],
        questionPool: [
            { id: 'ww1', type: 'INPUT', question: "Année de fin ?", acceptedAnswers: ["1945"], explanation: "8 mai." },
            { id: 'ww2', type: 'MCQ', question: "Débarquement ?", options: ["Normandie", "Bretagne", "Sud"], correctIndex: 0, explanation: "D-Day." }
        ],
        reward: "Badge: Char"
    },
    {
        id: 'hist_15', title: 'Conquête Spatiale', description: 'Vers les étoiles.', subject: 'HISTORY',
        pages: [
            { title: "La course", content: "USA contre URSS. Les Russes envoient le premier homme (Gagarine)." },
            { title: "La Lune", content: "En 1969, Neil Armstrong marche sur la Lune. 'Un petit pas pour l'homme...'." }
        ],
        questionPool: [
            { id: 'sp1', type: 'INPUT', question: "Année Lune ?", acceptedAnswers: ["1969"], explanation: "Apollo 11." },
            { id: 'sp2', type: 'MCQ', question: "Premier homme espace ?", options: ["Armstrong", "Gagarine", "Pesquet"], correctIndex: 1, explanation: "Youri." }
        ],
        reward: "Badge: Lune"
    }
];
