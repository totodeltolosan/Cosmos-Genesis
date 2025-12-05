
import { Lesson, KnowledgeLevel } from '../../types';

export const PSY_LESSONS: Lesson[] = [
    {
        id: 'psy_1', title: 'Le Cerveau', description: 'La machine à penser.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "C'est le chef de ton corps. Il décide tout ce que tu fais et ressens.",
            [KnowledgeLevel.INTERMEDIATE]: "Hémisphères Gauche (Logique) et Droit (Créatif). Lobes (Frontal, Pariétal...).",
            [KnowledgeLevel.EXPERT]: "Neuroplasticité : le cerveau change physiquement quand on apprend. Connexions synaptiques."
        },
        quiz: [{ id: 'q1', question: "Siège des émotions ?", options: ["Cœur", "Cerveau", "Estomac"], correctIndex: 1, explanation: "Système limbique." }],
        reward: "Badge: Neurone"
    },
    {
        id: 'psy_2', title: 'Émotions', description: 'Joie, Peur, Colère.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Ce sont des signaux pour te dire si ça va ou s'il y a un danger.",
            [KnowledgeLevel.INTERMEDIATE]: "6 émotions primaires (Ekman) : Joie, Tristesse, Peur, Colère, Surprise, Dégoût.",
            [KnowledgeLevel.EXPERT]: "Intelligence Émotionnelle (QE). Rôle de l'amygdale et de la dopamine."
        },
        quiz: [{ id: 'q1', question: "Combien de primaires ?", options: ["3", "6", "100"], correctIndex: 1, explanation: "Selon Ekman." }],
        reward: "Badge: Smiley"
    },
    {
        id: 'psy_3', title: 'Mémoire', description: 'Se souvenir.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Ton cerveau range les souvenirs comme des livres dans une bibliothèque.",
            [KnowledgeLevel.INTERMEDIATE]: "Mémoire court terme (travail) vs long terme. Encodage, Stockage, Récupération.",
            [KnowledgeLevel.EXPERT]: "Hippocampe. Amnésie antérograde/rétrograde. Faux souvenirs et plasticité."
        },
        quiz: [{ id: 'q1', question: "Stockage durable ?", options: ["Court terme", "Long terme", "RAM"], correctIndex: 1, explanation: "Souvenirs." }],
        reward: "Badge: Disquette"
    },
    {
        id: 'psy_4', title: 'Rêves', description: 'Le cinéma nocturne.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Quand tu dors, ton cerveau raconte des histoires bizarres.",
            [KnowledgeLevel.INTERMEDIATE]: "Sommeil paradoxal (REM). Traitement des émotions et consolidation de la mémoire.",
            [KnowledgeLevel.EXPERT]: "Freud : 'Voie royale vers l'inconscient'. Neurosciences : nettoyage synaptique."
        },
        quiz: [{ id: 'q1', question: "Quand rêve-t-on ?", options: ["Sommeil profond", "Paradoxal", "Éveillé"], correctIndex: 1, explanation: "Yeux qui bougent." }],
        reward: "Badge: Nuage"
    },
    {
        id: 'psy_5', title: 'Biais Cognitifs', description: 'Les erreurs de pensée.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Parfois, ton cerveau se trompe ou prend des raccourcis trop rapides.",
            [KnowledgeLevel.INTERMEDIATE]: "Biais de confirmation (ne voir que ce qu'on croit). Effet Dunning-Kruger.",
            [KnowledgeLevel.EXPERT]: "Heuristiques de jugement. Système 1 (Rapide/Intuitif) vs Système 2 (Lent/Réfléchi - Kahneman)."
        },
        quiz: [{ id: 'q1', question: "Chercher confirmation ?", options: ["Biais confirmation", "Logique", "Science"], correctIndex: 0, explanation: "Piège mental." }],
        reward: "Badge: Piège"
    },
    {
        id: 'psy_6', title: 'Inconscient', description: 'La partie cachée.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Il y a des choses que tu sais ou ressens sans t'en rendre compte.",
            [KnowledgeLevel.INTERMEDIATE]: "Sigmund Freud. Ça, Moi, Surmoi. Actes manqués et lapsus.",
            [KnowledgeLevel.EXPERT]: "L'inconscient cognitif (processus automatiques) diffère de l'inconscient psychanalytique."
        },
        quiz: [{ id: 'q1', question: "Père psychanalyse ?", options: ["Jung", "Freud", "Piaget"], correctIndex: 1, explanation: "Vienne." }],
        reward: "Badge: Iceberg"
    },
    {
        id: 'psy_7', title: 'Apprentissage', description: 'Comment on apprend.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "En répétant et en essayant, on devient plus fort.",
            [KnowledgeLevel.INTERMEDIATE]: "Pavlov (Conditionnement). Récompense et punition (Skinner).",
            [KnowledgeLevel.EXPERT]: "Constructivisme (Piaget). Zone Prochaine de Développement (Vygotsky)."
        },
        quiz: [{ id: 'q1', question: "Chien de... ?", options: ["Pavlov", "Schrödinger", "Laïka"], correctIndex: 0, explanation: "Cloche et salive." }],
        reward: "Badge: École"
    },
    {
        id: 'psy_8', title: 'Influence Sociale', description: 'Le groupe.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "On a tendance à faire comme les copains pour être accepté.",
            [KnowledgeLevel.INTERMEDIATE]: "Conformisme (Asch). Obéissance à l'autorité (Milgram). Effet de groupe.",
            [KnowledgeLevel.EXPERT]: "Bystander Effect (Témoin passif). Désindividuation dans les foules."
        },
        quiz: [{ id: 'q1', question: "Expérience chocs ?", options: ["Milgram", "Asch", "Zimbardo"], correctIndex: 0, explanation: "Obéissance." }],
        reward: "Badge: Mouton"
    },
    {
        id: 'psy_9', title: 'Personnalité', description: 'Qui es-tu ?', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Chacun est différent : timide, courageux, bavard...",
            [KnowledgeLevel.INTERMEDIATE]: "Big Five (O.C.E.A.N) : Ouverture, Conscience, Extraversion, Agréabilité, Névrosisme.",
            [KnowledgeLevel.EXPERT]: "Tests psychométriques (MBTI, QI). Stabilité vs changement au cours de la vie."
        },
        quiz: [{ id: 'q1', question: "Big Five ?", options: ["OCEAN", "RIVER", "LAKE"], correctIndex: 0, explanation: "Acronyme." }],
        reward: "Badge: Masque"
    },
    {
        id: 'psy_10', title: 'Stress', description: 'La pression.', subject: 'PSYCH',
        content: {
            [KnowledgeLevel.NOVICE]: "Quand on a peur ou qu'on est pressé, le cœur bat vite.",
            [KnowledgeLevel.INTERMEDIATE]: "Réponse Combat-Fuite. Cortisol et Adrénaline. Bon stress vs Mauvais stress.",
            [KnowledgeLevel.EXPERT]: "Syndrome Général d'Adaptation. Burn-out. Impact psychosomatique sur la santé."
        },
        quiz: [{ id: 'q1', question: "Hormone stress ?", options: ["Insuline", "Cortisol", "Mélatonine"], correctIndex: 1, explanation: "Alerte." }],
        reward: "Badge: Éclair"
    },
    {
        id: 'psy_11', title: 'Motivation', description: 'Pourquoi on fait ça ?', subject: 'PSYCH',
        pages: [
            { title: "Intrinsèque", content: "Je le fais parce que j'aime ça (jouer, dessiner)." },
            { title: "Extrinsèque", content: "Je le fais pour une récompense ou éviter une punition (ranger sa chambre)." }
        ],
        questionPool: [
            { id: 'mt1', type: 'MCQ', question: "Pour le plaisir ?", options: ["Intrinsèque", "Extrinsèque", "Nulle"], correctIndex: 0, explanation: "Vient de l'intérieur." },
            { id: 'mt2', type: 'INPUT', question: "Pyramide des besoins ?", acceptedAnswers: ["Maslow"], explanation: "Abraham Maslow." }
        ],
        reward: "Badge: Carotte"
    },
    {
        id: 'psy_12', title: 'Phobies', description: 'Peur irrationnelle.', subject: 'PSYCH',
        pages: [
            { title: "Peur extrême", content: "Avoir peur des araignées (Arachnophobie) ou du vide alors qu'il n'y a pas de danger immédiat." },
            { title: "Traitement", content: "On peut soigner les phobies en s'habituant doucement." }
        ],
        questionPool: [
            { id: 'ph1', type: 'INPUT', question: "Peur des araignées ?", acceptedAnswers: ["Arachnophobie"], explanation: "Très courant." },
            { id: 'ph2', type: 'MCQ', question: "Peur des espaces clos ?", options: ["Agoraphobie", "Claustrophobie", "Hydrophobie"], correctIndex: 1, explanation: "Enfermé." }
        ],
        reward: "Badge: Fantôme"
    },
    {
        id: 'psy_13', title: 'Langage Corporel', description: 'Parler sans mots.', subject: 'PSYCH',
        pages: [
            { title: "Non-verbal", content: "Croiser les bras, sourire, froncer les sourcils... Ton corps dit ce que tu penses !" },
            { title: "Importance", content: "70% de la communication passe par le corps et le ton de la voix." }
        ],
        questionPool: [
            { id: 'lc1', type: 'MCQ', question: "Bras croisés ?", options: ["Ouverture", "Fermeture", "Joie"], correctIndex: 1, explanation: "Défense." },
            { id: 'lc2', type: 'INPUT', question: "Communication sans mots ?", acceptedAnswers: ["Non-verbal"], explanation: "Gestes." }
        ],
        reward: "Badge: Main"
    },
    {
        id: 'psy_14', title: 'Habitudes', description: 'Pilote automatique.', subject: 'PSYCH',
        pages: [
            { title: "Routine", content: "Le cerveau adore les habitudes pour économiser de l'énergie (se brosser les dents)." },
            { title: "Boucle", content: "Signal -> Action -> Récompense. C'est dur de changer une habitude." }
        ],
        questionPool: [
            { id: 'hb1', type: 'MCQ', question: "Pourquoi une habitude ?", options: ["Économie énergie", "Fatigue", "Hasard"], correctIndex: 0, explanation: "Cerveau paresseux." },
            { id: 'hb2', type: 'INPUT', question: "Temps pour changer ?", acceptedAnswers: ["21 jours", "66 jours"], explanation: "Environ 2 mois." }
        ],
        reward: "Badge: Roue"
    },
    {
        id: 'psy_15', title: 'Créativité', description: 'Idées nouvelles.', subject: 'PSYCH',
        pages: [
            { title: "Imagination", content: "Connecter des idées qui n'ont rien à voir ensemble." },
            { title: "Flow", content: "L'état où on est tellement concentré qu'on oublie le temps." }
        ],
        questionPool: [
            { id: 'cr1', type: 'MCQ', question: "État de concentration max ?", options: ["Flow", "Stress", "Sommeil"], correctIndex: 0, explanation: "Zone." },
            { id: 'cr2', type: 'INPUT', question: "Pensée originale ?", acceptedAnswers: ["Divergente"], explanation: "Hors de la boîte." }
        ],
        reward: "Badge: Ampoule"
    }
];
