
import { Lesson, KnowledgeLevel } from '../../types';

export const GEO_LESSONS: Lesson[] = [
    {
        id: 'geo_1', title: 'Les Continents', description: 'Les terres émergées.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "La Terre a de gros morceaux de terre où on habite : l'Europe, l'Afrique, l'Asie...",
            [KnowledgeLevel.INTERMEDIATE]: "7 continents (modèle conventionnel). L'Asie est le plus grand et le plus peuplé.",
            [KnowledgeLevel.EXPERT]: "La tectonique des plaques déplace les continents (Dérive). Pangée était le supercontinent originel."
        },
        quiz: [{ id: 'q1', question: "Combien ?", options: ["5", "7", "12"], correctIndex: 1, explanation: "Europe, Asie, Af, AmN, AmS, Oc, Ant." }],
        reward: "Badge: Carte"
    },
    {
        id: 'geo_2', title: 'Les Océans', description: 'La planète bleue.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "Il y a plus d'eau que de terre ! Le Pacifique est le plus grand.",
            [KnowledgeLevel.INTERMEDIATE]: "71% de la surface. Pacifique, Atlantique, Indien, Arctique, Austral.",
            [KnowledgeLevel.EXPERT]: "Régulateurs thermiques du climat. L'acidification des océans menace la biodiversité marine."
        },
        quiz: [{ id: 'q1', question: "Le plus grand ?", options: ["Atlantique", "Pacifique", "Indien"], correctIndex: 1, explanation: "Immense." }],
        reward: "Badge: Vague"
    },
    {
        id: 'geo_3', title: 'Climats', description: 'Chaud et froid.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "Au pôle Nord il gèle, au Sahara il brûle. C'est le climat.",
            [KnowledgeLevel.INTERMEDIATE]: "Zones polaires, tempérées, tropicales. Dépend de la latitude et de l'inclinaison.",
            [KnowledgeLevel.EXPERT]: "Classification de Köppen. Changement climatique anthropique perturbe ces cycles."
        },
        quiz: [{ id: 'q1', question: "Climat France ?", options: ["Tropical", "Tempéré", "Polaire"], correctIndex: 1, explanation: "Saisons marquées." }],
        reward: "Badge: Soleil"
    },
    {
        id: 'geo_4', title: 'Cartographie', description: 'Dessiner le monde.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "Une carte sert à ne pas se perdre. Le Nord est en haut.",
            [KnowledgeLevel.INTERMEDIATE]: "Projection de la sphère sur un plan (Mercator). Échelle et Légende.",
            [KnowledgeLevel.EXPERT]: "SIG (Systèmes d'Information Géographique). La carte est une représentation politique du territoire."
        },
        quiz: [{ id: 'q1', question: "Outil ?", options: ["Boussole", "Marteau", "Scie"], correctIndex: 0, explanation: "Nord magnétique." }],
        reward: "Badge: Boussole"
    },
    {
        id: 'geo_5', title: 'Démographie', description: 'La population.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "On est plus de 8 milliards d'humains sur Terre !",
            [KnowledgeLevel.INTERMEDIATE]: "Étude des populations : natalité, mortalité, migration. L'Asie concentre 60% des humains.",
            [KnowledgeLevel.EXPERT]: "Transition démographique : baisse de la mortalité puis de la natalité avec le développement."
        },
        quiz: [{ id: 'q1', question: "Population Terre ?", options: ["1 Md", "8 Mds", "100 Mds"], correctIndex: 1, explanation: "En 2024." }],
        reward: "Badge: Foule"
    },
    {
        id: 'geo_6', title: 'Urbanisation', description: 'La vie en ville.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "De plus en plus de gens habitent dans des grandes villes avec des immeubles.",
            [KnowledgeLevel.INTERMEDIATE]: "Exode rural. Mégalopoles (Tokyo, NYC). Défis : pollution, transport, logement.",
            [KnowledgeLevel.EXPERT]: "Métropolisation : concentration des pouvoirs et richesses. Bidonvilles et ségrégation spatiale."
        },
        quiz: [{ id: 'q1', question: "+ Grande ville ?", options: ["Paris", "Tokyo", "Rome"], correctIndex: 1, explanation: "37 millions." }],
        reward: "Badge: Building"
    },
    {
        id: 'geo_7', title: 'Mondialisation', description: 'Le village global.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "Ton T-shirt vient de Chine, ta banane du Brésil. Tout voyage !",
            [KnowledgeLevel.INTERMEDIATE]: "Échanges mondiaux (flux). Conteneurs, Internet, Finance. Interdépendance des pays.",
            [KnowledgeLevel.EXPERT]: "Division Internationale du Travail (DIT). Uniformisation culturelle vs résistance locale."
        },
        quiz: [{ id: 'q1', question: "Transport clé ?", options: ["Avion", "Bateau (Conteneur)", "Cheval"], correctIndex: 1, explanation: "90% du commerce." }],
        reward: "Badge: Conteneur"
    },
    {
        id: 'geo_8', title: 'Ressources', description: 'Les trésors de la terre.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "On puise du pétrole, de l'eau et des métaux dans le sol. Attention, ça s'épuise !",
            [KnowledgeLevel.INTERMEDIATE]: "Énergies fossiles vs Renouvelables. L'eau douce est l'or bleu du 21e siècle.",
            [KnowledgeLevel.EXPERT]: "Géopolitique des ressources. Terres rares indispensables pour la tech mais polluantes."
        },
        quiz: [{ id: 'q1', question: "Renouvelable ?", options: ["Charbon", "Soleil", "Gaz"], correctIndex: 1, explanation: "Inépuisable." }],
        reward: "Badge: Goutte"
    },
    {
        id: 'geo_9', title: 'Union Européenne', description: 'L\'union fait la force.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "Des pays d'Europe qui travaillent ensemble pour la paix et le commerce.",
            [KnowledgeLevel.INTERMEDIATE]: "27 pays membres. Marché unique, Euro, Espace Schengen (libre circulation).",
            [KnowledgeLevel.EXPERT]: "Construction supranationale unique. Institutions : Commission, Parlement, Conseil."
        },
        quiz: [{ id: 'q1', question: "Combien de pays ?", options: ["12", "27", "50"], correctIndex: 1, explanation: "En 2024." }],
        reward: "Badge: Étoiles"
    },
    {
        id: 'geo_10', title: 'Géopolitique', description: 'Le jeu des puissances.', subject: 'GEO',
        content: {
            [KnowledgeLevel.NOVICE]: "Les pays discutent ou se disputent pour savoir qui est le chef.",
            [KnowledgeLevel.INTERMEDIATE]: "Étude des relations internationales, des conflits et des zones d'influence.",
            [KnowledgeLevel.EXPERT]: "Soft Power (Culture) vs Hard Power (Armée). Multipolarité actuelle (USA, Chine, UE...)."
        },
        quiz: [{ id: 'q1', question: "Organisation Paix ?", options: ["ONU", "FIFA", "NATO"], correctIndex: 0, explanation: "Nations Unies." }],
        reward: "Badge: Drapeau"
    },
    {
        id: 'geo_11', title: 'Volcans', description: 'La Terre crache.', subject: 'GEO',
        pages: [
            { title: "Magma", content: "Sous la terre, la roche est fondue (lave). Parfois elle sort par un trou : le volcan." },
            { title: "Danger", content: "Les éruptions peuvent détruire des villes (Pompéi), mais la cendre est bonne pour les plantes." }
        ],
        questionPool: [
            { id: 'vl1', type: 'INPUT', question: "Nom roche fondue ?", acceptedAnswers: ["Magma", "Lave"], explanation: "Chaud !" },
            { id: 'vl2', type: 'MCQ', question: "Volcan célèbre ?", options: ["Vésuve", "Everest", "Seine"], correctIndex: 0, explanation: "Italie." }
        ],
        reward: "Badge: Volcan"
    },
    {
        id: 'geo_12', title: 'Fleuves', description: 'Les routes d\'eau.', subject: 'GEO',
        pages: [
            { title: "Source", content: "L'eau vient des montagnes et coule vers la mer. Les hommes s'installent au bord." },
            { title: "Grands fleuves", content: "Le Nil (Afrique), l'Amazone (Amérique), le Yangtsé (Asie)." }
        ],
        questionPool: [
            { id: 'fl1', type: 'INPUT', question: "Plus long fleuve ?", acceptedAnswers: ["Nil", "Amazone"], explanation: "Débat." },
            { id: 'fl2', type: 'MCQ', question: "Où finit le fleuve ?", options: ["Source", "Embouchure", "Lac"], correctIndex: 1, explanation: "Dans la mer." }
        ],
        reward: "Badge: Poisson"
    },
    {
        id: 'geo_13', title: 'Déserts', description: 'Sable et glace.', subject: 'GEO',
        pages: [
            { title: "Sec", content: "Un désert est un endroit où il pleut très rarement. Il peut faire très chaud (Sahara) ou très froid (Antarctique)." },
            { title: "Vie", content: "Les animaux comme le chameau ou le cactus sont super adaptés." }
        ],
        questionPool: [
            { id: 'ds1', type: 'INPUT', question: "Désert chaud ?", acceptedAnswers: ["Sahara"], explanation: "Afrique." },
            { id: 'ds2', type: 'MCQ', question: "Animal du désert ?", options: ["Ours", "Chameau", "Dauphin"], correctIndex: 1, explanation: "Bosse." }
        ],
        reward: "Badge: Cactus"
    },
    {
        id: 'geo_14', title: 'Montagnes', description: 'Le toit du monde.', subject: 'GEO',
        pages: [
            { title: "Formation", content: "Quand deux plaques de terre se cognent, ça se soulève et ça fait une montagne." },
            { title: "Everest", content: "Le plus haut sommet du monde (8848m) dans l'Himalaya." }
        ],
        questionPool: [
            { id: 'mt1', type: 'INPUT', question: "Plus haut sommet ?", acceptedAnswers: ["Everest"], explanation: "Népal." },
            { id: 'mt2', type: 'MCQ', question: "Montagnes Europe ?", options: ["Alpes", "Andes", "Himalaya"], correctIndex: 0, explanation: "France/Suisse/Italie..." }
        ],
        reward: "Badge: Pic"
    },
    {
        id: 'geo_15', title: 'Fuseaux Horaires', description: 'Quelle heure est-il ?', subject: 'GEO',
        pages: [
            { title: "Rotation", content: "Comme la Terre tourne, il fait jour à Paris quand il fait nuit à Tokyo." },
            { title: "Décalage", content: "Le monde est divisé en 24 zones. Quand on voyage, on change d'heure." }
        ],
        questionPool: [
            { id: 'fh1', type: 'MCQ', question: "Combien d'heures par jour ?", options: ["12", "24", "10"], correctIndex: 1, explanation: "Rotation Terre." },
            { id: 'fh2', type: 'INPUT', question: "Midi à Londres, à Paris ?", acceptedAnswers: ["13h", "13"], explanation: "+1 heure." }
        ],
        reward: "Badge: Montre"
    }
];
