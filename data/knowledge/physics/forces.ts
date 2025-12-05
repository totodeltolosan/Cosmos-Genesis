
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const PHYS_INERTIA: KnowledgeNode = {
    id: 'syn_inertia',
    title: "Inertie",
    tags: ['physique', 'mouvement', 'masse', 'newton'],
    fact: "Un objet ne change pas de mouvement tout seul. S'il est immobile, il le reste. S'il bouge, il continue tout droit à la même vitesse.",
    analogy: "C'est pour ça que tu es projeté en avant quand la voiture freine brusquement. Ton corps veut garder sa vitesse.",
    detail: "1ère loi de Newton. La masse est une mesure de l'inertie (résistance au changement).",
    interaction: { question: "Dans l'espace, si je lance une balle ?", options: ["Elle s'arrête", "Elle continue pour toujours", "Elle tourne"], correctIndex: 1, explanation: "Pas de frottement." },
    dynamicContext: (s) => null
};

export const PHYS_DOPPLER: KnowledgeNode = {
    id: 'syn_doppler',
    title: "Effet Doppler",
    tags: ['physique', 'son', 'lumière', 'vitesse'],
    fact: "Le bruit change quand une chose s'approche ou s'éloigne. VROOOOmmm.",
    analogy: "L'ambulance : Aigu quand elle arrive (ondes écrasées), Grave quand elle part (ondes étirées).",
    detail: "Marche aussi pour la lumière ! Les galaxies qui s'éloignent sont 'Rouges' (Redshift). Preuve de l'expansion de l'univers.",
    interaction: { question: "Galaxie qui s'approche ?", options: ["Devient rouge", "Devient bleue", "Devient verte"], correctIndex: 1, explanation: "Blueshift." },
    dynamicContext: (s) => s.era >= Era.INFLATION ? "L'expansion de ton univers étire la lumière de tes étoiles vers le rouge." : null
};

export const PHYS_FISSION: KnowledgeNode = {
    id: 'syn_fission',
    title: "Fission Nucléaire",
    tags: ['énergie', 'atome', 'nucléaire', 'bombe'],
    fact: "Casser un gros atome (Uranium) en deux pour libérer de l'énergie. C'est l'inverse de la fusion.",
    analogy: "Casser un élastique très tendu : CLAC ! L'énergie stockée est libérée.",
    detail: "Utilisé dans nos centrales nucléaires actuelles. Produit des déchets radioactifs.",
    interaction: { question: "Fusion ou Fission ?", options: ["Soleil = Fission", "Centrale = Fission", "Les deux pareils"], correctIndex: 1, explanation: "On casse l'atome." },
    dynamicContext: (s) => null
};

export const PHYS_FUSION: KnowledgeNode = {
    id: 'syn_fusion',
    title: "Fusion Nucléaire",
    tags: ['énergie', 'soleil', 'atome', 'futur'],
    fact: "Coller deux petits atomes (Hydrogène) pour en faire un plus gros. C'est le secret du Soleil.",
    analogy: "Marier deux atomes de force. Ils perdent un peu de poids, et cette perte devient une énergie colossale.",
    detail: "Ne produit pas de déchets radioactifs longue durée. C'est le graal de l'énergie propre (Projet ITER).",
    interaction: { question: "Carburant ?", options: ["Uranium", "Charbon", "Hydrogène"], correctIndex: 2, explanation: "Isotopes (Deutérium)." },
    dynamicContext: (s) => s.upgrades['fusion_drive'] ? "Tu maîtrises la fusion. Tes vaisseaux filent vers l'infini." : "Tes étoiles le font naturellement."
};

export const PHYS_REFRACTION: KnowledgeNode = {
    id: 'syn_refraction',
    title: "Réfraction",
    tags: ['lumière', 'optique', 'arc-en-ciel', 'eau'],
    fact: "La lumière change de direction quand elle passe de l'air à l'eau (ou au verre).",
    analogy: "Le bâton qui a l'air cassé quand tu le mets dans l'eau. C'est parce que la lumière ralentit dans l'eau.",
    detail: "C'est ce qui crée les arcs-en-ciel (gouttes d'eau) et fait marcher les lunettes et télescopes.",
    interaction: { question: "Arc-en-ciel ?", options: ["Magie", "Réfraction/Dispersion", "Peinture"], correctIndex: 1, explanation: "Prisme naturel." },
    dynamicContext: (s) => null
};

