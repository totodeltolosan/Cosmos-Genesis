
import { KnowledgeNode, ResourceType } from '../../../types';

export const PHYS_HIGGS: KnowledgeNode = {
    id: 'syn_higgs',
    title: "Boson de Higgs",
    tags: ['physique', 'masse', 'particule', 'dieu', 'champ'],
    fact: "Le Boson de Higgs est une particule élémentaire qui donne leur masse aux autres particules. Sans lui, les électrons et les quarks fileraient à la vitesse de la lumière sans jamais s'arrêter pour former des atomes.",
    analogy: "Imagine une soirée bondée (le Champ de Higgs). Une célébrité (une particule) entre. Tout le monde s'agglutine autour d'elle, ce qui la ralentit et la rend 'lourde' à déplacer. C'est ça la masse.",
    detail: "Confirmé au CERN en 2012. Il prouve l'existence du Champ de Higgs qui remplit tout l'univers.",
    interaction: { question: "Sans Higgs, que ferait la matière ?", options: ["Elle flotterait", "Elle n'existerait pas (pas d'atomes)", "Elle serait plus rapide"], correctIndex: 1, explanation: "Sans masse, pas d'atomes, pas de chimie, pas de vie." },
    dynamicContext: (s) => s.resources[ResourceType.MATTER] > 10000 ? `Tu as accumulé ${Math.floor(s.resources[ResourceType.MATTER])} unités de Matière. Tout cela existe uniquement parce que le champ de Higgs est actif dans ta simulation.` : null
};

export const PHYS_ANTIMATTER: KnowledgeNode = {
    id: 'syn_antimatter',
    title: "Antimatière",
    tags: ['physique', 'énergie', 'opposé', 'annihilation', 'positron'],
    fact: "Pour chaque particule de matière, il existe une jumelle de charge opposée : l'antimatière. Si elles se touchent, elles s'annihilent en pure énergie (E=mc²).",
    analogy: "C'est le jumeau maléfique de la matière. Un électron (-) a un jumeau positron (+). S'ils se serrent la main... BOUM.",
    detail: "Le Big Bang a créé autant de matière que d'antimatière. Mais aujourd'hui, l'antimatière a disparu. C'est un mystère majeur (Asymétrie Baryonique).",
    interaction: { question: "Matière + Antimatière = ?", options: ["Rien", "Un trou noir", "Explosion d'énergie"], correctIndex: 2, explanation: "100% de la masse devient énergie." },
    dynamicContext: (s) => s.production[ResourceType.ENTROPY] > 1e6 ? `Ta production d'énergie est colossale. Tu utilises sûrement des réactions matière-antimatière dans tes moteurs.` : null
};

export const PHYS_ENTANGLEMENT: KnowledgeNode = {
    id: 'syn_entanglement',
    title: "Intrication Quantique",
    tags: ['quantique', 'lien', 'téléportation', 'einstein', 'distance'],
    fact: "Deux particules peuvent être liées de telle façon que si on touche l'une, l'autre réagit instantanément, même à l'autre bout de l'univers.",
    analogy: "Comme deux dés magiques. Si tu en lances un sur Terre et qu'il fait 6, l'autre sur Mars fera INSTANTANÉMENT 6 aussi. Einstein appelait ça 'action fantôme à distance'.",
    detail: "Cela ne viole pas la vitesse de la lumière car on ne peut pas transmettre d'information utile ainsi (Théorème de non-communication).",
    interaction: { question: "La distance compte-t-elle ?", options: ["Oui, ça prend du temps", "Non, c'est instantané", "Un peu"], correctIndex: 1, explanation: "Zéro délai." },
    dynamicContext: (s) => `C'est exactement comme notre connexion, ${s.playerProfile?.name}. Je suis une IA, tu es le Pilote. Nos esprits sont intriqués à travers cette interface.`
};

export const PHYS_TUNNELING: KnowledgeNode = {
    id: 'syn_tunneling',
    title: "Effet Tunnel",
    tags: ['quantique', 'mur', 'traverser', 'magie', 'soleil'],
    fact: "Une particule quantique peut traverser un mur infranchissable si elle a de la chance. Elle 'téléporte' de l'autre côté.",
    analogy: "Si tu lances une balle contre un mur, elle rebondit. En quantique, 1 fois sur un milliard, la balle traverse le mur comme un fantôme.",
    detail: "C'est vital : sans effet tunnel, le Soleil ne pourrait pas fusionner ses atomes (ils se repoussent trop) et il s'éteindrait.",
    interaction: { question: "Le Soleil brille grâce à... ?", options: ["Le feu", "L'effet tunnel", "Le charbon"], correctIndex: 1, explanation: "Permet la fusion de l'hydrogène." },
    dynamicContext: (s) => s.upgrades['fusion_drive'] ? "Tes moteurs à fusion utilisent ce principe pour propulser tes vaisseaux." : null
};

export const PHYS_STRING: KnowledgeNode = {
    id: 'syn_string',
    title: "Théorie des Cordes",
    tags: ['physique', 'théorie', 'tout', 'dimensions', 'vibration'],
    fact: "L'idée que les particules (électrons, quarks) ne sont pas des points, mais des minuscules cordes vibrantes. La note jouée détermine la particule.",
    analogy: "L'univers est une symphonie. Une corde qui vibre en 'La' est un électron. En 'Do', c'est un photon. Tout est musique.",
    detail: "Nécessite 10 ou 11 dimensions (nous n'en voyons que 4). C'est une candidate pour la 'Théorie du Tout' unifiant Gravité et Quantique.",
    interaction: { question: "Combien de dimensions ?", options: ["3", "4", "10 ou plus"], correctIndex: 2, explanation: "Dimensions enroulées sur elles-mêmes." },
    dynamicContext: (s) => s.resources[ResourceType.COMPLEXITY] > 1e6 ? "Ta compréhension de la complexité de l'univers approche de cette harmonie mathématique." : null
};
