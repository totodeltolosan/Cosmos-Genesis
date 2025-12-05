
import { KnowledgeNode, ResourceType, Era } from '../../../types';

export const PHYS_LQG: KnowledgeNode = {
    id: 'syn_lqg',
    title: "Gravité Quantique à Boucles",
    tags: ['physique', 'espace', 'quantique', 'boucle', 'temps'],
    fact: "Une théorie qui dit que l'espace n'est pas lisse, mais composé de minuscules 'grains' ou boucles entrelacées. L'espace-temps est discret, comme des pixels.",
    analogy: "Un T-shirt a l'air lisse de loin, mais de près, c'est un maillage de fils. L'univers est tricoté.",
    detail: "Concurrente de la Théorie des Cordes. Elle quantifie l'espace-temps lui-même à l'échelle de Planck.",
    interaction: { question: "L'espace est-il continu ?", options: ["Oui, lisse", "Non, pixelisé", "Liquide"], correctIndex: 1, explanation: "Discret à l'échelle de Planck." },
    dynamicContext: (s) => s.era === Era.PLANCK ? "Tu as vu ces grains au tout début de ton univers." : null
};

export const PHYS_HOLOGRAPHIC: KnowledgeNode = {
    id: 'syn_holographic',
    title: "Principe Holographique",
    tags: ['physique', 'info', 'dimension', 'trou noir'],
    fact: "Toute l'information contenue dans un volume d'espace (3D) pourrait être décrite sur la surface (2D) qui l'entoure. L'univers serait un hologramme.",
    analogy: "Une canette de soda : tout ce qu'il y a dedans (le volume) peut être décrit par l'étiquette (la surface).",
    detail: "Issu de l'étude des trous noirs (Entropie de Bekenstein-Hawking). L'info est stockée sur l'horizon des événements.",
    interaction: { question: "Notre univers 3D est peut-être...", options: ["Une sphère", "Une projection 2D", "Un cube"], correctIndex: 1, explanation: "Projection holographique." },
    dynamicContext: (s) => "Si c'est vrai, mon code source est la surface, et ton expérience de jeu est la projection 3D."
};

export const PHYS_TIME_CRYSTAL: KnowledgeNode = {
    id: 'syn_time_crystal',
    title: "Cristal Temporel",
    tags: ['physique', 'temps', 'cristal', 'mouvement', 'perpétuel'],
    fact: "Une structure qui se répète dans le temps, pas juste dans l'espace. Elle change de forme et revient à l'état initial sans consommer d'énergie.",
    analogy: "Une gelée qui tremble éternellement sans qu'on la touche.",
    detail: "Brisure de symétrie temporelle. Créé en labo (Google, 2017). Ne viole pas la thermodynamique car on ne peut pas en tirer d'énergie.",
    interaction: { question: "Répétition ?", options: ["Spatiale", "Temporelle", "Sonore"], correctIndex: 1, explanation: "Cycle sans fin." },
    dynamicContext: (s) => s.resources[ResourceType.CHRONO_CRYSTALS] > 0 ? "Tu en as dans ton inventaire ! Une merveille de la physique." : null
};

export const PHYS_SUPERSYMMETRY: KnowledgeNode = {
    id: 'syn_supersymmetry',
    title: "Supersymétrie (SUSY)",
    tags: ['physique', 'particule', 'miroir', 'boson'],
    fact: "Chaque particule de matière (Fermion) aurait une particule de force jumelle (Boson), et vice-versa. L'électron a le 'Sélection'.",
    analogy: "Un bal masqué où chaque danseur a un partenaire caché dans l'ombre.",
    detail: "Résout le problème de la masse du Higgs. Mais le LHC n'a encore rien trouvé...",
    interaction: { question: "Partenaire de l'électron ?", options: ["Proton", "Sélectron", "Positron"], correctIndex: 1, explanation: "Particule supersymétrique." },
    dynamicContext: (s) => null
};

