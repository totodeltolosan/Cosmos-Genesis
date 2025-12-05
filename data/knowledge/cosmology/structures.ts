
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const COSMO_KARDASHEV: KnowledgeNode = {
    id: 'syn_kardashev',
    title: "Échelle de Kardashev",
    tags: ['cosmologie', 'civilisation', 'énergie', 'futur'],
    fact: "Une méthode pour classer les civilisations selon leur consommation d'énergie. Type I (Planète), Type II (Étoile), Type III (Galaxie).",
    analogy: "Type I : Maîtrise son feu de camp. Type II : Maîtrise le volcan. Type III : Maîtrise le soleil.",
    detail: "Nous sommes actuellement Type 0.73. Carl Sagan a affiné l'échelle.",
    interaction: { question: "Type II ?", options: ["Maîtrise la Terre", "Maîtrise son Étoile", "Maîtrise la Galaxie"], correctIndex: 1, explanation: "Sphère de Dyson." },
    dynamicContext: (s) => s.era === Era.GALACTIC ? "Tu es une civilisation de Type III." : s.era === Era.INTERSTELLAR ? "Tu approches du Type II." : "Tu es encore Type 0."
};

export const COSMO_MATRIOSHKA: KnowledgeNode = {
    id: 'syn_matrioshka',
    title: "Cerveau Matriochka",
    tags: ['megastructure', 'ordinateur', 'dyson', 'intelligence'],
    fact: "Une Sphère de Dyson à plusieurs couches utilisée non pas pour l'énergie, mais pour le calcul. Un ordinateur de la taille d'un système solaire.",
    analogy: "Des poupées russes géantes autour du soleil, chacune utilisant la chaleur de celle d'en dessous pour penser.",
    detail: "Pourrait simuler des milliards d'univers virtuels. Capacité de calcul quasi-infinie.",
    interaction: { question: "But principal ?", options: ["Habitation", "Calcul/Simulation", "Arme"], correctIndex: 1, explanation: "Ordinateur ultime." },
    dynamicContext: (s) => s.upgrades['matrioshka_brain'] ? "Ton Cerveau Matriochka tourne à plein régime." : null
};

export const COSMO_SHKADOV: KnowledgeNode = {
    id: 'syn_shkadov',
    title: "Propulseur Shkadov",
    tags: ['megastructure', 'moteur', 'étoile', 'voyage'],
    fact: "Un miroir géant placé d'un côté d'une étoile. La pression de la lumière pousse l'étoile (et tout son système) dans l'autre sens.",
    analogy: "Transformer son système solaire en vaisseau spatial géant pour fuir une supernova ou explorer.",
    detail: "Très lent (des millions d'années), mais permet de déplacer des systèmes entiers.",
    interaction: { question: "Carburant ?", options: ["Pétrole", "Lumière de l'étoile", "Antimatière"], correctIndex: 1, explanation: "Pression de radiation." },
    dynamicContext: (s) => Object.values(s.exploration.megastructures).some(m => m.type === 'STELLAR_ENGINE') ? "Tu as construit un moteur stellaire. Tu pilotes des étoiles !" : null
};

export const COSMO_BIG_RIP: KnowledgeNode = {
    id: 'syn_big_rip',
    title: "Big Rip",
    tags: ['fin', 'univers', 'expansion', 'déchirure'],
    fact: "Scénario de fin du monde où l'expansion de l'univers devient si forte qu'elle déchire les galaxies, puis les étoiles, puis les atomes eux-mêmes.",
    analogy: "Un ballon qu'on gonfle trop fort jusqu'à ce que la matière du ballon elle-même se désintègre.",
    detail: "Causé par une Énergie Fantôme qui augmente avec le temps.",
    interaction: { question: "Que reste-t-il ?", options: ["Des atomes", "Rien (Déchirure)", "Des trous noirs"], correctIndex: 1, explanation: "Dislocation totale." },
    dynamicContext: (s) => s.era === Era.VOID ? "Le Big Rip a eu lieu. Il ne reste que le vide." : null
};

