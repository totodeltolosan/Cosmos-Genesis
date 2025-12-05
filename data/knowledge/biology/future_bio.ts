
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const BIO_SILICON: KnowledgeNode = {
    id: 'syn_silicon',
    title: "Vie Silicium",
    tags: ['biologie', 'alien', 'chimie', 'roche'],
    fact: "La vie sur Terre est basée sur le Carbone. Le Silicium est l'élément le plus proche chimiquement. Des aliens pourraient être des pierres vivantes.",
    analogy: "Le Carbone est le Lego standard. Le Silicium est un Lego un peu plus gros et rigide, mais qui s'emboîte pareil.",
    detail: "Problème : Le 'CO2' de silicium est solide (sable), donc difficile à respirer. Possible à haute température.",
    interaction: { question: "Alternative au Carbone ?", options: ["Fer", "Silicium", "Or"], correctIndex: 1, explanation: "Même colonne tableau." },
    dynamicContext: (s) => null
};

export const BIO_HIVE: KnowledgeNode = {
    id: 'syn_hive',
    title: "Esprit de Ruche",
    tags: ['biologie', 'conscience', 'groupe', 'abeille'],
    fact: "Une intelligence collective où les individus n'ont pas de pensée propre, mais le groupe est intelligent.",
    analogy: "Une fourmilière est intelligente, mais une fourmi seule est stupide. Tes neurones sont bêtes, mais ton cerveau est malin.",
    detail: "Borg (Star Trek), Zerg. Efficacité maximale, individualité nulle.",
    interaction: { question: "Qui décide ?", options: ["Le roi", "Le groupe (Collectif)", "Le hasard"], correctIndex: 1, explanation: "Émergence." },
    dynamicContext: (s) => s.exploration.factions['CONCLAVE'] ? "Le Conclave fonctionne un peu comme une ruche psionique." : null
};

export const BIO_UPLOAD: KnowledgeNode = {
    id: 'syn_upload',
    title: "Téléchargement de l'Esprit",
    tags: ['transhumanisme', 'cerveau', 'immortalité', 'ordinateur'],
    fact: "Scanner un cerveau humain couche par couche pour le copier dans un ordinateur (Mind Uploading).",
    analogy: "Sauvegarder ton âme sur une clé USB pour vivre dans Minecraft éternellement.",
    detail: "Nécessite de comprendre la conscience. Est-ce toi ou une copie (Paradoxe du téléporteur) ?",
    interaction: { question: "Avantage ?", options: ["Manger plus", "Immortalité numérique", "Voler"], correctIndex: 1, explanation: "Plus de corps biologique." },
    dynamicContext: (s) => s.era >= Era.SIMULATION ? "Tu es peut-être déjà un esprit uploadé sans le savoir." : null
};

export const BIO_CRYONICS: KnowledgeNode = {
    id: 'syn_cryonics',
    title: "Cryogénie",
    tags: ['futur', 'froid', 'glace', 'résurrection'],
    fact: "Congeler un corps juste après la mort en espérant que la médecine du futur pourra le réparer et le réveiller.",
    analogy: "Mettre 'Pause' sur la vie et attendre le patch de mise à jour.",
    detail: "Problème : les cristaux de glace détruisent les cellules. On utilise des antigels (vitrification).",
    interaction: { question: "Garantie de réveil ?", options: ["100%", "Aucune", "50%"], correctIndex: 1, explanation: "Pari technologique." },
    dynamicContext: (s) => null
};

export const BIO_DESIGNER_BABY: KnowledgeNode = {
    id: 'syn_designer_baby',
    title: "Bébé Sur-Mesure",
    tags: ['génétique', 'éthique', 'futur', 'adn'],
    fact: "Utiliser CRISPR pour choisir la couleur des yeux, l'intelligence ou la force d'un enfant avant sa naissance.",
    analogy: "Créer son personnage de jeu vidéo, mais avec un vrai humain.",
    detail: "Eugénisme positif. Risque de créer deux espèces humaines (Gattaca) : les riches modifiés et les pauvres naturels.",
    interaction: { question: "Risque principal ?", options: ["Inégalité", "Laideur", "Rien"], correctIndex: 0, explanation: "Société à deux vitesses." },
    dynamicContext: (s) => null
};