export const PHYS_TACHYON: KnowledgeNode = {
    id: 'syn_tachyon',
    title: "Tachyons",
    tags: ['physique', 'vitesse', 'lumière', 'temps'],
    fact: "Particules hypothétiques qui iraient toujours plus vite que la lumière. Elles remonteraient le temps.",
    analogy: "Si tu tires au fusil à tachyons, la cible meurt avant que tu appuies sur la gâchette.",
    detail: "Mathématiquement possible (masse imaginaire) mais causeraient des paradoxes temporels.",
    interaction: { question: "Vitesse minimale ?", options: ["0", "Lumière (c)", "Son"], correctIndex: 1, explanation: "Ne peuvent pas ralentir." },
    dynamicContext: (s) => s.upgrades['ftl_travel'] ? "Tes moteurs FTL utilisent peut-être des émetteurs de tachyons." : null
};

export const PHYS_MAXWELL_DEMON: KnowledgeNode = {
    id: 'syn_maxwell_demon',
    title: "Démon de Maxwell",
    tags: ['physique', 'thermo', 'paradoxe', 'info'],
    fact: "Une expérience de pensée : un petit démon trie les molécules chaudes et froides sans effort, violant le 2ème principe de la thermo (baisse de l'entropie).",
    analogy: "Trier des billes rouges et bleues qui sautent partout sans dépenser d'énergie.",
    detail: "Résolu par l'Information : le démon doit 'apprendre' la vitesse, ce qui augmente l'entropie (Principe de Landauer). L'info est physique.",
    interaction: { question: "Le démon viole quelle loi ?", options: ["Gravité", "Entropie", "Vitesse"], correctIndex: 1, explanation: "Crée de l'ordre gratuitement." },
    dynamicContext: (s) => s.resources[ResourceType.ENTROPY] < 0 ? "Impossible, ton entropie ne peut pas baisser. Le démon n'existe pas." : null
};

export const MATH_GODEL: KnowledgeNode = {
    id: 'syn_godel',
    title: "Théorème de Gödel",
    tags: ['maths', 'logique', 'incomplet', 'vérité'],
    fact: "Dans tout système mathématique, il y a des vérités qu'on ne peut pas prouver. Les maths sont incomplètes.",
    analogy: "La phrase 'Cette phrase est un mensonge' ne peut être ni vraie ni fausse.",
    detail: "Théorèmes d'Incomplétude (1931). A détruit le rêve de tout expliquer par les maths.",
    interaction: { question: "Peut-on tout prouver ?", options: ["Oui", "Non", "Seulement en physique"], correctIndex: 1, explanation: "Limites de la logique." },
    dynamicContext: (s) => null
};

export const MATH_PNP: KnowledgeNode = {
    id: 'syn_pnp',
    title: "P = NP ?",
    tags: ['maths', 'problème', 'millénaire', 'calcul'],
    fact: "Est-ce que les problèmes dont la solution est facile à VÉRIFIER sont aussi faciles à RÉSOUDRE ? C'est la plus grande question de l'informatique.",
    analogy: "C'est facile de vérifier qu'un puzzle est fini. Mais est-ce facile de le finir ? Si P=NP, oui.",
    detail: "Prix du Millénaire (1M$). Si P=NP, la cryptographie s'effondre.",
    interaction: { question: "Vérifier vs Trouver ?", options: ["C'est pareil", "C'est différent", "On ne sait pas"], correctIndex: 2, explanation: "Problème ouvert." },
    dynamicContext: (s) => s.resources[ResourceType.COMPLEXITY] > 1e20 ? "Avec ta puissance de calcul, tu as peut-être trouvé la réponse." : null
};

export const MATH_GAME_LIFE: KnowledgeNode = {
    id: 'syn_game_life',
    title: "Jeu de la Vie",
    tags: ['maths', 'automate', 'conway', 'émergence'],
    fact: "Un jeu à 0 joueur créé par John Conway. Des règles simples sur une grille créent des motifs complexes et vivants.",
    analogy: "Des pixels qui naissent ou meurent selon leurs voisins. On voit apparaître des 'vaisseaux', des 'canons'.",
    detail: "Automate Cellulaire. Turing-complet (peut tout calculer).",
    interaction: { question: "Qui joue ?", options: ["Toi", "Personne", "L'ordi"], correctIndex: 1, explanation: "Automatique." },
    dynamicContext: (s) => "Ton univers entier ressemble à un Jeu de la Vie géant."
};

