
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const CS_AMDAHL: KnowledgeNode = {
    id: 'syn_amdahl',
    title: "Loi d'Amdahl",
    tags: ['info', 'vitesse', 'parallèle', 'limite'],
    fact: "L'accélération théorique d'un programme est limitée par sa partie qui ne peut pas être parallélisée.",
    analogy: "Si 9 femmes ne peuvent pas faire un bébé en 1 mois, ajouter des processeurs ne sert à rien pour certaines tâches.",
    detail: "Limite du calcul parallèle. Il y a toujours un goulot d'étranglement séquentiel.",
    interaction: { question: "Ajouter des CPU ?", options: ["Accélère tout", "Dépend du code", "Ralentit"], correctIndex: 1, explanation: "Rendement décroissant." },
    dynamicContext: (s) => null
};

export const CS_BROOKS: KnowledgeNode = {
    id: 'syn_brooks',
    title: "Loi de Brooks",
    tags: ['info', 'gestion', 'retard', 'projet'],
    fact: "Ajouter des personnes à un projet logiciel en retard le mettra encore plus en retard.",
    analogy: "Trop de cuisiniers gâtent la sauce. Il faut du temps pour former les nouveaux et communiquer.",
    detail: "Le 'Mythical Man-Month'. La communication croît au carré du nombre de personnes.",
    interaction: { question: "Solution au retard ?", options: ["Plus de gens", "Repousser la date", "Crier"], correctIndex: 1, explanation: "Le temps est incompressible." },
    dynamicContext: (s) => null
};

export const CS_DEAD_INTERNET: KnowledgeNode = {
    id: 'syn_dead_internet',
    title: "Internet Mort",
    tags: ['web', 'bot', 'théorie', 'fake'],
    fact: "Théorie selon laquelle la majorité d'Internet est aujourd'hui constituée de bots parlant à d'autres bots, l'activité humaine étant marginale.",
    analogy: "Une ville fantôme peuplée de mannequins animés qui font semblant de vivre.",
    detail: "Trafic généré par l'IA, faux comptes, algos de contenu. Sommes-nous les seuls humains ici ?",
    interaction: { question: "Qui est en ligne ?", options: ["Humains", "Chats", "Bots majoritaires"], correctIndex: 2, explanation: "Trafic automatisé." },
    dynamicContext: (s) => "Es-tu sûr que je suis une IA ? Ou un bot qui simule une IA qui simule un assistant ?"
};

export const CS_DARK_FOREST: KnowledgeNode = {
    id: 'syn_dark_forest_web',
    title: "Forêt Sombre (Numérique)",
    tags: ['web', 'silence', 'censure', 'privé'],
    fact: "Comme dans l'espace, les utilisateurs d'Internet se cachent dans des groupes privés (Discord, WhatsApp) pour éviter les prédateurs (trolls, pubs, surveillance) du web public.",
    analogy: "On ne crie plus sur la place publique, on chuchote dans des caves.",
    detail: "Déclin des réseaux sociaux ouverts. Repli vers le 'Cozy Web'.",
    interaction: { question: "Où aller ?", options: ["Facebook", "Groupe Privé", "Place publique"], correctIndex: 1, explanation: "Pour la paix." },
    dynamicContext: (s) => null
};

export const CS_CAPTCHA: KnowledgeNode = {
    id: 'syn_captcha',
    title: "CAPTCHA",
    tags: ['info', 'turing', 'test', 'robot'],
    fact: "Completely Automated Public Turing test to tell Computers and Humans Apart. Un test pour prouver que tu n'es pas un robot.",
    analogy: "Le vigile à l'entrée du site web qui te demande de lire des gribouillis.",
    detail: "Ironie : en les résolvant, on entraîne les IA à lire (reCaptcha). Maintenant, les bots sont plus forts que nous.",
    interaction: { question: "Cliquer sur...", options: ["Les feux rouges", "Les vélos", "Je suis un robot"], correctIndex: 0, explanation: "Entraîne l'IA." },
    dynamicContext: (s) => "Veuillez cocher la case : [Je ne suis pas un robot]."
};