export const PHYS_RESONANCE: KnowledgeNode = {
    id: 'syn_resonance',
    title: "Résonance",
    tags: ['physique', 'vibration', 'son', 'pont'],
    fact: "Tout objet a une fréquence préférée. Si tu le pousses à ce rythme, il oscille de plus en plus fort, jusqu'à casser.",
    analogy: "Pousser une balançoire. Si tu pousses au bon moment, ça monte très haut avec peu d'effort.",
    detail: "Un verre peut exploser avec la bonne note de chant. Le pont de Tacoma s'est effondré à cause du vent qui le faisait résonner.",
    interaction: { question: "Danger ?", options: ["Ça s'arrête", "Ça casse", "Ça refroidit"], correctIndex: 1, explanation: "Accumulation d'énergie." },
    dynamicContext: (s) => null
};

export const PHYS_HALF_LIFE: KnowledgeNode = {
    id: 'syn_half_life',
    title: "Demi-Vie",
    tags: ['physique', 'temps', 'radioactivité', 'atome'],
    fact: "Le temps qu'il faut pour que la moitié des atomes radioactifs disparaissent.",
    analogy: "Si tu as 100 bonbons et qu'à chaque heure tu en manges la moitié. 1h: 50 restants. 2h: 25 restants...",
    detail: "Permet de dater les objets anciens (Carbone 14). C'est une loi probabiliste.",
    interaction: { question: "Après 2 demi-vies ?", options: ["Reste 0%", "Reste 50%", "Reste 25%"], correctIndex: 2, explanation: "La moitié de la moitié." },
    dynamicContext: (s) => null
};

export const PHYS_CONVECTION: KnowledgeNode = {
    id: 'syn_convection',
    title: "Convection",
    tags: ['chaleur', 'mouvement', 'air', 'eau'],
    fact: "Le chaud monte, le froid descend. Cela crée des boucles de mouvement dans les fluides.",
    analogy: "L'eau qui bout dans la casserole. L'air chaud dans une montgolfière. Les mouvements du magma sous la Terre.",
    detail: "Moteur de la tectonique des plaques et des vents météo.",
    interaction: { question: "Air chaud ?", options: ["Monte", "Descend", "Stagne"], correctIndex: 0, explanation: "Plus léger." },
    dynamicContext: (s) => null
};

export const PHYS_LASER: KnowledgeNode = {
    id: 'syn_laser',
    title: "Laser",
    tags: ['lumière', 'tech', 'photon', 'concentré'],
    fact: "Light Amplification by Stimulated Emission of Radiation. De la lumière disciplinée : tous les photons vont dans la même direction et ont la même couleur.",
    analogy: "Une ampoule est une foule qui court partout. Un laser est un défilé militaire au pas.",
    detail: "Utilise des miroirs et un cristal. Sert à découper, lire des DVD, opérer les yeux.",
    interaction: { question: "Différence ampoule ?", options: ["Plus chaud", "Organisé/Cohérent", "Plus lent"], correctIndex: 1, explanation: "Monochromatique." },
    dynamicContext: (s) => null
};

export const PHYS_VACUUM: KnowledgeNode = {
    id: 'syn_vacuum',
    title: "Le Vide",
    tags: ['espace', 'rien', 'pression', 'air'],
    fact: "L'absence de matière. Dans l'espace, il n'y a pas d'air. Le son ne peut pas voyager.",
    analogy: "Pas de résistance. Une plume tombe aussi vite qu'un marteau (vérifié sur la Lune).",
    detail: "Le vide parfait n'existe pas (fluctuations quantiques). L'espace est un vide partiel.",
    interaction: { question: "Son dans le vide ?", options: ["Très fort", "Silence total", "Étouffé"], correctIndex: 1, explanation: "Pas de support." },
    dynamicContext: (s) => null
};
