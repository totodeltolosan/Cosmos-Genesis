
import { Lesson, KnowledgeLevel } from '../../types';

export const CS_LESSONS: Lesson[] = [
    {
        id: 'cs_1', title: 'Le Binaire', description: '0 et 1.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Les ordis ne comprennent que 'allumé' (1) ou 'éteint' (0). C'est leur alphabet.",
            [KnowledgeLevel.INTERMEDIATE]: "Système en base 2. Un Bit est l'unité minimale. 8 Bits = 1 Octet (Byte).",
            [KnowledgeLevel.EXPERT]: "Tout (images, sons, code) est réductible à des états logiques. C'est la base de l'architecture von Neumann."
        },
        quiz: [{ id: 'q1', question: "Valeurs d'un bit ?", options: ["1 à 10", "0 ou 1", "A à Z"], correctIndex: 1, explanation: "Binaire." }],
        reward: "Badge: Bit"
    },
    {
        id: 'cs_2', title: 'Algorithmes', description: 'La recette.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "C'est comme une recette de cuisine : une suite d'étapes pour réussir quelque chose.",
            [KnowledgeLevel.INTERMEDIATE]: "Suite finie d'opérations pour résoudre un problème. Doit être précis.",
            [KnowledgeLevel.EXPERT]: "La complexité (Grand O) détermine l'efficacité. Tri, recherche, chiffrement sont des algos clés."
        },
        quiz: [{ id: 'q1', question: "C'est quoi ?", options: ["Un robot", "Une instruction", "Un composant"], correctIndex: 1, explanation: "Logique." }],
        reward: "Badge: Flowchart"
    },
    {
        id: 'cs_3', title: 'Hardware', description: 'Le matériel.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Le corps de l'ordinateur : l'écran, la souris, et les puces électroniques dedans.",
            [KnowledgeLevel.INTERMEDIATE]: "CPU (Cerveau), RAM (Mémoire vive), Disque Dur (Stockage).",
            [KnowledgeLevel.EXPERT]: "Basé sur les semi-conducteurs et transistors gravés en nanomètres sur du silicium."
        },
        quiz: [{ id: 'q1', question: "Cerveau du PC ?", options: ["CPU", "USB", "Wifi"], correctIndex: 0, explanation: "Processeur." }],
        reward: "Badge: Puce"
    },
    {
        id: 'cs_4', title: 'Internet', description: 'La toile mondiale.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Un réseau géant qui relie tous les ordinateurs pour s'envoyer des messages.",
            [KnowledgeLevel.INTERMEDIATE]: "Réseau de réseaux utilisant le protocole TCP/IP. Le Web (WWW) n'est qu'une partie d'Internet.",
            [KnowledgeLevel.EXPERT]: "Paquets, Routage, DNS, Serveurs. C'est une infrastructure décentralisée résiliente."
        },
        quiz: [{ id: 'q1', question: "Langage du Web ?", options: ["HTML", "Word", "Excel"], correctIndex: 0, explanation: "HyperText Markup." }],
        reward: "Badge: Globe"
    },
    {
        id: 'cs_5', title: 'Loi de Moore', description: 'Toujours plus vite.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Les ordinateurs deviennent deux fois plus puissants tous les deux ans environ.",
            [KnowledgeLevel.INTERMEDIATE]: "Observation empirique : le nombre de transistors double tous les 18 mois.",
            [KnowledgeLevel.EXPERT]: "Cette loi atteint ses limites physiques (effet tunnel quantique). Vers le multicœur et le quantique."
        },
        quiz: [{ id: 'q1', question: "Vitesse d'évolution ?", options: ["Ralentit", "Double tous les 2 ans", "Stagne"], correctIndex: 1, explanation: "Exponentiel." }],
        reward: "Badge: Fusée"
    },
    {
        id: 'cs_6', title: 'Cryptographie', description: 'Codes secrets.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Écrire des messages que seuls les amis peuvent lire avec une clé secrète.",
            [KnowledgeLevel.INTERMEDIATE]: "Sécuriser l'information. Chiffrement symétrique vs asymétrique (Clé publique/privée).",
            [KnowledgeLevel.EXPERT]: "RSA, Elliptic Curves. Essentiel pour la sécurité bancaire, la vie privée et la blockchain."
        },
        quiz: [{ id: 'q1', question: "Sert à quoi ?", options: ["Aller vite", "Protéger", "Dessiner"], correctIndex: 1, explanation: "Sécurité." }],
        reward: "Badge: Cadenas"
    },
    {
        id: 'cs_7', title: 'Open Source', description: 'Partager le savoir.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Des programmes gratuits que tout le monde peut améliorer, comme une recette partagée.",
            [KnowledgeLevel.INTERMEDIATE]: "Logiciel dont le code source est public. Linux, Wikipédia, Firefox.",
            [KnowledgeLevel.EXPERT]: "Philosophie du libre (Stallman). Favorise l'innovation collaborative et la transparence."
        },
        quiz: [{ id: 'q1', question: "Exemple libre ?", options: ["Windows", "Linux", "iOS"], correctIndex: 1, explanation: "Le pingouin." }],
        reward: "Badge: Pingouin"
    },
    {
        id: 'cs_8', title: 'Le Cloud', description: 'L\'ordinateur ailleurs.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Tes photos ne sont pas dans ton téléphone, mais sur un gros ordinateur très loin.",
            [KnowledgeLevel.INTERMEDIATE]: "Stockage et calcul déportés sur des serveurs distants (Data Centers).",
            [KnowledgeLevel.EXPERT]: "SaaS, IaaS, PaaS. Permet la scalabilité et l'accès omniprésent, mais pose des questions de souveraineté."
        },
        quiz: [{ id: 'q1', question: "C'est quoi ?", options: ["Un nuage", "Un serveur distant", "Un satellite"], correctIndex: 1, explanation: "Data Center." }],
        reward: "Badge: Nuage"
    },
    {
        id: 'cs_9', title: 'Quantique', description: 'Le futur du calcul.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Un super-ordinateur qui peut être allumé et éteint en même temps pour calculer super vite.",
            [KnowledgeLevel.INTERMEDIATE]: "Utilise des Qubits (superposition 0 et 1). Puissance exponentielle pour certains problèmes.",
            [KnowledgeLevel.EXPERT]: "Exploite l'intrication et la superposition. Menace la crypto actuelle (Shor) mais promet des simulations moléculaires."
        },
        quiz: [{ id: 'q1', question: "Unité de base ?", options: ["Bit", "Qubit", "Triforce"], correctIndex: 1, explanation: "Quantum Bit." }],
        reward: "Badge: Atome"
    },
    {
        id: 'cs_10', title: 'I.A.', description: 'La machine qui pense.', subject: 'CS',
        content: {
            [KnowledgeLevel.NOVICE]: "Des robots ou des programmes qui apprennent à parler et dessiner comme nous.",
            [KnowledgeLevel.INTERMEDIATE]: "Intelligence Artificielle. Machine Learning, Réseaux de Neurones.",
            [KnowledgeLevel.EXPERT]: "IA Faible (spécialisée) vs IA Forte (consciente). Défis éthiques, alignement et Singularité."
        },
        quiz: [{ id: 'q1', question: "Comment elle apprend ?", options: ["Magie", "Données", "Dormir"], correctIndex: 1, explanation: "Entraînement." }],
        reward: "Badge: Robot"
    },
    {
        id: 'cs_11', title: 'Robotique', description: 'Corps de métal.', subject: 'CS',
        pages: [
            { title: "Capteurs", content: "Les robots ont des yeux (caméras) et des oreilles (micros) pour comprendre le monde." },
            { title: "Actionneurs", content: "Ce sont les moteurs qui font bouger leurs bras et leurs roues." }
        ],
        questionPool: [
            { id: 'rb1', type: 'MCQ', question: "Yeux du robot ?", options: ["Laser", "Caméra", "Écran"], correctIndex: 1, explanation: "Vision." },
            { id: 'rb2', type: 'INPUT', question: "Loi robotique ?", acceptedAnswers: ["Asimov"], explanation: "Isaac Asimov." }
        ],
        reward: "Badge: Bras Méca"
    },
    {
        id: 'cs_12', title: 'Big Data', description: 'Montagnes de données.', subject: 'CS',
        pages: [
            { title: "Volume", content: "Chaque jour, on crée des milliards de photos et messages. C'est le Big Data." },
            { title: "Analyse", content: "Les ordis cherchent des secrets dans ces données (ex: prévoir la grippe ou la mode)." }
        ],
        questionPool: [
            { id: 'bd1', type: 'MCQ', question: "Les 3 V ?", options: ["Volume Vitesse Variété", "Veni Vidi Vici", "Vue Vie Vélo"], correctIndex: 0, explanation: "Caractérise le Big Data." },
            { id: 'bd2', type: 'INPUT', question: "Unité géante ?", acceptedAnswers: ["Pétaoctet", "Exaoctet"], explanation: "Après Téra." }
        ],
        reward: "Badge: Serveur"
    },
    {
        id: 'cs_13', title: 'Jeux Vidéo', description: 'Mondes virtuels.', subject: 'CS',
        pages: [
            { title: "Moteur", content: "Un programme (ex: Unity) gère la physique, la lumière et les règles du jeu." },
            { title: "FPS", content: "Images par seconde. Plus il y en a, plus c'est fluide (60 FPS c'est bien !)." }
        ],
        questionPool: [
            { id: 'jv1', type: 'INPUT', question: "Célèbre plombier ?", acceptedAnswers: ["Mario"], explanation: "Nintendo." },
            { id: 'jv2', type: 'MCQ', question: "Cerveau graphique ?", options: ["CPU", "GPU", "RAM"], correctIndex: 1, explanation: "Carte Graphique." }
        ],
        reward: "Badge: Manette"
    },
    {
        id: 'cs_14', title: 'Cybersécurité', description: 'Défense numérique.', subject: 'CS',
        pages: [
            { title: "Hacker", content: "Quelqu'un qui cherche les failles. Il y a les gentils (White Hat) et les méchants (Black Hat)." },
            { title: "Mot de passe", content: "Il doit être long et compliqué ! '123456' est interdit." }
        ],
        questionPool: [
            { id: 'cy1', type: 'MCQ', question: "Logiciel méchant ?", options: ["Malware", "Hardware", "Freeware"], correctIndex: 0, explanation: "Virus, Troyen..." },
            { id: 'cy2', type: 'MCQ', question: "Protection ?", options: ["Pare-feu", "Pare-brise", "Parapluie"], correctIndex: 0, explanation: "Firewall." }
        ],
        reward: "Badge: Bouclier"
    },
    {
        id: 'cs_15', title: 'Tri', description: 'Ranger les données.', subject: 'CS',
        pages: [
            { title: "Désordre", content: "Pour trouver un nom dans une liste, il faut qu'elle soit dans l'ordre alphabétique." },
            { title: "Tri à bulles", content: "Un algo simple : on échange les voisins s'ils sont dans le mauvais ordre, jusqu'à la fin." }
        ],
        questionPool: [
            { id: 'tr1', type: 'MCQ', question: "Meilleur tri ?", options: ["Rapide (QuickSort)", "Lent", "Au hasard"], correctIndex: 0, explanation: "Efficace." },
            { id: 'tr2', type: 'INPUT', question: "Contraire de trié ?", acceptedAnswers: ["Désordre", "Mélangé"], explanation: "Chaos." }
        ],
        reward: "Badge: Liste"
    }
];