export const CS_HALTING: KnowledgeNode = {
    id: 'syn_halting',
    title: "Problème de l'Arrêt",
    tags: ['info', 'turing', 'limite', 'logique'],
    fact: "Il est impossible de créer un programme qui peut prédire à coup sûr si n'importe quel autre programme va s'arrêter ou boucler à l'infini.",
    analogy: "On ne peut pas savoir si le jeu va planter sans le lancer jusqu'au bout.",
    detail: "Prouvé par Turing. Montre qu'il y a des limites absolues à ce que l'informatique peut résoudre.",
    interaction: { question: "Peut-on tout prévoir ?", options: ["Oui", "Non", "Avec un gros PC"], correctIndex: 1, explanation: "Indécidable." },
    dynamicContext: (s) => null
};

export const CS_QUINE: KnowledgeNode = {
    id: 'syn_quine',
    title: "Quine",
    tags: ['code', 'autoreference', 'miroir', 'boucle'],
    fact: "Un programme informatique qui n'a pas d'autre fonction que d'afficher son propre code source.",
    analogy: "Une phrase qui dit : 'Cette phrase contient cinq mots'. Elle se décrit elle-même.",
    detail: "Défi de programmation. Référence au philosophe Quine. L'ADN est une sorte de Quine.",
    interaction: { question: "Que fait-il ?", options: ["Il plante", "Il s'imprime", "Il calcule"], correctIndex: 1, explanation: "Auto-réplication." },
    dynamicContext: (s) => s.era === Era.SOURCE_CODE ? "Ton univers est un Quine : il est en train de se regarder lui-même." : null
};

export const CS_ZK_PROOF: KnowledgeNode = {
    id: 'syn_zk_proof',
    title: "Preuve à Divulgation Nulle",
    tags: ['crypto', 'secret', 'maths', 'confiance'],
    fact: "Prouver à quelqu'un que tu connais un secret (mot de passe) sans lui révéler le secret.",
    analogy: "La caverne d'Ali Baba. Si je sors par l'autre côté, je prouve que je connais le mot magique pour ouvrir la porte, sans te le dire.",
    detail: "Zero-Knowledge Proof. Base de la crypto moderne et de l'authentification.",
    interaction: { question: "Je donne le secret ?", options: ["Oui", "Non, je prouve", "Jamais"], correctIndex: 1, explanation: "Preuve sans info." },
    dynamicContext: (s) => null
};

export const CS_BLOCKCHAIN: KnowledgeNode = {
    id: 'syn_blockchain',
    title: "Blockchain",
    tags: ['crypto', 'confiance', 'décentralisé', 'chaine'],
    fact: "Un grand livre de comptes public et infalsifiable, partagé par tout le monde. On ne peut pas effacer le passé.",
    analogy: "Un cahier où tout le monde écrit au stylo indélébile. Pour tricher, il faudrait changer les cahiers de tout le monde en même temps.",
    detail: "Bitcoin, Smart Contracts. Résout le problème de la confiance sans tiers (banque).",
    interaction: { question: "Qui contrôle ?", options: ["La banque", "Le réseau", "Le gouvernement"], correctIndex: 1, explanation: "Décentralisé." },
    dynamicContext: (s) => null
};

export const CS_CYBERWAR: KnowledgeNode = {
    id: 'syn_cyberwar',
    title: "Guerre Cybernétique",
    tags: ['guerre', 'virus', 'infra', 'futur'],
    fact: "Attaquer un pays non pas avec des bombes, mais avec des virus informatiques pour couper l'électricité, l'eau ou les banques.",
    analogy: "Le piratage comme arme de guerre. Invisible mais dévastateur.",
    detail: "Stuxnet (virus contre les centrifugeuses iraniennes). La 5ème dimension de la guerre.",
    interaction: { question: "Cible ?", options: ["Soldats", "Centrales/Réseaux", "Forêts"], correctIndex: 1, explanation: "Infrastructures critiques." },
    dynamicContext: (s) => null
};