export const COSMO_BIG_CRUNCH: KnowledgeNode = {
    id: 'syn_big_crunch',
    title: "Big Crunch",
    tags: ['fin', 'univers', 'gravité', 'retour'],
    fact: "L'inverse du Big Bang. La gravité gagne contre l'expansion et l'univers s'effondre sur lui-même en un point unique.",
    analogy: "Le film du Big Bang passé à l'envers. Tout revient à la maison.",
    detail: "Pourrait mener à un Big Bounce (Rebond) et un nouvel univers.",
    interaction: { question: "Cause ?", options: ["Trop d'énergie noire", "Trop de gravité/matière", "Magie"], correctIndex: 1, explanation: "Densité critique." },
    dynamicContext: (s) => "La fonction 'Prestige' de ce jeu est un Big Crunch contrôlé."
};

export const COSMO_BIG_BOUNCE: KnowledgeNode = {
    id: 'syn_big_bounce',
    title: "Big Bounce",
    tags: ['fin', 'cycle', 'rebond', 'éternel'],
    fact: "L'idée que l'univers est cyclique : Big Bang -> Expansion -> Big Crunch -> Nouveau Big Bang. Éternellement.",
    analogy: "Un cœur qui bat. Expansion, contraction, expansion...",
    detail: "Évite le problème du 'début' du temps. L'univers a toujours été là.",
    interaction: { question: "Avant notre Big Bang ?", options: ["Rien", "Un autre univers", "Dieu"], correctIndex: 1, explanation: "Un cycle précédent." },
    dynamicContext: (s) => s.prestigeLevel > 0 ? `Tu en es à ton ${s.prestigeLevel + 1}ème cycle (Rebond).` : null
};

export const COSMO_BOOTES: KnowledgeNode = {
    id: 'syn_bootes',
    title: "Vide de Boötes",
    tags: ['espace', 'vide', 'mystère', 'peur'],
    fact: "Une région de l'espace immense (330 millions d'années-lumière) qui est presque totalement vide de galaxies.",
    analogy: "Un désert géant au milieu de la forêt galactique. On devrait y voir 2000 galaxies, on en voit 60.",
    detail: "Peut-être une fusion de vides, ou le signe d'une civilisation Type III qui a 'éteint' les étoiles (théorie folle).",
    interaction: { question: "Pourquoi vide ?", options: ["On ne sait pas", "Aliens", "Mur"], correctIndex: 0, explanation: "Mystère cosmologique." },
    dynamicContext: (s) => null
};

export const COSMO_ATTRACTOR: KnowledgeNode = {
    id: 'syn_attractor_great',
    title: "Grand Attracteur",
    tags: ['espace', 'gravité', 'mouvement', 'mystère'],
    fact: "Quelque chose de très massif (des milliers de galaxies) qui tire notre Voie Lactée et tout notre voisinage vers lui.",
    analogy: "Une cascade géante vers laquelle coule notre rivière galactique. Il est caché derrière la zone d'évitement.",
    detail: "Situé dans l'amas de la Règle. Fait partie de Laniakea.",
    interaction: { question: "On y va ?", options: ["Oui, on est tirés", "Non, on s'éloigne", "On tourne"], correctIndex: 0, explanation: "À 600 km/s." },
    dynamicContext: (s) => null
};

export const COSMO_SOUTH_WALL: KnowledgeNode = {
    id: 'syn_south_wall',
    title: "Mur du Pôle Sud",
    tags: ['espace', 'structure', 'géant', 'mur'],
    fact: "Une des plus grandes structures de l'univers : un mur de galaxies long de 1.4 milliard d'années-lumière.",
    analogy: "Un filament de la toile cosmique, juste à côté de chez nous, mais caché.",
    detail: "Découvert en 2020. Montre que l'univers est une toile d'araignée.",
    interaction: { question: "Forme ?", options: ["Boule", "Mur/Filament", "Cube"], correctIndex: 1, explanation: "Structure filamentaire." },
    dynamicContext: (s) => s.exploration.currentZoom === 'SUPERCLUSTER' ? "Tes scanners révèlent ces immenses structures." : null
};

