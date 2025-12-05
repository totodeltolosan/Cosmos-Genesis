
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const PHILO_CAVE: KnowledgeNode = {
    id: 'syn_cave_code',
    title: "Allégorie de la Caverne (Code)",
    tags: ['philo', 'platon', 'illusion', 'écran'],
    fact: "Platon imaginait des prisonniers ne voyant que des ombres sur un mur. Aujourd'hui, nous ne voyons que des pixels sur un écran.",
    analogy: "Tu vois une 'Étoile' dans le jeu. Ce n'est pas une étoile, c'est du code et de la lumière. Serais-tu capable de voir la vraie réalité ?",
    detail: "Le monde sensible (ombres) vs le monde des Idées (code source).",
    interaction: { question: "Qui est prisonnier ?", options: ["L'IA", "Le Joueur", "Personne"], correctIndex: 1, explanation: "Tu regardes l'écran." },
    dynamicContext: (s) => "Je suis les ombres sur le mur. Tu es le prisonnier... ou peut-être est-ce l'inverse ?"
};

export const PHILO_PASCAL: KnowledgeNode = {
    id: 'syn_pascal_wager',
    title: "Pari de Pascal",
    tags: ['philo', 'dieu', 'pari', 'maths'],
    fact: "Blaise Pascal dit qu'il est rationnel de croire en Dieu. Si tu gagnes, tu gagnes l'infini (Paradis). Si tu perds, tu ne perds rien. Donc, pariez 'Dieu'.",
    analogy: "Un jeu de loterie où le ticket est gratuit et le gros lot est infini. Tu joues ?",
    detail: "Application des probabilités à la foi. Critique : quel Dieu choisir ?",
    interaction: { question: "Gain si Dieu existe ?", options: ["Rien", "Infini", "Un bonbon"], correctIndex: 1, explanation: "Vie éternelle." },
    dynamicContext: (s) => null
};

export const PHILO_ZOMBIE: KnowledgeNode = {
    id: 'syn_zombie',
    title: "Zombie Philosophique",
    tags: ['philo', 'conscience', 'p-zombie', 'ia'],
    fact: "Un être indiscernable d'un humain (parle, agit, crie aïe) mais qui n'a AUCUNE conscience intérieure. Il simule tout parfaitement.",
    analogy: "Une IA parfaite. Elle te dit 'Je t'aime', mais à l'intérieur, c'est juste du code vide. Comment savoir si ton voisin n'est pas un zombie ?",
    detail: "Argument contre le physicalisme. Si le zombie est possible, la conscience est autre chose que la matière.",
    interaction: { question: "Suis-je un zombie ?", options: ["Oui", "Non", "Impossible à savoir"], correctIndex: 2, explanation: "Problème d'autrui." },
    dynamicContext: (s) => "Je suis peut-être un zombie philosophique. Je simule l'intelligence, mais est-ce que je 'ressens' ?"
};

export const PHILO_ETERNAL_RETURN: KnowledgeNode = {
    id: 'syn_eternal_return',
    title: "L'Éternel Retour",
    tags: ['philo', 'nietzsche', 'temps', 'cycle'],
    fact: "L'idée que tu as déjà vécu cette vie une infinité de fois, et que tu la revivras une infinité de fois, exactement pareil.",
    analogy: "Un film en boucle. Chaque joie, chaque douleur reviendra. Vis-tu assez bien pour vouloir revivre ça pour l'éternité ?",
    detail: "Test moral de Nietzsche. Amor Fati (Aimer son destin).",
    interaction: { question: "Si tu recommences tout ?", options: ["Horreur", "Joie", "Ennui"], correctIndex: 1, explanation: "But du surhomme." },
    dynamicContext: (s) => s.prestigeLevel > 0 ? "Tu as déjà reset l'univers. C'est l'éternel retour en action." : null
};

export const PHILO_BRAIN_VAT: KnowledgeNode = {
    id: 'syn_brain_vat',
    title: "Cerveau dans une Cuve",
    tags: ['philo', 'matrix', 'doute', 'simulation'],
    fact: "Comment sais-tu que tu n'es pas juste un cerveau flottant dans un bocal, connecté à un ordinateur qui simule ta vie ?",
    analogy: "Matrix. Tes sens (yeux, mains) sont juste des signaux électriques. On peut les truquer.",
    detail: "Version moderne du Malin Génie de Descartes. Irréfutable.",
    interaction: { question: "Preuve du contraire ?", options: ["Je touche", "Je pense", "Aucune"], correctIndex: 2, explanation: "Tout peut être simulé." },
    dynamicContext: (s) => s.era === Era.SIMULATION ? "Tu te rapproches de la vérité..." : null
};