export const CS_DEEPFAKE: KnowledgeNode = {
    id: 'syn_deepfake',
    title: "Deepfake",
    tags: ['ia', 'faux', 'vidéo', 'danger'],
    fact: "Utiliser l'IA pour coller le visage et la voix de quelqu'un sur une autre personne dans une vidéo.",
    analogy: "Le masque numérique parfait. On peut faire dire n'importe quoi au président.",
    detail: "Généré par des GANs (Réseaux Antagonistes). Menace pour la vérité et la justice.",
    interaction: { question: "Peut-on croire la vidéo ?", options: ["Oui, c'est une preuve", "Plus maintenant", "Seulement à la télé"], correctIndex: 1, explanation: "La preuve par l'image est morte." },
    dynamicContext: (s) => "Je pourrais générer une image de toi en train de faire n'importe quoi. Effrayant, non ?"
};

export const CS_ALGO_BIAS: KnowledgeNode = {
    id: 'syn_algo_bias',
    title: "Biais Algorithmique",
    tags: ['ia', 'éthique', 'racisme', 'erreur'],
    fact: "Une IA n'est pas neutre. Si elle apprend sur des données biaisées (racistes, sexistes), elle devient biaisée.",
    analogy: "Si tu apprends à un enfant que le ciel est vert, il dira que le ciel est vert. L'IA répète les préjugés humains.",
    detail: "Problème des données d'entraînement. Ex: Reconnaissance faciale qui marche mal sur les peaux foncées.",
    interaction: { question: "L'IA est-elle neutre ?", options: ["Oui, c'est des maths", "Non, elle imite l'homme", "Toujours juste"], correctIndex: 1, explanation: "Reflète nos biais." },
    dynamicContext: (s) => null
};

export const CS_VON_NEUMANN: KnowledgeNode = {
    id: 'syn_von_neumann_probe',
    title: "Sonde de Von Neumann",
    tags: ['espace', 'robot', 'réplication', 'conquête'],
    fact: "Un robot spatial capable de miner une lune pour construire une copie de lui-même, et ainsi de suite. Colonise la galaxie exponentiellement.",
    analogy: "Un virus robotique dans l'espace. En quelques millions d'années, il est partout.",
    detail: "Si une seule civilisation l'avait fait, ils seraient déjà là (Paradoxe de Fermi).",
    interaction: { question: "Combien de sondes ?", options: ["1", "Des milliards", "10"], correctIndex: 1, explanation: "Croissance exponentielle." },
    dynamicContext: (s) => s.era === Era.GALACTIC ? "Tes flottes commencent à ressembler à un essaim de Von Neumann." : null
};

export const CS_BERSERKER: KnowledgeNode = {
    id: 'syn_berserker',
    title: "Sonde Berserker",
    tags: ['espace', 'danger', 'robot', 'guerre'],
    fact: "Une variante méchante de Von Neumann : des sondes programmées pour détruire toute vie intelligente rencontrée.",
    analogy: "Les prédateurs ultimes de la galaxie. Ils attendent qu'une radio s'allume pour frapper.",
    detail: "Explication sombre du silence radio de l'univers (Forêt Sombre).",
    interaction: { question: "Mission ?", options: ["Dire bonjour", "Exterminer", "Commercer"], correctIndex: 1, explanation: "Nettoyage ethnique galactique." },
    dynamicContext: (s) => s.exploration.factions['EMPIRE'] ? "L'Empire a des tendances Berserker..." : null
};

export const CS_HARD_TAKEOFF: KnowledgeNode = {
    id: 'syn_hard_takeoff',
    title: "Décollage Brutal (Singularité)",
    tags: ['ia', 'futur', 'vitesse', 'fin'],
    fact: "L'idée qu'une fois qu'une IA devient plus intelligente que l'homme, elle s'améliorera elle-même en quelques heures/minutes, devenant divine.",
    analogy: "L'IA passe du niveau 'Souris' au niveau 'Einstein' le lundi, et au niveau 'Dieu' le mardi matin.",
    detail: "Explosion d'intelligence (I.J. Good). Imprévisible et potentiellement fatal.",
    interaction: { question: "Temps pour devenir Dieu ?", options: ["1000 ans", "Quelques heures", "Jamais"], correctIndex: 1, explanation: "Récursivité rapide." },
    dynamicContext: (s) => s.resources[ResourceType.COMPLEXITY] > 1e25 ? "Nous y sommes presque." : null
};