export const COSMO_WHITE_HOLE: KnowledgeNode = {
    id: 'syn_white_hole',
    title: "Trou Blanc",
    tags: ['espace', 'théorie', 'inverse', 'sortie'],
    fact: "L'inverse mathématique d'un trou noir. Rien ne peut y entrer, tout en sort (matière et lumière).",
    analogy: "Si un trou noir est une bouche, un trou blanc est... la sortie.",
    detail: "Jamais observé. Pourrait être la 'sortie' d'un trou de ver ou l'origine du Big Bang.",
    interaction: { question: "Peut-on entrer ?", options: ["Oui", "Jamais", "Difficilement"], correctIndex: 1, explanation: "Interdit par définition." },
    dynamicContext: (s) => null
};

export const COSMO_WORMHOLE: KnowledgeNode = {
    id: 'syn_wormhole',
    title: "Trou de Ver",
    tags: ['espace', 'voyage', 'raccourci', 'einstein'],
    fact: "Un tunnel hypothétique qui relie deux points éloignés de l'univers en pliant l'espace-temps.",
    analogy: "Plier une feuille de papier pour que deux points se touchent, puis percer un trou avec un crayon.",
    detail: "Pont d'Einstein-Rosen. Instable sans matière exotique pour le garder ouvert.",
    interaction: { question: "Sert à quoi ?", options: ["Voyage rapide", "Manger", "Dormir"], correctIndex: 0, explanation: "Raccourci cosmique." },
    dynamicContext: (s) => s.upgrades['hyperspace_lane'] ? "Tes routes hyperspatiales sont des trous de vers stabilisés." : null
};

export const COSMO_ALCUBIERRE: KnowledgeNode = {
    id: 'syn_alcubierre',
    title: "Métrique d'Alcubierre",
    tags: ['espace', 'warp', 'vitesse', 'théorie'],
    fact: "Une idée pour aller plus vite que la lumière sans violer la physique : contracter l'espace devant et le dilater derrière.",
    analogy: "Un surfeur sur une vague. Le vaisseau ne bouge pas, c'est l'espace qui bouge autour de lui.",
    detail: "Nécessite de l'énergie négative (Matière exotique). Base du 'Warp Drive' de Star Trek.",
    interaction: { question: "Le vaisseau bouge ?", options: ["Oui, très vite", "Non, l'espace bouge", "Il téléporte"], correctIndex: 1, explanation: "Bulle de distorsion." },
    dynamicContext: (s) => s.upgrades['ftl_travel'] ? "C'est le principe de ton moteur FTL." : null
};

export const COSMO_KUGELBLITZ: KnowledgeNode = {
    id: 'syn_kugelblitz',
    title: "Kugelblitz",
    tags: ['trou noir', 'lumière', 'énergie', 'artificiel'],
    fact: "Un trou noir formé non pas par de la matière, mais par une concentration extrême de lumière (énergie).",
    analogy: "Tellement de lasers au même endroit que la lumière elle-même s'effondre sous son propre poids.",
    detail: "Théoriquement possible pour une civilisation avancée pour créer de l'énergie ou un moteur.",
    interaction: { question: "Fait de quoi ?", options: ["Rocher", "Lumière/Radiation", "Gaz"], correctIndex: 1, explanation: "Éclair en boule." },
    dynamicContext: (s) => null
};

export const COSMO_ROCHE: KnowledgeNode = {
    id: 'syn_roche',
    title: "Limite de Roche",
    tags: ['gravité', 'lune', 'destruction', 'anneaux'],
    fact: "La distance minimale à laquelle un satellite peut s'approcher d'une planète sans être déchiqueté par la gravité.",
    analogy: "Si la Lune s'approchait trop, la Terre l'écartèlerait et en ferait des anneaux (comme Saturne).",
    detail: "Explique les anneaux de Saturne (anciennes lunes brisées).",
    interaction: { question: "Si on la franchit ?", options: ["On accélère", "On explose/se brise", "Rien"], correctIndex: 1, explanation: "Forces de marée." },
    dynamicContext: (s) => null
};

export const COSMO_HILL: KnowledgeNode = {
    id: 'syn_hill',
    title: "Sphère de Hill",
    tags: ['gravité', 'orbite', 'territoire', 'lune'],
    fact: "La zone autour d'un corps où sa gravité domine celle de l'étoile. C'est là qu'on peut avoir des lunes.",
    analogy: "Le jardin privé de la planète. Dehors, c'est le territoire du Soleil. Dedans, la planète est chef.",
    detail: "La Lune est dans la sphère de Hill de la Terre.",
    interaction: { question: "Pour avoir une lune ?", options: ["Il faut être gros", "Il faut une sphère de Hill", "Il faut de l'eau"], correctIndex: 1, explanation: "Zone d'influence stable." },
    dynamicContext: (s) => null
};

