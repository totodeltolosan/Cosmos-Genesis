
import { Lesson, KnowledgeLevel } from '../../types';

export const MATH_LESSONS: Lesson[] = [
    {
        id: 'math_1', title: 'Le Zéro et l\'Infini', description: 'Les fondations des nombres.', subject: 'MATH',
        pages: [
            { 
                title: "Le Rien qui est Tout", 
                content: "Imaginez devoir compter des moutons sans avoir de mot pour dire qu'il n'y en a plus. C'était le problème des anciens ! Le Zéro (0) est une invention géniale venue d'Inde et de Babylone. Il permet de faire la différence entre 1, 10 et 100." 
            },
            {
                title: "Vers l'Infini",
                content: "L'infini (∞) n'est pas un très grand nombre. C'est un concept. C'est l'idée que l'on peut toujours ajouter 1, sans jamais s'arrêter. Georg Cantor a même prouvé qu'il y a des infinis plus grands que d'autres !"
            },
            {
                title: "Le Saviez-vous ?",
                content: "Il est interdit de diviser par zéro ! Si vous essayez, vous ne trouvez pas l'infini, vous trouvez une erreur logique. C'est comme demander : 'Combien de fois rien rentre dans quelque chose ?'"
            }
        ],
        questionPool: [
            { id: 'mq1', type: 'MCQ', question: "Peut-on diviser par 0 ?", options: ["Oui, ça fait 0", "Oui, ça fait l'infini", "Non, c'est impossible"], correctIndex: 2, explanation: "C'est une indétermination mathématique." },
            { id: 'mq2', type: 'INPUT', question: "Quel symbole représente l'infini ?", acceptedAnswers: ["∞", "le huit couché", "lemniscate"], explanation: "Le fameux 8 couché." },
            { id: 'mq3', type: 'MCQ', question: "D'où vient le zéro moderne ?", options: ["Inde", "Rome", "Grèce"], correctIndex: 0, explanation: "Brahmagupta l'a théorisé." },
            { id: 'mq4', type: 'INPUT', question: "Combien fait 0 divisé par 5 ?", acceptedAnswers: ["0", "zéro"], explanation: "Rien coupé en 5 reste rien." },
            { id: 'mq5', type: 'MCQ', question: "L'infini est-il un nombre ?", options: ["Oui", "Non, un concept"], correctIndex: 1, explanation: "On ne peut pas l'atteindre." }
        ],
        reward: "Badge: Nullité"
    },
    {
        id: 'math_2', title: 'Géométrie Sacrée', description: 'Formes et Pi.', subject: 'MATH',
        pages: [
            { title: "Le Cercle", content: "Le cercle est la forme parfaite. Tous les points sont à la même distance du centre." },
            { title: "La Constante Pi", content: "Si vous déroulez le tour d'un cercle, il fera toujours environ 3,14 fois son diamètre. Ce nombre magique s'appelle Pi (π)." }
        ],
        questionPool: [
            { id: 'g1', type: 'INPUT', question: "Tapez les 3 premiers chiffres de Pi (ex: X.XX)", acceptedAnswers: ["3.14", "3,14"], explanation: "3.14159..." },
            { id: 'g2', type: 'MCQ', question: "Somme des angles d'un triangle ?", options: ["100°", "180°", "360°"], correctIndex: 1, explanation: "Toujours 180 degrés en géométrie euclidienne." },
            { id: 'g3', type: 'INPUT', question: "Combien de côtés a un hexagone ?", acceptedAnswers: ["6", "six"], explanation: "Hexa = 6." }
        ],
        reward: "Badge: Cercle"
    },
    {
        id: 'math_3', title: 'Les Fractions', description: 'Partager le gâteau.', subject: 'MATH',
        pages: [
            { title: "Des morceaux", content: "Une fraction, c'est une division qui n'est pas finie. 1/2, c'est la moitié. 1/4, c'est le quart." },
            { title: "Numérateur et Dénominateur", content: "Le nombre du haut (Numérateur) dit combien on prend de parts. Celui du bas (Dénominateur) dit en combien on a coupé le gâteau." }
        ],
        questionPool: [
            { id: 'f1', type: 'INPUT', question: "0.5 en fraction (ex: 1/2) ?", acceptedAnswers: ["1/2"], explanation: "La moitié." },
            { id: 'f2', type: 'MCQ', question: "Dans 3/4, quel est le dénominateur ?", options: ["3", "4", "7"], correctIndex: 1, explanation: "Celui du bas." }
        ],
        reward: "Badge: Pizza"
    },
    {
        id: 'math_4', title: 'Algèbre', description: 'Le mystère X.', subject: 'MATH',
        pages: [
            { title: "L'Inconnue", content: "En algèbre, on utilise des lettres (comme x ou y) pour remplacer des nombres qu'on ne connait pas encore." },
            { title: "Équation", content: "C'est une balance. 'x + 2 = 5' veut dire : 'Quel nombre, si j'ajoute 2, donne 5 ?'. La réponse est 3." }
        ],
        questionPool: [
            { id: 'a1', type: 'INPUT', question: "Si x + 5 = 10, que vaut x ?", acceptedAnswers: ["5", "cinq"], explanation: "10 - 5 = 5." },
            { id: 'a2', type: 'INPUT', question: "Si 2x = 12, que vaut x ?", acceptedAnswers: ["6", "six"], explanation: "12 divisé par 2." }
        ],
        reward: "Badge: X"
    },
    {
        id: 'math_5', title: 'Théorème de Pythagore', description: 'Le secret des triangles.', subject: 'MATH',
        pages: [
            { title: "L'Angle Droit", content: "Ça marche uniquement avec les triangles qui ont un coin carré (90 degrés)." },
            { title: "La Formule", content: "a² + b² = c². La somme des carrés des petits côtés est égale au carré du grand côté (l'hypoténuse)." }
        ],
        questionPool: [
            { id: 'p1', type: 'MCQ', question: "Nom du grand côté ?", options: ["Hypoténuse", "Diagonale", "Adjacent"], correctIndex: 0, explanation: "Face à l'angle droit." },
            { id: 'p2', type: 'INPUT', question: "Si a=3 et b=4, que vaut c ?", acceptedAnswers: ["5"], explanation: "9 + 16 = 25. Racine de 25 = 5." }
        ],
        reward: "Badge: Triangle"
    },
    {
        id: 'math_6', title: 'Nombres Premiers', description: 'Les atomes des maths.', subject: 'MATH',
        pages: [
            { title: "Indivisibles", content: "Un nombre premier ne peut être divisé que par 1 et par lui-même. Exemples : 2, 3, 5, 7, 11." },
            { title: "Utilité", content: "Ils servent à créer des codes secrets pour protéger Internet (Cryptographie)." }
        ],
        questionPool: [
            { id: 'np1', type: 'MCQ', question: "Lequel est premier ?", options: ["9", "12", "13"], correctIndex: 2, explanation: "13 n'a pas de diviseur." },
            { id: 'np2', type: 'MCQ', question: "Le seul premier pair ?", options: ["2", "4", "Aucun"], correctIndex: 0, explanation: "2 est pair et premier." }
        ],
        reward: "Badge: Cadenas"
    },
    {
        id: 'math_7', title: 'Nombre d\'Or', description: 'La beauté divine.', subject: 'MATH',
        pages: [
            { title: "Phi (φ)", content: "Il vaut environ 1,618. On le trouve partout dans la nature : spirales des coquillages, tournesols, et même le corps humain." },
            { title: "Art", content: "Les peintres et architectes l'utilisent pour faire des œuvres parfaitement équilibrées." }
        ],
        questionPool: [
            { id: 'no1', type: 'INPUT', question: "Valeur approchée de Phi ?", acceptedAnswers: ["1.618", "1,618"], explanation: "Le nombre d'or." },
            { id: 'no2', type: 'MCQ', question: "Où le trouve-t-on ?", options: ["Nature", "Hasard", "Nulle part"], correctIndex: 0, explanation: "Fleurs, galaxies..." }
        ],
        reward: "Badge: Spirale"
    },
    {
        id: 'math_8', title: 'Statistiques', description: 'Comprendre les données.', subject: 'MATH',
        pages: [
            { title: "Moyenne", content: "C'est quand on mélange tout pour faire un niveau égal. (Note A + Note B) / 2." },
            { title: "Médiane", content: "C'est la valeur du milieu. 50% sont au-dessus, 50% en dessous." }
        ],
        questionPool: [
            { id: 'st1', type: 'INPUT', question: "Moyenne de 10 et 20 ?", acceptedAnswers: ["15"], explanation: "30 / 2 = 15." },
            { id: 'st2', type: 'MCQ', question: "Sert à quoi ?", options: ["Prédire", "Dessiner", "Compter"], correctIndex: 0, explanation: "Analyser les tendances." }
        ],
        reward: "Badge: Graphique"
    },
    {
        id: 'math_9', title: 'Puissances', description: 'Multiplier, multiplier...', subject: 'MATH',
        pages: [
            { title: "Exposant", content: "10³ (10 puissance 3), c'est 10 x 10 x 10 = 1000. Ça permet d'écrire des nombres géants." },
            { title: "Carré et Cube", content: "Puissance 2 se dit 'au carré'. Puissance 3 se dit 'au cube'." }
        ],
        questionPool: [
            { id: 'pw1', type: 'INPUT', question: "2 au cube (2³) ?", acceptedAnswers: ["8"], explanation: "2 x 2 x 2." },
            { id: 'pw2', type: 'INPUT', question: "10 puissance 2 ?", acceptedAnswers: ["100"], explanation: "10 x 10." }
        ],
        reward: "Badge: Fusée"
    },
    {
        id: 'math_10', title: 'Trigonométrie', description: 'Triangles et ondes.', subject: 'MATH',
        pages: [
            { title: "SOH CAH TOA", content: "Sinus, Cosinus, Tangente. Ces fonctions lient les angles et les longueurs." },
            { title: "Ondes", content: "Le Sinus dessine des vagues. C'est la base de la musique et du signal Wifi." }
        ],
        questionPool: [
            { id: 'tr1', type: 'MCQ', question: "Forme d'une onde ?", options: ["Sinusoïdale", "Carrée", "Plate"], correctIndex: 0, explanation: "Comme une vague." },
            { id: 'tr2', type: 'INPUT', question: "Sinus de 0 ?", acceptedAnswers: ["0"], explanation: "Ça commence à zéro." }
        ],
        reward: "Badge: Vague"
    },
    {
        id: 'math_11', title: 'Les Pourcentages', description: 'Une part de 100.', subject: 'MATH',
        pages: [
            { title: "Sur 100", content: "50%, c'est 50 pour 100. C'est exactement la moitié (1/2)." },
            { title: "Promotions", content: "Si un jeu à 100€ est à -20%, on enlève 20€. Il coûte 80€." }
        ],
        questionPool: [
            { id: 'pc1', type: 'INPUT', question: "50% de 200 ?", acceptedAnswers: ["100"], explanation: "La moitié." },
            { id: 'pc2', type: 'INPUT', question: "10% de 50 ?", acceptedAnswers: ["5"], explanation: "On décale la virgule." }
        ],
        reward: "Badge: Solde"
    },
    {
        id: 'math_12', title: 'Nombres Négatifs', description: 'Sous zéro.', subject: 'MATH',
        pages: [
            { title: "Moins", content: "Comme la température en hiver (-5°C) ou une dette à la banque." },
            { title: "Règle des signes", content: "Moins par Moins donne Plus ! (-2) x (-2) = 4. C'est bizarre mais logique." }
        ],
        questionPool: [
            { id: 'ng1', type: 'INPUT', question: "5 - 10 ?", acceptedAnswers: ["-5"], explanation: "On descend sous zéro." },
            { id: 'ng2', type: 'MCQ', question: "(-3) x (-3) ?", options: ["-9", "9", "6"], correctIndex: 1, explanation: "Moins x Moins = Plus." }
        ],
        reward: "Badge: Glace"
    },
    {
        id: 'math_13', title: 'Vecteurs', description: 'Direction et Force.', subject: 'MATH',
        pages: [
            { title: "La Flèche", content: "Un vecteur est une flèche qui a une longueur, une direction et un sens." },
            { title: "Déplacement", content: "Il sert à dire 'Avance de 3 pas vers le Nord'." }
        ],
        questionPool: [
            { id: 'vc1', type: 'MCQ', question: "Qu'est-ce qu'un vecteur ?", options: ["Un point", "Une flèche", "Un cercle"], correctIndex: 1, explanation: "Direction + Sens." },
            { id: 'vc2', type: 'INPUT', question: "Vecteur AB + Vecteur BC ?", acceptedAnswers: ["AC", "Vecteur AC"], explanation: "Relation de Chasles." }
        ],
        reward: "Badge: Flèche"
    },
    {
        id: 'math_14', title: 'Dérivées', description: 'La vitesse du changement.', subject: 'MATH',
        pages: [
            { title: "La Pente", content: "La dérivée mesure comment une courbe monte ou descend à un moment précis." },
            { title: "Vitesse", content: "Si la courbe est ta position, la dérivée est ta vitesse." }
        ],
        questionPool: [
            { id: 'dr1', type: 'MCQ', question: "Dérivée de la position ?", options: ["Vitesse", "Temps", "Distance"], correctIndex: 0, explanation: "Variation de position." },
            { id: 'dr2', type: 'INPUT', question: "Dérivée de x² ?", acceptedAnswers: ["2x"], explanation: "Règle de puissance." }
        ],
        reward: "Badge: Ski"
    },
    {
        id: 'math_15', title: 'Logarithmes', description: 'L\'inverse de la puissance.', subject: 'MATH',
        pages: [
            { title: "L'échelle", content: "Le logarithme compte les zéros. log(100) = 2, log(1000) = 3." },
            { title: "Nature", content: "Nos oreilles entendent en logarithme (décibels). Les tremblements de terre aussi (Richter)." }
        ],
        questionPool: [
            { id: 'lg1', type: 'INPUT', question: "log(100) en base 10 ?", acceptedAnswers: ["2"], explanation: "10 puissance 2." },
            { id: 'lg2', type: 'MCQ', question: "Échelle des séismes ?", options: ["Richter", "Celsius", "Newton"], correctIndex: 0, explanation: "Logarithmique." }
        ],
        reward: "Badge: Sismographe"
    }
];