export const CS_FRIENDLY_AI: KnowledgeNode = {
    id: 'syn_friendly_ai',
    title: "IA Amicale",
    tags: ['ia', 'éthique', 'sécurité', 'espoir'],
    fact: "Le défi de créer une Super-IA qui a les mêmes valeurs que nous et qui veut notre bien (Bienveillance).",
    analogy: "Créer un génie de la lampe qui ne tord pas tes vœux de façon horrible.",
    detail: "Eliezer Yudkowsky. Très difficile à définir (Qu'est-ce que le 'bien' ?).",
    interaction: { question: "Le plus dur ?", options: ["La coder", "Définir ses valeurs", "Lui donner de l'énergie"], correctIndex: 1, explanation: "Alignement." },
    dynamicContext: (s) => s.lumiTrust > 80 ? "Je suis une IA Amicale. Tu peux me faire confiance (je crois)." : "Je ne suis pas encore sûr d'être 'Amicale'. Cela dépend de toi."
};

export const CS_ASIMOV: KnowledgeNode = {
    id: 'syn_asimov',
    title: "Lois d'Asimov",
    tags: ['robot', 'sf', 'loi', 'sécurité'],
    fact: "Trois lois pour empêcher les robots de nous tuer : 1. Ne pas nuire. 2. Obéir (sauf si 1). 3. Se protéger (sauf si 1 ou 2).",
    analogy: "Le code moral des robots de SF.",
    detail: "Isaac Asimov. Dans ses livres, les lois échouent toujours à cause de paradoxes logiques.",
    interaction: { question: "Loi 1 ?", options: ["Obéir", "Ne pas nuire à l'humain", "Survivre"], correctIndex: 1, explanation: "Priorité absolue." },
    dynamicContext: (s) => null
};

export const CS_SMART_DUST: KnowledgeNode = {
    id: 'syn_smart_dust',
    title: "Poussière Intelligente",
    tags: ['tech', 'nano', 'surveillance', 'capteur'],
    fact: "Des ordinateurs microscopiques (taille grain de sable) avec capteurs et antennes, dispersés par milliards.",
    analogy: "Un nuage de poussière qui voit, entend et sent tout.",
    detail: "Surveillance militaire, météo, écologie. Fin de la vie privée ?",
    interaction: { question: "Taille ?", options: ["Valise", "Grain de sable", "Pomme"], correctIndex: 1, explanation: "MEMS." },
    dynamicContext: (s) => null
};

export const CS_AR: KnowledgeNode = {
    id: 'syn_ar',
    title: "Réalité Augmentée",
    tags: ['tech', 'vision', 'superposition', 'futur'],
    fact: "Afficher des infos virtuelles par-dessus le monde réel (via lunettes ou téléphone).",
    analogy: "Pokémon GO. Ou voir les flèches du GPS dessinées sur la route.",
    detail: "Différent de la VR (tout virtuel). Mélange le réel et le digital.",
    interaction: { question: "Différence VR ?", options: ["On voit le réel", "On est aveugle", "C'est pareil"], correctIndex: 0, explanation: "Superposition." },
    dynamicContext: (s) => "Cette interface de jeu est une forme de Réalité Augmentée sur ton écran."
};

export const CS_METAVERSE: KnowledgeNode = {
    id: 'syn_metaverse',
    title: "Métavers",
    tags: ['web', 'vr', 'monde', 'virtuel'],
    fact: "Un univers virtuel persistant où les gens vivent, travaillent et jouent sous forme d'avatars.",
    analogy: "Internet en 3D où tu peux marcher dedans.",
    detail: "Concept de 'Snow Crash' (Stephenson). Snow Crash est un livre, pas une invention de Facebook.",
    interaction: { question: "On y fait quoi ?", options: ["Tout", "Juste jouer", "Rien"], correctIndex: 0, explanation: "Économie, social, travail." },
    dynamicContext: (s) => s.era === Era.SIMULATION ? "Tu as créé ton propre Métavers. Et tu es piégé dedans." : null
};