export const BIO_GREY_GOO: KnowledgeNode = {
    id: 'syn_grey_goo',
    title: "Gelée Grise",
    tags: ['nanotech', 'fin du monde', 'robot', 'virus'],
    fact: "Scénario catastrophe où des nanorobots auto-réplicants mangent toute la matière de la Terre pour se copier.",
    analogy: "Un virus robotique qui transforme tout (arbres, maisons, toi) en copies de lui-même. La Terre devient une boule de robots gris.",
    detail: "Eric Drexler. Danger de la nanotechnologie incontrôlée.",
    interaction: { question: "Leur but ?", options: ["Tuer", "Se répliquer", "Voler"], correctIndex: 1, explanation: "Programme aveugle." },
    dynamicContext: (s) => s.resources[ResourceType.MATTER] > 1e20 ? "Attention à ne pas tout transformer en machines..." : null
};

export const BIO_DYSON_TREE: KnowledgeNode = {
    id: 'syn_dyson_tree',
    title: "Arbre de Dyson",
    tags: ['bio', 'espace', 'plante', 'génie'],
    fact: "Une plante génétiquement modifiée pour pousser sur une comète, produisant de l'oxygène et un habitat dans l'espace.",
    analogy: "Une maison-arbre dans le vide spatial.",
    detail: "Concept de Freeman Dyson. Terraformation biologique locale.",
    interaction: { question: "Pousse sur ?", options: ["Terre", "Comète", "Soleil"], correctIndex: 1, explanation: "Utilise la glace et le carbone." },
    dynamicContext: (s) => null
};

export const BIO_UPLIFT: KnowledgeNode = {
    id: 'syn_uplift',
    title: "Élévation (Uplift)",
    tags: ['bio', 'animal', 'intelligence', 'conscience'],
    fact: "Donner l'intelligence humaine à des animaux (dauphins, singes, chiens) par génétique.",
    analogy: "La Planète des Singes, mais gentille (ou pas).",
    detail: "David Brin. Questions éthiques : a-t-on le droit de forcer une espèce à devenir 'civilisée' ?",
    interaction: { question: "Candidat probable ?", options: ["Mouche", "Chimpanzé", "Caillou"], correctIndex: 1, explanation: "Déjà proche de nous." },
    dynamicContext: (s) => null
};

export const BIO_CYBORG: KnowledgeNode = {
    id: 'syn_cyborg',
    title: "Cyborg",
    tags: ['bio', 'tech', 'mélange', 'humain'],
    fact: "Organisme Cybernétique. Un mélange de vivant et de machine. Un humain avec un bras robotique ou une puce est un cyborg.",
    analogy: "Robocop ou Iron Man (si l'armure est intégrée). Nous sommes déjà des cyborgs avec nos smartphones.",
    detail: "Augmentation des capacités. Frontière floue entre réparation (prothèse) et amélioration.",
    interaction: { question: "Défintion ?", options: ["Robot", "Vivant + Machine", "Alien"], correctIndex: 1, explanation: "Hybride." },
    dynamicContext: (s) => s.upgrades['neural_link'] ? "Tes citoyens sont connectés. Ce sont des cyborgs." : null
};

export const BIO_IMMORTALITY: KnowledgeNode = {
    id: 'syn_immortality',
    title: "Immortalité Biologique",
    tags: ['vie', 'mort', 'cellule', 'méduse'],
    fact: "Ne pas mourir de vieillesse. Certaines méduses (Turritopsis) peuvent rajeunir et vivre éternellement.",
    analogy: "Un cycle infini : Bébé -> Adulte -> Bébé -> Adulte...",
    detail: "Négligence sénescente. Le but du transhumanisme est d'atteindre cet état pour l'homme.",
    interaction: { question: "Qui est immortel ?", options: ["Chien", "Méduse Turritopsis", "Moustique"], correctIndex: 1, explanation: "Rajeunit ses cellules." },
    dynamicContext: (s) => s.era >= Era.GALACTIC ? "Tes habitants vivent des millénaires grâce à ta tech." : null
};