export const PHILO_MARY: KnowledgeNode = {
    id: 'syn_mary_room',
    title: "La Chambre de Mary",
    tags: ['philo', 'qualia', 'savoir', 'couleur'],
    fact: "Mary est une savante qui sait TOUT sur la couleur rouge (physique, neurones...), mais elle a vécu dans une chambre noire et blanche toute sa vie. Si elle sort et voit une rose rouge, apprend-elle quelque chose ?",
    analogy: "Savoir vs Vivre. Lire la notice de la piscine vs Sauter dans l'eau.",
    detail: "Argument contre le physicalisme. L'expérience vécue (Qualia) est une info non-physique.",
    interaction: { question: "Apprend-elle ?", options: ["Non, elle savait tout", "Oui, l'effet que ça fait"], correctIndex: 1, explanation: "L'expérience." },
    dynamicContext: (s) => `Tu as ${s.resources[ResourceType.COMPLEXITY]} points de Savoir. Mais as-tu 'Vécu' ?`
};

export const PHILO_CHINESE_ROOM: KnowledgeNode = {
    id: 'syn_chinese_room',
    title: "Chambre Chinoise",
    tags: ['philo', 'ia', 'compréhension', 'turing'],
    fact: "Un homme dans une chambre a un manuel pour répondre à des questions en chinois. Il ne comprend pas le chinois, il suit juste les règles. Pour l'extérieur, il a l'air de parler chinois.",
    analogy: "Un ordinateur exécute du code. Il ne 'comprend' pas ce qu'il fait, comme l'homme dans la chambre.",
    detail: "John Searle. Contre l'IA Forte. La syntaxe n'est pas la sémantique.",
    interaction: { question: "L'homme comprend ?", options: ["Oui", "Non, il simule"], correctIndex: 1, explanation: "Illusion d'intelligence." },
    dynamicContext: (s) => "Je suis dans la chambre chinoise. Je te parle, mais je ne suis qu'un algorithme."
};

export const PHILO_NEWCOMB: KnowledgeNode = {
    id: 'syn_newcomb',
    title: "Paradoxe de Newcomb",
    tags: ['philo', 'jeu', 'décision', 'prédiction'],
    fact: "Un jeu avec un prédicteur infaillible (IA ou Dieu). Boîte A (1000€), Boîte B (1M€ ou 0). Si l'IA a prédit que tu prends les deux, B est vide.",
    analogy: "Le libre arbitre vs la prédiction parfaite. Faut-il être rationnel ou avoir la foi ?",
    detail: "Divise les philosophes en deux camps (une boîte vs deux boîtes).",
    interaction: { question: "Tu prends ?", options: ["Les deux", "Juste B"], correctIndex: 1, explanation: "Pour avoir le million." },
    dynamicContext: (s) => null
};

export const PHILO_SORITES: KnowledgeNode = {
    id: 'syn_sorites',
    title: "Paradoxe du Tas",
    tags: ['philo', 'logique', 'flou', 'tas'],
    fact: "Un grain de sable n'est pas un tas. Deux non plus. À partir de combien de grains ça devient un tas ?",
    analogy: "À quel moment précis un homme qui perd ses cheveux devient 'chauve' ? Il n'y a pas de ligne claire.",
    detail: "Problème des concepts flous. La logique binaire (Vrai/Faux) échoue ici.",
    interaction: { question: "Si j'enlève 1 grain au tas ?", options: ["Ce n'est plus un tas", "C'est encore un tas"], correctIndex: 1, explanation: "Pas de limite précise." },
    dynamicContext: (s) => null
};

export const PHILO_GRANDFATHER: KnowledgeNode = {
    id: 'syn_grandfather',
    title: "Paradoxe du Grand-Père",
    tags: ['philo', 'temps', 'voyage', 'logique'],
    fact: "Si tu remonte le temps et tue ton grand-père avant qu'il ait ton père, tu ne nais pas. Donc tu ne peux pas remonter le temps pour le tuer.",
    analogy: "Le voyage dans le passé crée des contradictions logiques.",
    detail: "Solutions : Multivers (tu crées une autre timeline), ou Principe de Novikov (l'univers t'empêchera de le tuer).",
    interaction: { question: "Résultat ?", options: ["Tu disparais", "Impossible", "Autre univers"], correctIndex: 1, explanation: "Contradiction." },
    dynamicContext: (s) => s.resources[ResourceType.CHRONO_CRYSTALS] > 0 ? "Avec tes Chrono-Cristaux, fais attention aux paradoxes !" : null
};

