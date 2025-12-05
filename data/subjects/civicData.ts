
import { Lesson, KnowledgeLevel } from '../../types';

export const CIVIC_LESSONS: Lesson[] = [
    {
        id: 'civ_1', title: 'La République', description: 'La chose publique.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "Un pays où le chef n'est pas un roi, mais un président élu par les gens.",
            [KnowledgeLevel.INTERMEDIATE]: "Liberté, Égalité, Fraternité. Le pouvoir appartient au peuple (Démocratie).",
            [KnowledgeLevel.EXPERT]: "Res Publica. Séparation des pouvoirs (Exécutif, Législatif, Judiciaire)."
        },
        quiz: [{ id: 'q1', question: "Devise France ?", options: ["L.E.F", "Dieu et Droit", "Or et Sang"], correctIndex: 0, explanation: "Liberté Égalité Fraternité." }],
        reward: "Badge: Marianne"
    },
    {
        id: 'civ_2', title: 'Le Vote', description: 'Choisir ensemble.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "On met un papier dans une boîte pour choisir qui va décider.",
            [KnowledgeLevel.INTERMEDIATE]: "Suffrage universel. Droit et devoir civique. Majorité absolue vs relative.",
            [KnowledgeLevel.EXPERT]: "Abstentionnisme. Scrutin uninominal vs proportionnel. Référendum."
        },
        quiz: [{ id: 'q1', question: "Qui peut voter ?", options: ["Les riches", "Tout citoyen majeur", "Les hommes"], correctIndex: 1, explanation: "Universel." }],
        reward: "Badge: Urne"
    },
    {
        id: 'civ_3', title: 'La Loi', description: 'Les règles.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "Des règles pour qu'on puisse vivre ensemble sans se bagarrer.",
            [KnowledgeLevel.INTERMEDIATE]: "Nul n'est censé ignorer la loi. Votée par le Parlement.",
            [KnowledgeLevel.EXPERT]: "Hiérarchie des normes (Constitution > Lois > Décrets). Rôle du Conseil Constitutionnel."
        },
        quiz: [{ id: 'q1', question: "Qui vote la loi ?", options: ["Président", "Parlement", "Police"], correctIndex: 1, explanation: "Députés/Sénateurs." }],
        reward: "Badge: Balance"
    },
    {
        id: 'civ_4', title: 'Droits de l\'Homme', description: 'La dignité.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "Tous les humains sont importants et doivent être protégés.",
            [KnowledgeLevel.INTERMEDIATE]: "Déclaration de 1789 et 1948. Droits inaliénables (Vie, Liberté, Sûreté).",
            [KnowledgeLevel.EXPERT]: "Droits civils, politiques, sociaux. Rôle de la CEDH et de l'ONU."
        },
        quiz: [{ id: 'q1', question: "Date déclaration ?", options: ["1789", "1998", "2000"], correctIndex: 0, explanation: "Révolution." }],
        reward: "Badge: Colombe"
    },
    {
        id: 'civ_5', title: 'Laïcité', description: 'Vivre ensemble.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "Chacun croit ce qu'il veut, mais l'école et l'État ne choisissent pas de religion.",
            [KnowledgeLevel.INTERMEDIATE]: "Séparation Églises/État (1905). Liberté de conscience, neutralité du service public.",
            [KnowledgeLevel.EXPERT]: "Garantit la paix civile. Distinction sphère privée / sphère publique."
        },
        quiz: [{ id: 'q1', question: "Loi 1905 ?", options: ["Séparation", "Interdiction", "Obligation"], correctIndex: 0, explanation: "Église/État." }],
        reward: "Badge: Main"
    },
    {
        id: 'civ_6', title: 'Justice', description: 'Régler les conflits.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "Si quelqu'un fait une bêtise, le juge décide de la punition.",
            [KnowledgeLevel.INTERMEDIATE]: "Présomption d'innocence. Avocat, Procureur, Jury. Prison ou amende.",
            [KnowledgeLevel.EXPERT]: "Indépendance de la justice. Droit à un procès équitable. Appel et Cassation."
        },
        quiz: [{ id: 'q1', question: "Avant jugement on est ?", options: ["Coupable", "Innocent", "Suspect"], correctIndex: 1, explanation: "Présomption." }],
        reward: "Badge: Marteau"
    },
    {
        id: 'civ_7', title: 'Impôts', description: 'Payer pour tous.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "On donne un peu d'argent pour payer l'école, l'hôpital et les routes.",
            [KnowledgeLevel.INTERMEDIATE]: "Contribution commune. Finance les services publics et la redistribution.",
            [KnowledgeLevel.EXPERT]: "TVA, Impôt sur le revenu. Progressivité (les riches paient plus). Lutte contre la fraude."
        },
        quiz: [{ id: 'q1', question: "Sert à quoi ?", options: ["Voler", "Financer État", "Rien"], correctIndex: 1, explanation: "Services publics." }],
        reward: "Badge: Pièce"
    },
    {
        id: 'civ_8', title: 'Médias', description: 'S\'informer.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "La télé et les journaux nous disent ce qui se passe dans le monde.",
            [KnowledgeLevel.INTERMEDIATE]: "Liberté de la presse. Quatrième pouvoir. Attention aux Fake News.",
            [KnowledgeLevel.EXPERT]: "Déontologie journalistique. Pluralisme. Esprit critique face aux réseaux sociaux."
        },
        quiz: [{ id: 'q1', question: "Fausse info ?", options: ["Scoop", "Fake News", "Une"], correctIndex: 1, explanation: "Intox." }],
        reward: "Badge: Journal"
    },
    {
        id: 'civ_9', title: 'Union Européenne', description: 'Citoyen européen.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "On est Français, mais aussi Européens. On a le drapeau bleu aux étoiles.",
            [KnowledgeLevel.INTERMEDIATE]: "Hymne à la Joie. Libre circulation. Paix durable sur le continent.",
            [KnowledgeLevel.EXPERT]: "Subsidiarité. Citoyenneté européenne (droit de vote aux municipales). Erasmus."
        },
        quiz: [{ id: 'q1', question: "Drapeau ?", options: ["Bleu étoiles or", "Rouge", "Blanc"], correctIndex: 0, explanation: "12 étoiles." }],
        reward: "Badge: Euro"
    },
    {
        id: 'civ_10', title: 'Défense', description: 'Protéger le pays.', subject: 'CIVIC',
        content: {
            [KnowledgeLevel.NOVICE]: "L'armée protège le pays contre les attaques.",
            [KnowledgeLevel.INTERMEDIATE]: "Armée de Terre, Air, Marine. Dissuasion nucléaire. Missions de paix.",
            [KnowledgeLevel.EXPERT]: "Journée Défense et Citoyenneté (JDC). Le Président est chef des armées."
        },
        quiz: [{ id: 'q1', question: "Chef des armées ?", options: ["Général", "Président", "Ministre"], correctIndex: 1, explanation: "Constitution." }],
        reward: "Badge: Képi"
    },
    {
        id: 'civ_11', title: 'La Commune', description: 'Proximité.', subject: 'CIVIC',
        pages: [
            { title: "Le Maire", content: "C'est le chef de la ville. Il s'occupe des écoles, des routes et des mariages." },
            { title: "Conseil", content: "Les élus locaux votent les décisions pour la ville." }
        ],
        questionPool: [
            { id: 'cm1', type: 'MCQ', question: "Maison du Maire ?", options: ["Église", "Mairie", "Château"], correctIndex: 1, explanation: "Hôtel de Ville." },
            { id: 'cm2', type: 'INPUT', question: "Écharpe du maire ?", acceptedAnswers: ["Tricolore"], explanation: "Bleu Blanc Rouge." }
        ],
        reward: "Badge: Écharpe"
    },
    {
        id: 'civ_12', title: 'Symboles', description: 'La France.', subject: 'CIVIC',
        pages: [
            { title: "Drapeau", content: "Bleu, Blanc, Rouge. Le blanc est la couleur du Roi, encadrée par le bleu et rouge de Paris." },
            { title: "Marianne", content: "La dame qu'on voit sur les timbres. Elle représente la Liberté." }
        ],
        questionPool: [
            { id: 'sy1', type: 'INPUT', question: "Hymne national ?", acceptedAnswers: ["La Marseillaise", "Marseillaise"], explanation: "Allons enfants..." },
            { id: 'sy2', type: 'MCQ', question: "Animal symbole ?", options: ["Aigle", "Coq", "Lion"], correctIndex: 1, explanation: "Gaulois." }
        ],
        reward: "Badge: Coq"
    },
    {
        id: 'civ_13', title: 'Écologie', description: 'Citoyen vert.', subject: 'CIVIC',
        pages: [
            { title: "Responsabilité", content: "On doit protéger la planète pour les enfants du futur." },
            { title: "Gestes", content: "Trier les déchets, économiser l'eau, moins polluer." }
        ],
        questionPool: [
            { id: 'ec1', type: 'MCQ', question: "Poubelle jaune ?", options: ["Verre", "Plastique/Carton", "Tout"], correctIndex: 1, explanation: "Recyclage." },
            { id: 'ec2', type: 'INPUT', question: "Réchauffement... ?", acceptedAnswers: ["Climatique"], explanation: "Effet de serre." }
        ],
        reward: "Badge: Feuille"
    },
    {
        id: 'civ_14', title: 'Discriminations', description: 'Tous égaux.', subject: 'CIVIC',
        pages: [
            { title: "Respect", content: "On ne doit pas être méchant avec quelqu'un à cause de sa couleur, sa religion ou son genre." },
            { title: "Loi", content: "Le racisme n'est pas une opinion, c'est un délit puni par la loi." }
        ],
        questionPool: [
            { id: 'ds1', type: 'MCQ', question: "Rejeter l'autre ?", options: ["Sympa", "Discrimination", "Jeu"], correctIndex: 1, explanation: "Interdit." },
            { id: 'ds2', type: 'INPUT', question: "Homme et Femme sont ?", acceptedAnswers: ["Égaux"], explanation: "Égalité." }
        ],
        reward: "Badge: Balance"
    },
    {
        id: 'civ_15', title: 'La Constitution', description: 'La règle suprême.', subject: 'CIVIC',
        pages: [
            { title: "Texte sacré", content: "C'est la règle qui organise tout le pays. Aucune loi ne peut aller contre." },
            { title: "Vème République", content: "Notre constitution date de 1958." }
        ],
        questionPool: [
            { id: 'ct1', type: 'INPUT', question: "Date constitution ?", acceptedAnswers: ["1958"], explanation: "De Gaulle." },
            { id: 'ct2', type: 'MCQ', question: "Au dessus des lois ?", options: ["Président", "Police", "Constitution"], correctIndex: 2, explanation: "Norme suprême." }
        ],
        reward: "Badge: Livre"
    }
];