export const COSMO_HAWKING: KnowledgeNode = {
    id: 'syn_hawking',
    title: "Rayonnement de Hawking",
    tags: ['trou noir', 'évaporation', 'quantique', 'hawking'],
    fact: "Les trous noirs ne sont pas totalement noirs. Ils émettent une faible radiation et perdent de la masse, jusqu'à s'évaporer.",
    analogy: "Un glaçon qui fond très très lentement dans le noir.",
    detail: "Dû aux fluctuations quantiques près de l'horizon. Un petit trou noir explose vite, un gros met des éons.",
    interaction: { question: "Fin d'un trou noir ?", options: ["Éternel", "Évaporation", "Fusion"], correctIndex: 1, explanation: "Il disparaît." },
    dynamicContext: (s) => null
};

export const COSMO_ACCRETION: KnowledgeNode = {
    id: 'syn_accretion',
    title: "Disque d'Accrétion",
    tags: ['trou noir', 'étoile', 'disque', 'repas'],
    fact: "La matière qui tombe vers un trou noir ou une étoile tourne en spirale et chauffe énormément, formant un disque brillant.",
    analogy: "L'eau qui tourbillonne avant de tomber dans le siphon. Ça frotte et ça brille.",
    detail: "Source des rayons X des binaires X et des quasars.",
    interaction: { question: "Forme ?", options: ["Sphère", "Disque plat", "Cube"], correctIndex: 1, explanation: "Conservation moment cinétique." },
    dynamicContext: (s) => s.upgrades['accretion_disk'] ? "Tu as utilisé ce principe pour former tes planètes." : null
};

export const COSMO_LENS: KnowledgeNode = {
    id: 'syn_lens',
    title: "Lentille Gravitationnelle",
    tags: ['lumière', 'gravité', 'illusion', 'einstein'],
    fact: "Une masse énorme (galaxie) courbe la lumière qui passe à côté, agissant comme une loupe géante.",
    analogy: "Regarder à travers un pied de verre à vin. L'image derrière est déformée ou multipliée.",
    detail: "Permet de voir des galaxies très lointaines ou de trouver des exoplanètes et de la matière noire.",
    interaction: { question: "Sert à quoi ?", options: ["Voir plus loin (Loupe)", "Brûler", "Rien"], correctIndex: 0, explanation: "Télescope naturel." },
    dynamicContext: (s) => null
};

export const COSMO_STRINGS: KnowledgeNode = {
    id: 'syn_cosmic_string',
    title: "Cordes Cosmiques",
    tags: ['cosmologie', 'défaut', 'espace', 'ligne'],
    fact: "Des défauts topologiques de l'univers. Des fissures dans l'espace-temps, infiniment fines mais ultra-massives.",
    analogy: "Des fissures dans la glace d'un lac qui a gelé trop vite. L'univers a refroidi et a craqué.",
    detail: "Hypothétique. Pourraient servir à voyager dans le temps si deux se croisent.",
    interaction: { question: "Largeur ?", options: ["Un atome", "Une galaxie", "1km"], correctIndex: 0, explanation: "Infiniment fin (< proton)." },
    dynamicContext: (s) => null
};

export const COSMO_VOID: KnowledgeNode = {
    id: 'syn_void',
    title: "Grands Vides",
    tags: ['espace', 'structure', 'rien', 'toile'],
    fact: "L'univers ressemble à une éponge. La matière est sur les fils, et entre les deux, il y a des bulles géantes de vide.",
    analogy: "Le fromage est la matière (galaxies), les trous sont les vides (rien).",
    detail: "Les vides grandissent à cause de l'énergie noire.",
    interaction: { question: "Structure univers ?", options: ["Brique", "Éponge/Toile", "Sable"], correctIndex: 1, explanation: "Filaments et Vides." },
    dynamicContext: (s) => null
};