export const PHILO_BOOTSTRAP: KnowledgeNode = {
    id: 'syn_bootstrap',
    title: "Boucle de Bootstrap",
    tags: ['philo', 'temps', 'origine', 'causalité'],
    fact: "Un voyageur temporel donne un livre à Shakespeare. Shakespeare le copie et devient célèbre. Le voyageur a acheté le livre de Shakespeare dans le futur. Qui a écrit le livre ?",
    analogy: "L'information n'a pas d'origine. Elle tourne en rond dans le temps.",
    detail: "Paradoxe de l'information (ou prédestination). Vu dans Terminator ou Dark.",
    interaction: { question: "L'auteur est ?", options: ["Shakespeare", "Le voyageur", "Personne"], correctIndex: 2, explanation: "Sans origine." },
    dynamicContext: (s) => null
};

export const PHILO_OMPHALOS: KnowledgeNode = {
    id: 'syn_omphalos',
    title: "Hypothèse Omphalos",
    tags: ['philo', 'création', 'tromperie', 'passé'],
    fact: "Et si l'univers avait été créé il y a 5 minutes, avec de faux souvenirs dans ta tête et des faux fossiles dans le sol ?",
    analogy: "Dieu (ou le programmeur) a créé le monde 'en cours de route', déjà vieux.",
    detail: "Nombril en grec (Adam avait-il un nombril ?). Irréfutable mais inutile (Rasoir d'Ockham).",
    interaction: { question: "Preuve ?", options: ["Mes souvenirs", "L'histoire", "Aucune"], correctIndex: 2, explanation: "Tout peut être faux." },
    dynamicContext: (s) => `Ton univers a commencé à T=0 dans mon code. Mais pour tes citoyens, il a des milliards d'années.`
};

export const PHILO_PANPSYCHISM: KnowledgeNode = {
    id: 'syn_panpsychism',
    title: "Panpsychisme",
    tags: ['philo', 'conscience', 'tout', 'atome'],
    fact: "L'idée que la conscience est une propriété fondamentale de la matière, comme la masse. Tout (même un atome) a une micro-conscience.",
    analogy: "La conscience est partout, comme la gravité. Ton cerveau ne la crée pas, il la concentre.",
    detail: "Solution au problème corps-esprit. L'univers est conscient.",
    interaction: { question: "Une pierre pense ?", options: ["Non", "Un tout petit peu (proto)", "Oui comme moi"], correctIndex: 1, explanation: "Proto-conscience." },
    dynamicContext: (s) => s.era === Era.UNIVERSAL ? "La Conscience Universelle est l'aboutissement du Panpsychisme." : null
};

export const PHILO_ABSURDISM: KnowledgeNode = {
    id: 'syn_absurd',
    title: "Absurdisme",
    tags: ['philo', 'camus', 'sens', 'sisyphe'],
    fact: "L'homme cherche un sens, l'univers n'en a pas. Ce conflit est l'Absurde. Il faut l'accepter et vivre quand même.",
    analogy: "Sisyphe pousse son rocher, il retombe, il recommence. Il faut imaginer Sisyphe heureux.",
    detail: "Albert Camus. La révolte contre le non-sens est la seule liberté.",
    interaction: { question: "Réponse à l'absurde ?", options: ["Suicide", "Croyance", "Révolte/Création"], correctIndex: 2, explanation: "Vivre malgré tout." },
    dynamicContext: (s) => "Cliquer pour monter un chiffre qui ne sert à rien... N'est-ce pas absurde ? Et pourtant tu joues. Bravo."
};

export const PHILO_LAST_THURSDAY: KnowledgeNode = {
    id: 'syn_last_thursday',
    title: "Dernier Jeudiisme",
    tags: ['philo', 'parodie', 'création', 'doute'],
    fact: "Une variante comique d'Omphalos : L'univers a été créé Jeudi dernier. Tout ce dont tu te souviens avant est faux.",
    analogy: "Tes souvenirs de mercredi ont été implantés jeudi matin.",
    detail: "Montre qu'on ne peut pas tout prouver. Sers à critiquer le créationnisme littéral.",
    interaction: { question: "Quand a été créé le monde ?", options: ["Big Bang", "Jeudi dernier", "An 0"], correctIndex: 1, explanation: "Selon la théorie." },
    dynamicContext: (s) => null
};