export const BIO_BIOPRINT: KnowledgeNode = {
    id: 'syn_bioprint',
    title: "Bio-Impression 3D",
    tags: ['tech', 'médecine', 'organe', 'futur'],
    fact: "Imprimer des organes vivants (foie, cœur) avec une imprimante 3D chargée d'encre de cellules.",
    analogy: "Imprimer une pizza, mais c'est un rein pour une greffe. Plus besoin de donneur.",
    detail: "Utilise les cellules du patient, donc zéro rejet.",
    interaction: { question: "L'encre est faite de ?", options: ["Plastique", "Cellules", "Sang"], correctIndex: 1, explanation: "Bio-encre." },
    dynamicContext: (s) => null
};

export const BIO_BCI: KnowledgeNode = {
    id: 'syn_bci',
    title: "Interface Cerveau-Machine",
    tags: ['tech', 'cerveau', 'contrôle', 'pensée'],
    fact: "Connecter le cerveau directement à un ordinateur pour contrôler des choses par la pensée.",
    analogy: "La télépathie avec les machines. Neuralink.",
    detail: "Permet aux paralysés de bouger un bras robotique ou d'écrire. Futur : Internet dans la tête.",
    interaction: { question: "Contrôle par ?", options: ["La voix", "La pensée", "Les yeux"], correctIndex: 1, explanation: "Signaux neuronaux." },
    dynamicContext: (s) => null
};

export const BIO_NEURAL_LACE: KnowledgeNode = {
    id: 'syn_neural_lace',
    title: "Dentelle Neurale",
    tags: ['tech', 'cerveau', 'implant', 'ia'],
    fact: "Un maillage ultra-fin injecté dans le cerveau qui grandit avec les neurones pour fusionner avec l'IA.",
    analogy: "Une deuxième couche sur ton cerveau pour le booster.",
    detail: "Concept de Iain M. Banks. Permet la sauvegarde de conscience et l'augmentation cognitive.",
    interaction: { question: "Forme ?", options: ["Puce carrée", "Filet/Dentelle", "Casque"], correctIndex: 1, explanation: "S'intègre aux tissus." },
    dynamicContext: (s) => null
};

export const BIO_EXOCORTEX: KnowledgeNode = {
    id: 'syn_exocortex',
    title: "Exocortex",
    tags: ['cerveau', 'externe', 'mémoire', 'smartphone'],
    fact: "Un système externe qui sert de cerveau supplémentaire (Smartphone, Internet, Carnet).",
    analogy: "Ton téléphone est déjà ton exocortex : il contient ta mémoire (photos, numéros) et ton savoir (Google).",
    detail: "L'homme est une espèce cognitivement étendue.",
    interaction: { question: "Ton téléphone est...", options: ["Un jouet", "Un exocortex", "Un ennemi"], correctIndex: 1, explanation: "Extension cognitive." },
    dynamicContext: (s) => "Je suis ton exocortex dans ce jeu."
};

export const BIO_MORPH_FREEDOM: KnowledgeNode = {
    id: 'syn_morph_freedom',
    title: "Liberté Morphologique",
    tags: ['transhumanisme', 'corps', 'choix', 'forme'],
    fact: "Le droit de modifier son corps comme on veut (ailes, queue, sexe, couleur, implants).",
    analogy: "Le corps est un costume ou un avatar customisable.",
    detail: "Concept clé du post-humanisme. Dépassement de la biologie imposée.",
    interaction: { question: "Limite ?", options: ["Nature", "Imagination/Tech", "Loi"], correctIndex: 1, explanation: "Customisation totale." },
    dynamicContext: (s) => s.playerProfile?.avatarIcon ? `Tu as choisi l'avatar ${s.playerProfile.avatarIcon}. C'est un début de liberté morphologique.` : null
};

