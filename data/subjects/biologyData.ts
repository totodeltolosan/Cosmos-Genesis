
import { Lesson, KnowledgeLevel } from '../../types';

export const BIO_LESSONS: Lesson[] = [
    {
        id: 'bio_1', title: 'La Cellule', description: 'La brique de la vie.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "C'est comme une petite maison vivante. Tout ton corps est fait de milliards de cellules.",
            [KnowledgeLevel.INTERMEDIATE]: "L'unité structurelle et fonctionnelle du vivant. Elle contient le cytoplasme et l'ADN.",
            [KnowledgeLevel.EXPERT]: "Procaryotes (sans noyau) vs Eucaryotes (avec noyau). La membrane plasmique gère les échanges."
        },
        quiz: [{ id: 'q1', question: "Centre de la cellule ?", options: ["Cerveau", "Noyau", "Cœur"], correctIndex: 1, explanation: "Contient l'ADN." }],
        reward: "Badge: Microscope"
    },
    {
        id: 'bio_2', title: 'L\'ADN', description: 'Le code secret.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "Un long fil entortillé qui contient les plans pour te construire.",
            [KnowledgeLevel.INTERMEDIATE]: "Acide Désoxyribonucléique. Une double hélice portant l'information génétique.",
            [KnowledgeLevel.EXPERT]: "Codé par 4 bases (A,T,C,G). Sa transcription en ARN et traduction en protéines régissent la vie."
        },
        quiz: [{ id: 'q1', question: "Forme de l'ADN ?", options: ["Double Hélice", "Carré", "Tube"], correctIndex: 0, explanation: "Hélicoïdale." }],
        reward: "Badge: Hélice"
    },
    {
        id: 'bio_3', title: 'Évolution', description: 'S\'adapter ou disparaître.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "Les animaux changent très lentement pour mieux survivre dans la nature.",
            [KnowledgeLevel.INTERMEDIATE]: "Théorie de Darwin. La sélection naturelle favorise les individus les mieux adaptés.",
            [KnowledgeLevel.EXPERT]: "Moteur : Mutations aléatoires + Pression de sélection. Spéciation par isolement géographique."
        },
        quiz: [{ id: 'q1', question: "Père de l'évolution ?", options: ["Einstein", "Darwin", "Pasteur"], correctIndex: 1, explanation: "Charles Darwin." }],
        reward: "Badge: Singe"
    },
    {
        id: 'bio_4', title: 'Photosynthèse', description: 'Manger le soleil.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "Les plantes utilisent la lumière du soleil pour fabriquer leur nourriture et de l'oxygène.",
            [KnowledgeLevel.INTERMEDIATE]: "Conversion de l'énergie lumineuse en énergie chimique (sucre) par les plantes.",
            [KnowledgeLevel.EXPERT]: "6CO2 + 6H2O + Lumière -> C6H12O6 + 6O2. Se déroule dans les chloroplastes via la chlorophylle."
        },
        quiz: [{ id: 'q1', question: "Que rejettent les plantes ?", options: ["CO2", "Oxygène", "Azote"], correctIndex: 1, explanation: "Vital pour nous." }],
        reward: "Badge: Feuille"
    },
    {
        id: 'bio_5', title: 'Le Cerveau', description: 'L\'ordinateur central.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "C'est lui qui te fait penser, bouger et rêver. Il utilise de l'électricité !",
            [KnowledgeLevel.INTERMEDIATE]: "L'organe du système nerveux central. Composé de milliards de neurones connectés.",
            [KnowledgeLevel.EXPERT]: "Siège de la conscience. Fonctionne par potentiels d'action et neurotransmetteurs aux synapses."
        },
        quiz: [{ id: 'q1', question: "Cellule du cerveau ?", options: ["Neurone", "Globule", "Épiderme"], correctIndex: 0, explanation: "Transmet l'info." }],
        reward: "Badge: Synapse"
    },
    {
        id: 'bio_6', title: 'Virus & Bactéries', description: 'Le monde invisible.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "Des petites bêtes qui peuvent rendre malade, mais certaines bactéries sont gentilles.",
            [KnowledgeLevel.INTERMEDIATE]: "Les virus piratent les cellules. Les bactéries sont des organismes vivants autonomes.",
            [KnowledgeLevel.EXPERT]: "Le microbiote intestinal est crucial. Les virus sont à la limite du vivant (parasitisme obligatoire)."
        },
        quiz: [{ id: 'q1', question: "Qui a besoin d'un hôte ?", options: ["Virus", "Bactérie", "Champignon"], correctIndex: 0, explanation: "Ne vit pas seul." }],
        reward: "Badge: Biohazard"
    },
    {
        id: 'bio_7', title: 'Système Immunitaire', description: 'L\'armée du corps.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "Tes globules blancs sont des soldats qui combattent les microbes.",
            [KnowledgeLevel.INTERMEDIATE]: "Défense contre les pathogènes. Immunité innée (rapide) et acquise (mémoire/vaccins).",
            [KnowledgeLevel.EXPERT]: "Lymphocytes T et B, Anticorps, Phagocytose. Les maladies auto-immunes attaquent le soi."
        },
        quiz: [{ id: 'q1', question: "Soldat du sang ?", options: ["Globule Rouge", "Globule Blanc", "Plaquette"], correctIndex: 1, explanation: "Défense." }],
        reward: "Badge: Bouclier"
    },
    {
        id: 'bio_8', title: 'Écosystèmes', description: 'L\'équilibre de la nature.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "Tout le monde se mange : l'herbe, le lapin, le loup. C'est la chaîne alimentaire.",
            [KnowledgeLevel.INTERMEDIATE]: "Interactions entre les êtres vivants (biocénose) et leur milieu (biotope).",
            [KnowledgeLevel.EXPERT]: "Flux d'énergie et cycles de matière. L'homéostasie des écosystèmes est menacée par l'activité humaine."
        },
        quiz: [{ id: 'q1', question: "Qui mange les plantes ?", options: ["Carnivore", "Herbivore", "Décomposeur"], correctIndex: 1, explanation: "Végétarien." }],
        reward: "Badge: Arbre"
    },
    {
        id: 'bio_9', title: 'CRISPR-Cas9', description: 'Ciseaux génétiques.', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "Une nouvelle technologie pour couper et coller l'ADN comme dans un traitement de texte.",
            [KnowledgeLevel.INTERMEDIATE]: "Outil révolutionnaire d'édition génomique. Permet de modifier l'ADN avec précision.",
            [KnowledgeLevel.EXPERT]: "Origine bactérienne (défense virale). Soulève d'immenses questions éthiques sur l'homme augmenté."
        },
        quiz: [{ id: 'q1', question: "Ça sert à quoi ?", options: ["Voler", "Modifier l'ADN", "Voir loin"], correctIndex: 1, explanation: "Édition génique." }],
        reward: "Badge: Ciseaux"
    },
    {
        id: 'bio_10', title: 'Astrobiologie', description: 'La vie ailleurs ?', subject: 'BIO',
        content: {
            [KnowledgeLevel.NOVICE]: "On cherche des extraterrestres ou des petites bactéries sur d'autres planètes.",
            [KnowledgeLevel.INTERMEDIATE]: "Étude de l'origine et de la présence de vie dans l'univers. Zone habitable, exoplanètes.",
            [KnowledgeLevel.EXPERT]: "Recherche de biosignatures. Le Paradoxe de Fermi demande : 'Si la vie est commune, où sont-ils ?'"
        },
        quiz: [{ id: 'q1', question: "Où chercher ?", options: ["Zone Habitable", "Soleil", "Trou Noir"], correctIndex: 0, explanation: "Ni trop chaud, ni trop froid." }],
        reward: "Badge: Alien"
    },
    {
        id: 'bio_11', title: 'Le Cœur', description: 'La pompe.', subject: 'BIO',
        pages: [
            { title: "Boum Boum", content: "Le cœur est un muscle qui pompe le sang pour l'envoyer partout dans ton corps." },
            { title: "Oxygène", content: "Le sang transporte l'oxygène de tes poumons vers tes muscles." }
        ],
        questionPool: [
            { id: 'cr1', type: 'MCQ', question: "Rôle du cœur ?", options: ["Penser", "Pomper sang", "Digérer"], correctIndex: 1, explanation: "Circulation." },
            { id: 'cr2', type: 'INPUT', question: "Couleur du sang ?", acceptedAnswers: ["Rouge"], explanation: "Hémoglobine." }
        ],
        reward: "Badge: Cœur"
    },
    {
        id: 'bio_12', title: 'Les 5 Sens', description: 'Percevoir le monde.', subject: 'BIO',
        pages: [
            { title: "La Vue et l'Ouïe", content: "Les yeux voient la lumière, les oreilles entendent les vibrations." },
            { title: "Goût, Odorat, Toucher", content: "La langue goûte, le nez sent, la peau touche. C'est l'information qui va au cerveau." }
        ],
        questionPool: [
            { id: 'sn1', type: 'INPUT', question: "Combien de sens ?", acceptedAnswers: ["5", "cinq"], explanation: "Vue, Ouïe, Odorat, Goût, Toucher." },
            { id: 'sn2', type: 'MCQ', question: "Organe du toucher ?", options: ["Main", "Peau", "Ongle"], correctIndex: 1, explanation: "Tout le corps." }
        ],
        reward: "Badge: Œil"
    },
    {
        id: 'bio_13', title: 'La Digestion', description: 'L\'usine à énergie.', subject: 'BIO',
        pages: [
            { title: "Le voyage", content: "Bouche -> Estomac -> Intestins. Les aliments sont coupés en morceaux minuscules." },
            { title: "Nutriments", content: "Ton corps garde ce qui est bon (vitamines, sucre) et jette le reste." }
        ],
        questionPool: [
            { id: 'dg1', type: 'MCQ', question: "Après la bouche ?", options: ["Estomac", "Pied", "Cœur"], correctIndex: 0, explanation: "Œsophage puis estomac." },
            { id: 'dg2', type: 'INPUT', question: "Nom du tuyau ?", acceptedAnswers: ["Œsophage", "Oesophage"], explanation: "Vers l'estomac." }
        ],
        reward: "Badge: Pomme"
    },
    {
        id: 'bio_14', title: 'Les Muscles', description: 'Le mouvement.', subject: 'BIO',
        pages: [
            { title: "Contraction", content: "Les muscles se raccourcissent pour tirer sur les os et te faire bouger." },
            { title: "Squelette", content: "Sans les os, on serait tout mou comme des méduses !" }
        ],
        questionPool: [
            { id: 'ms1', type: 'MCQ', question: "Action du muscle ?", options: ["Pousser", "Tirer/Contracter", "Grandir"], correctIndex: 1, explanation: "Contraction." },
            { id: 'ms2', type: 'INPUT', question: "Muscle du bras ?", acceptedAnswers: ["Biceps", "Triceps"], explanation: "Le plus connu." }
        ],
        reward: "Badge: Bras"
    },
    {
        id: 'bio_15', title: 'Le Sommeil', description: 'Recharger les batteries.', subject: 'BIO',
        pages: [
            { title: "Indispensable", content: "Dormir permet de grandir, de réparer le corps et de ranger les souvenirs." },
            { title: "Cycles", content: "On a des phases de sommeil léger, profond, et de rêve." }
        ],
        questionPool: [
            { id: 'sm1', type: 'MCQ', question: "Sert à quoi ?", options: ["Perdre du temps", "Réparer/Mémoriser", "Rien"], correctIndex: 1, explanation: "Vital." },
            { id: 'sm2', type: 'INPUT', question: "Nom du sommeil de rêve ?", acceptedAnswers: ["Paradoxal", "REM"], explanation: "Yeux qui bougent." }
        ],
        reward: "Badge: Lit"
    }
];