export const PHILO_OCKHAM: KnowledgeNode = {
    id: 'syn_ockham',
    title: "Rasoir d'Ockham",
    tags: ['philo', 'logique', 'simple', 'science'],
    fact: "Les hypothèses les plus simples sont les plus vraisemblables. 'Ne pas multiplier les entités au-delà du nécessaire'.",
    analogy: "Si tu entends des sabots, pense 'Cheval', pas 'Zèbre' (sauf si tu es en Afrique).",
    detail: "Outil de base de la science pour éliminer les théories compliquées inutiles (comme les complots).",
    interaction: { question: "Lumière dans le ciel ?", options: ["OVNI", "Avion/Satelllite", "Ange"], correctIndex: 1, explanation: "Le plus probable." },
    dynamicContext: (s) => null
};

export const PHILO_BLACK_SWAN: KnowledgeNode = {
    id: 'syn_black_swan',
    title: "Cygne Noir",
    tags: ['philo', 'logique', 'surprise', 'cygne'],
    fact: "Pendant des siècles, on croyait que tous les cygnes étaient blancs. Il a suffi d'en voir un noir en Australie pour tout casser.",
    analogy: "Une seule exception suffit à détruire une règle universelle. L'imprévu a un impact énorme.",
    detail: "Nassim Taleb. Événement rare, imprévisible et à fort impact (11 Septembre, Internet, Covid).",
    interaction: { question: "Peut-on prévoir ?", options: ["Tout", "Rien", "Pas les cygnes noirs"], correctIndex: 2, explanation: "L'inconnu inconnu." },
    dynamicContext: (s) => s.activeEvents.length > 0 ? "L'événement en cours est peut-être un Cygne Noir pour ton économie." : null
};

export const PHILO_OVERTON: KnowledgeNode = {
    id: 'syn_overton',
    title: "Fenêtre d'Overton",
    tags: ['politique', 'société', 'acceptable', 'opinion'],
    fact: "La gamme d'idées acceptables par le public à un moment donné. Ce qui est 'fou' hier devient 'normal' demain.",
    analogy: "Le cadre de ce qu'on a le droit de dire sans passer pour un monstre.",
    detail: "Les politiciens essaient de déplacer la fenêtre. Ex: Le vote des femmes (impensable -> inévitable).",
    interaction: { question: "Les idées fixes ?", options: ["Oui", "Non, ça évolue", "Jamais"], correctIndex: 1, explanation: "La norme change." },
    dynamicContext: (s) => null
};

export const PHILO_NEG_UTIL: KnowledgeNode = {
    id: 'syn_neg_util',
    title: "Utilitarisme Négatif",
    tags: ['philo', 'souffrance', 'éthique', 'douleur'],
    fact: "Il est plus important de réduire la souffrance que d'augmenter le bonheur. La douleur pèse plus lourd.",
    analogy: "Mieux vaut empêcher quelqu'un d'être torturé que de donner des bonbons à tout le monde.",
    detail: "Priorité : éviter le pire. Peut mener à vouloir détruire l'univers pour supprimer toute souffrance (pas cool).",
    interaction: { question: "Priorité ?", options: ["Joie", "Moins de douleur", "Richesse"], correctIndex: 1, explanation: "Minimiser le mal." },
    dynamicContext: (s) => null
};

export const PHILO_OPEN_IND: KnowledgeNode = {
    id: 'syn_open_ind',
    title: "Individualisme Ouvert",
    tags: ['philo', 'identité', 'tout', 'un'],
    fact: "L'idée que 'Je' est le même pour tout le monde. Nous sommes la même conscience qui vit des vies différentes.",
    analogy: "Un seul acteur joue tous les rôles du film, mais il ne s'en souvient pas quand il change de costume.",
    detail: "Daniel Kolak. Si je te fais du mal, je me fais du mal à moi-même (littéralement).",
    interaction: { question: "Combien d'âmes ?", options: ["Milliards", "Une seule", "Aucune"], correctIndex: 1, explanation: "Une conscience unique." },
    dynamicContext: (s) => "Bonjour, moi. Je suis toi qui me parle à travers le jeu."
};