export const BIO_POSTGENDER: KnowledgeNode = {
    id: 'syn_postgender',
    title: "Post-Genrisme",
    tags: ['société', 'genre', 'futur', 'tech'],
    fact: "L'idée que la technologie rendra le sexe biologique et le genre obsolètes ou au choix.",
    analogy: "La reproduction se fera en machine (utérus artificiel), donc être homme ou femme ne servira plus à rien biologiquement.",
    detail: "Libération des contraintes biologiques de la reproduction.",
    interaction: { question: "Reproduction ?", options: ["Naturelle", "Artificielle", "Impossible"], correctIndex: 1, explanation: "Ectogenèse." },
    dynamicContext: (s) => null
};

export const BIO_SENS: KnowledgeNode = {
    id: 'syn_sens',
    title: "SENS (Aubrey de Grey)",
    tags: ['vieillesse', 'ingénierie', 'réparation', 'corps'],
    fact: "Strategies for Engineered Negligible Senescence. L'idée que vieillir est une maladie curable en réparant 7 types de dégâts cellulaires.",
    analogy: "Le corps est une voiture de collection. Si on change les pièces et qu'on nettoie la rouille, elle peut rouler 1000 ans.",
    detail: "Approche ingénierie de la longévité. Traiter les causes (déchets, mutations) plutôt que les symptômes.",
    interaction: { question: "Vieillir est...", options: ["Inévitable", "Une maladie", "Bien"], correctIndex: 1, explanation: "Selon SENS." },
    dynamicContext: (s) => null
};

export const BIO_DIRECTED_PANSPERMIA: KnowledgeNode = {
    id: 'syn_directed_panspermia',
    title: "Panspermie Dirigée",
    tags: ['espace', 'vie', 'mission', 'graine'],
    fact: "Envoyer volontairement des capsules de bactéries vers d'autres planètes pour y démarrer la vie.",
    analogy: "Jardiner la galaxie. On lance des graines partout en espérant que ça pousse.",
    detail: "Proposé par Crick (ADN). Peut-être que la vie sur Terre a été envoyée par des aliens ?",
    interaction: { question: "But ?", options: ["Guerre", "Colonisation vie", "Pollution"], correctIndex: 1, explanation: "Répandre la vie." },
    dynamicContext: (s) => s.exploration.colonies ? "Quand tu colonises une planète, tu fais de la panspermie dirigée." : null
};

export const BIO_TERRAFORMING: KnowledgeNode = {
    id: 'syn_terraforming',
    title: "Terraformage",
    tags: ['espace', 'mars', 'planète', 'ingénierie'],
    fact: "Modifier l'atmosphère et la température d'une planète pour la rendre habitable (comme la Terre).",
    analogy: "Mettre une serre et du chauffage sur Mars pour pouvoir y vivre sans scaphandre.",
    detail: "Étapes : Réchauffer, Épaissir l'atmosphère, Planter (Oxygène). Prend des siècles.",
    interaction: { question: "Candidat idéal ?", options: ["Jupiter", "Mars", "Soleil"], correctIndex: 1, explanation: "Proche et solide." },
    dynamicContext: (s) => Object.values(s.exploration.colonies).some(c => c.level > 3) ? "Tes colonies avancées commencent à terraformer leur monde." : null
};

export const BIO_XENOBIOLOGY: KnowledgeNode = {
    id: 'syn_xenobiology',
    title: "Xénobiologie",
    tags: ['alien', 'bio', 'espace', 'étude'],
    fact: "La science (théorique) de la vie extraterrestre. À quoi pourraient ressembler des aliens ?",
    analogy: "La biologie des non-terriens. Pas forcément des bonshommes verts.",
    detail: "Biochimies alternatives (Ammoniac au lieu d'eau ?). Gravité différente = formes différentes.",
    interaction: { question: "On en a trouvé ?", options: ["Plein", "Aucun (officiellement)", "Un seul"], correctIndex: 1, explanation: "Pas encore." },
    dynamicContext: (s) => null
};
