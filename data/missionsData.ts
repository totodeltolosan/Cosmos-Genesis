
import { Mission, ResourceType, Era, KnowledgeLevel } from '../types';

export const MISSIONS: Mission[] = [
  {
    id: 'm_genesis',
    title: 'L\'Étincelle Initiale',
    description: 'Créez de l\'énergie pour briser le néant.',
    triggerCondition: (s) => true,
    completionCondition: (s) => s.resources[ResourceType.ENTROPY] >= 100,
    dialogueStart: {
        [KnowledgeLevel.NOVICE]: "Bonjour ! Je suis L.U.M.I, ton assistant. Regarde, tout est noir et vide. C'est un peu triste, non ? On va créer de l'énergie (Entropie) pour réveiller l'univers. Clique sur le bouton 'Déclencher Entropie' !",
        [KnowledgeLevel.INTERMEDIATE]: "Initialisation... Le vide quantique est stable, mais stérile. Il nous faut une fluctuation pour démarrer la thermodynamique. Générez de l'Entropie pour initier la flèche du temps.",
        [KnowledgeLevel.EXPERT]: "État du vide : Métastable. Brisure de symétrie requise. Initiez une fluctuation quantique pour extraire de l'énergie du vide conformément au principe d'incertitude d'Heisenberg."
    },
    dialogueEnd: {
        [KnowledgeLevel.NOVICE]: "Super ! Ça brille ! Tu as créé le début du temps. Maintenant, il faut que ça grandisse.",
        [KnowledgeLevel.INTERMEDIATE]: "Symétrie brisée. L'énergie est là, mais l'espace est encore microscopique. Nous devons le dilater.",
        [KnowledgeLevel.EXPERT]: "Fluctuation stabilisée. Densité d'énergie critique atteinte. Préparez la phase d'Inflation."
    },
    rewardText: "Débloque : Amélioration 'Fluctuation Quantique'",
    isCompleted: false
  },
  {
    id: 'm_inflation',
    title: 'La Grande Inflation',
    description: 'Étirez l\'espace pour qu\'il devienne immense.',
    triggerCondition: (s) => s.completedMissions.includes('m_genesis'),
    completionCondition: (s) => s.era === Era.INFLATION,
    dialogueStart: {
        [KnowledgeLevel.NOVICE]: "L'univers est tout petit, comme une bille. On va souffler dedans pour qu'il devienne géant en une seconde ! Achète l'amélioration 'Champ d'Inflaton'.",
        [KnowledgeLevel.INTERMEDIATE]: "L'univers est trop dense. Activez le champ scalaire (Inflaton) pour provoquer une expansion exponentielle. L'espace doit s'étendre plus vite que la lumière.",
        [KnowledgeLevel.EXPERT]: "Problème d'horizon détecté. Nécessité d'une expansion supraluminique via un champ d'Inflaton pour lisser les inhomogénéités spatiales et obtenir un univers plat."
    },
    dialogueEnd: {
        [KnowledgeLevel.NOVICE]: "Wouah ! C'est devenu immense ! Mais c'est encore une soupe brûlante d'énergie.",
        [KnowledgeLevel.INTERMEDIATE]: "Inflation terminée. L'univers a la taille d'un pamplemousse cosmique (relativement). La température chute, permettant la condensation.",
        [KnowledgeLevel.EXPERT]: "Époque inflationnaire conclue. Facteur d'échelle augmenté de 10^26. L'univers est isotrope et homogène. Prêt pour la baryogenèse."
    },
    rewardText: "Débloque : Nucléosynthèse",
    isCompleted: false
  },
  {
    id: 'm_matter',
    title: 'La Première Matière',
    description: 'Transformez l\'énergie en particules solides.',
    triggerCondition: (s) => s.completedMissions.includes('m_inflation'),
    completionCondition: (s) => s.resources[ResourceType.MATTER] >= 1000,
    dialogueStart: {
        [KnowledgeLevel.NOVICE]: "Il fait assez froid maintenant pour fabriquer des choses. Transformons cette énergie en petits grains de matière (Quarks) pour faire de la poussière d'étoile.",
        [KnowledgeLevel.INTERMEDIATE]: "L'énergie pure refroidit. Selon E=mc², nous pouvons la convertir en masse. Forcez les quarks à se lier pour créer les premiers protons (Matière).",
        [KnowledgeLevel.EXPERT]: "Température sous le seuil de Hagedorn. Confinement des quarks imminent. Initiez la baryogenèse pour former des hadrons stables (Hydrogène)."
    },
    dialogueEnd: {
        [KnowledgeLevel.NOVICE]: "On a de la matière ! C'est le début de tout : l'eau, les cailloux, et toi !",
        [KnowledgeLevel.INTERMEDIATE]: "Hydrogène (H) et Hélium (He) formés. C'est la soupe primordiale. Prochaine étape : la lumière.",
        [KnowledgeLevel.EXPERT]: "Nucléosynthèse primordiale achevée. Abondance : 75% H, 25% He. L'univers est un plasma opaque."
    },
    rewardText: "Débloque : Interaction Forte",
    isCompleted: false
  },
  {
    id: 'm_light',
    title: 'Que la Lumière Soit',
    description: 'Libérez les photons pour éclairer l\'univers.',
    triggerCondition: (s) => s.completedMissions.includes('m_matter') && s.era >= Era.NUCLEOSYNTHESIS,
    completionCondition: (s) => s.era === Era.DARK_AGES, // En atteignant Dark Ages, on a fini Recombinaison
    dialogueStart: {
        [KnowledgeLevel.NOVICE]: "C'est le brouillard total. La lumière est piégée. Il faut refroidir encore un peu pour que la lumière puisse voyager librement.",
        [KnowledgeLevel.INTERMEDIATE]: "L'univers est un brouillard opaque de plasma. Au moment de la Recombinaison, les électrons se lient aux noyaux, libérant les photons.",
        [KnowledgeLevel.EXPERT]: "Surface de dernière diffusion. À 3000K, le libre parcours moyen des photons devient infini. Le Fond Diffus Cosmologique (CMB) doit être émis."
    },
    dialogueEnd: {
        [KnowledgeLevel.NOVICE]: "Flash ! L'univers est devenu transparent. Mais maintenant... il fait noir. C'est les Âges Sombres.",
        [KnowledgeLevel.INTERMEDIATE]: "Découplage réussi. Le rayonnement fossile est émis. L'univers entre maintenant dans les Âges Sombres en attendant les étoiles.",
        [KnowledgeLevel.EXPERT]: "Recombinaison achevée. L'univers est neutre et transparent. Début de l'ère sombre pré-stellaire."
    },
    rewardText: "Débloque : Poussière Cosmique",
    isCompleted: false
  },
  {
    id: 'm_stars',
    title: 'Allumer les Fourneaux',
    description: 'Utilisez la gravité pour créer des étoiles.',
    triggerCondition: (s) => s.completedMissions.includes('m_light') && s.era === Era.DARK_AGES,
    completionCondition: (s) => s.era === Era.STELLAR,
    dialogueStart: {
        [KnowledgeLevel.NOVICE]: "Il fait tout noir... Utilisons la force 'Gravité' pour rassembler les nuages de gaz. Si on les serre très fort, ils vont s'allumer et faire des étoiles !",
        [KnowledgeLevel.INTERMEDIATE]: "Les nuages de gaz sont froids. Utilisez les Puits Gravitationnels pour les effondrer. La pression va déclencher la fusion nucléaire.",
        [KnowledgeLevel.EXPERT]: "Effondrement gravitationnel des nuages moléculaires requis. Atteignez la masse de Jeans pour initier la fusion thermonucléaire de l'hydrogène (Ignition)."
    },
    dialogueEnd: {
        [KnowledgeLevel.NOVICE]: "C'est magnifique ! Des milliards d'étoiles s'allument. Elles sont comme des usines qui fabriquent les ingrédients des planètes.",
        [KnowledgeLevel.INTERMEDIATE]: "Ignition confirmée ! Ces étoiles (Population III) vont forger les éléments lourds (Carbone, Fer) nécessaires à la vie.",
        [KnowledgeLevel.EXPERT]: "Réionisation de l'univers. Métallicité en augmentation grâce à la nucléosynthèse stellaire. Conditions pré-biotiques en approche."
    },
    rewardText: "Débloque : Supernovae & Planètes",
    isCompleted: false
  }
];