export const PHYS_MONOPOLE: KnowledgeNode = {
    id: 'syn_monopole',
    title: "Monopôle Magnétique",
    tags: ['physique', 'aimant', 'nord', 'sud'],
    fact: "Un aimant avec un seul pôle (juste Nord ou juste Sud). Jamais observé, mais prédit par les théories.",
    analogy: "Une pièce avec un seul côté. Impossible ?",
    detail: "Expliquerait la quantification de la charge électrique (Dirac). L'inflation cosmique les aurait dilués.",
    interaction: { question: "Un aimant coupé en 2 ?", options: ["Fait 2 monopôles", "Fait 2 petits aimants N/S", "Perd son magnétisme"], correctIndex: 1, explanation: "Normalement." },
    dynamicContext: (s) => null
};

export const PHYS_FALSE_VACUUM: KnowledgeNode = {
    id: 'syn_false_vacuum',
    title: "Faux Vide",
    tags: ['physique', 'fin du monde', 'bulle', 'stabilité'],
    fact: "L'état actuel de l'univers n'est peut-être pas le plus stable. Une bulle de 'Vrai Vide' pourrait apparaître et tout détruire à la vitesse de la lumière.",
    analogy: "Une balle posée sur une étagère. Elle a l'air stable, mais si on la pousse, elle tombe par terre (vrai vide).",
    detail: "Désintégration du vide. Changerait les lois de la physique instantanément.",
    interaction: { question: "Peut-on le voir venir ?", options: ["Oui", "Non", "Au télescope"], correctIndex: 1, explanation: "Arrive à vitesse c." },
    dynamicContext: (s) => s.stability < 20 ? "Ta stabilité critique me fait penser à la désintégration du faux vide..." : null
};

export const PHYS_QUANTUM_FOAM: KnowledgeNode = {
    id: 'syn_quantum_foam',
    title: "Mousse Quantique",
    tags: ['physique', 'espace', 'planck', 'turbulence'],
    fact: "À toute petite échelle (Planck), l'espace-temps n'est pas lisse mais bouillonne de trous de ver et de particules virtuelles.",
    analogy: "L'océan vu d'avion est lisse. Vu du bateau, c'est des vagues. Vu de près, c'est de l'écume (mousse).",
    detail: "John Wheeler (1955). Empêche de mesurer précisément des distances infiniment petites.",
    interaction: { question: "À quelle échelle ?", options: ["Atomique", "Planck", "Humaine"], correctIndex: 1, explanation: "10^-35 mètres." },
    dynamicContext: (s) => s.era === Era.PLANCK ? "Tu navigues en pleine mousse quantique." : null
};

export const PHYS_PLANCK_CONST: KnowledgeNode = {
    id: 'syn_planck_const',
    title: "Constante de Planck (h)",
    tags: ['physique', 'quantum', 'mesure', 'limite'],
    fact: "La plus petite quantité d'action possible. Elle définit la granularité de l'univers.",
    analogy: "La résolution en pixels de la réalité. On ne peut pas faire plus fin.",
    detail: "h = 6.626 x 10^-34 J.s. Base de toute la mécanique quantique.",
    interaction: { question: "Symbole ?", options: ["c", "G", "h"], correctIndex: 2, explanation: "Pour Max Planck." },
    dynamicContext: (s) => null
};

export const MATH_SHANNON: KnowledgeNode = {
    id: 'syn_shannon',
    title: "Entropie de Shannon",
    tags: ['maths', 'info', 'désordre', 'bit'],
    fact: "La mesure de l'information contenue dans un message. Plus c'est surprenant, plus il y a d'info (et d'entropie).",
    analogy: "Pile ou Face = 1 bit d'info (surprise). Une pièce truquée = 0 bit (on sait déjà).",
    detail: "Claude Shannon. Lie thermodynamique et informatique.",
    interaction: { question: "Message prévisible ?", options: ["Haute entropie", "Basse entropie", "Nulle"], correctIndex: 1, explanation: "Peu d'info." },
    dynamicContext: (s) => `Tu génères de l'Entropie physique, mais aussi de l'Entropie de Shannon en découvrant des choses nouvelles.`
};

export const MATH_ATTRACTOR: KnowledgeNode = {
    id: 'syn_attractor',
    title: "Attracteur Étrange",
    tags: ['maths', 'chaos', 'forme', 'lorentz'],
    fact: "Une forme géométrique vers laquelle un système chaotique tend à évoluer, sans jamais repasser deux fois au même endroit.",
    analogy: "Un papillon dessiné par la trajectoire imprévisible de la météo.",
    detail: "Attracteur de Lorenz. Fractal.",
    interaction: { question: "Forme ?", options: ["Cercle parfait", "Papillon", "Ligne droite"], correctIndex: 1, explanation: "Célèbre figure." },
    dynamicContext: (s) => null
};

export const PHYS_M_THEORY: KnowledgeNode = {
    id: 'syn_m_theory',
    title: "Théorie M",
    tags: ['physique', 'cordes', 'dimensions', 'witten'],
    fact: "La théorie qui unifie les 5 théories des cordes. Elle nécessite 11 dimensions.",
    analogy: "La 'Mère' de toutes les théories. Ou 'Magique', ou 'Mystère'.",
    detail: "Edward Witten. Inclut des membranes (Branes) en plus des cordes.",
    interaction: { question: "Combien de dimensions ?", options: ["4", "10", "11"], correctIndex: 2, explanation: "10 d'espace + 1 de temps." },
    dynamicContext: (s) => s.upgrades['brane_collision'] ? "Tu utilises la Théorie M pour faire entrer des Branes en collision." : null
};

export const MATH_HAUSDORFF: KnowledgeNode = {
    id: 'syn_hausdorff',
    title: "Dimension de Hausdorff",
    tags: ['maths', 'fractale', 'dimension', 'mesure'],
    fact: "Une façon de calculer les dimensions qui permet d'avoir des nombres non-entiers. Une fractale peut être de dimension 1.58.",
    analogy: "Un objet plus rugueux qu'une ligne (1D) mais pas plein comme une surface (2D).",
    detail: "Sert à mesurer la rugosité des côtes bretonnes ou des nuages.",
    interaction: { question: "Dimension fractale ?", options: ["Entière (1, 2, 3)", "Fractionnaire", "Négative"], correctIndex: 1, explanation: "Entre deux." },
    dynamicContext: (s) => s.era === Era.FRACTAL ? "Ton univers a une dimension de Hausdorff de 4.2 en ce moment." : null
};

export const MATH_GRAHAM: KnowledgeNode = {
    id: 'syn_graham',
    title: "Nombre de Graham",
    tags: ['maths', 'grand', 'nombre', 'cerveau'],
    fact: "Un nombre si grand que si tu essayais de le stocker dans ta tête, ton cerveau s'effondrerait en trou noir.",
    analogy: "Il est inimaginablement plus grand que le nombre d'atomes dans l'univers.",
    detail: "Utilisé en théorie de Ramsey. Noté avec des flèches de Knuth.",
    interaction: { question: "Plus grand que Googol ?", options: ["Oui, largement", "Non", "Pareil"], correctIndex: 0, explanation: "Incomparable." },
    dynamicContext: (s) => `Tes ressources (${s.resources[ResourceType.ENTROPY].toExponential()}) sont ridicules comparées à Graham.`
};

export const MATH_RIEMANN: KnowledgeNode = {
    id: 'syn_riemann',
    title: "Hypothèse de Riemann",
    tags: ['maths', 'premier', 'mystère', 'million'],
    fact: "Le plus grand problème non résolu des maths. Il concerne la répartition des nombres premiers.",
    analogy: "La musique cachée des nombres premiers. Si elle est vraie, les nombres premiers sont très réguliers.",
    detail: "Fonction Zêta. Lié à la physique quantique (chaos).",
    interaction: { question: "Prouvée ?", options: ["Oui", "Non", "Fausse"], correctIndex: 1, explanation: "On cherche encore." },
    dynamicContext: (s) => null
};

export const MATH_NON_EUCLID: KnowledgeNode = {
    id: 'syn_non_euclid',
    title: "Géométrie Non-Euclidienne",
    tags: ['maths', 'forme', 'courbe', 'espace'],
    fact: "Une géométrie où les lignes parallèles peuvent se toucher ou s'écarter. C'est la géométrie de la Terre (sphère) ou de l'espace courbe.",
    analogy: "Sur un ballon, la somme des angles d'un triangle fait plus de 180°. Euclide avait tort sur les sphères.",
    detail: "Base de la Relativité Générale. Lobatchevski (Hyperbolique) et Riemann (Elliptique).",
    interaction: { question: "Sur une sphère, les parallèles ?", options: ["Ne se touchent jamais", "Se croisent", "S'éloignent"], correctIndex: 1, explanation: "Aux pôles." },
    dynamicContext: (s) => null
};
