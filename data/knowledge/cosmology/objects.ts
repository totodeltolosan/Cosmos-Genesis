
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const COSMO_QUASAR: KnowledgeNode = {
    id: 'syn_quasar',
    title: "Quasar",
    tags: ['espace', 'lumière', 'trou noir', 'énergie'],
    fact: "L'objet le plus lumineux de l'univers. C'est un trou noir supermassif qui dévore de la matière à toute vitesse.",
    analogy: "Un phare cosmique. Le gaz qui tombe dans le trou noir chauffe tellement qu'il brille plus que 1000 galaxies.",
    detail: "Noyau Actif de Galaxie (AGN). Visibles à des milliards d'années-lumière.",
    interaction: { question: "Qu'y a-t-il au centre ?", options: ["Une étoile", "Un trou noir", "Un diamant"], correctIndex: 1, explanation: "Supermassif." },
    dynamicContext: (s) => s.resources[ResourceType.ENTROPY] > 1e15 ? "Ta production d'énergie rivalise avec un Quasar." : null
};

export const COSMO_PULSAR: KnowledgeNode = {
    id: 'syn_pulsar',
    title: "Pulsar",
    tags: ['espace', 'étoile', 'phare', 'temps'],
    fact: "Une étoile à neutrons qui tourne très vite sur elle-même et envoie un rayon de radiation comme un phare.",
    analogy: "Une toupie cosmique qui clignote très précisément. Tic-tac-tic-tac. Les horloges les plus précises de l'univers.",
    detail: "Découverts par Jocelyn Bell. On a cru au début que c'était des aliens (LGM-1).",
    interaction: { question: "Vitesse de rotation ?", options: ["1 tour/an", "Jusqu'à 700 tours/sec", "1 tour/jour"], correctIndex: 1, explanation: "Vertigineux." },
    dynamicContext: (s) => null
};

export const COSMO_NEBULA: KnowledgeNode = {
    id: 'syn_nebula',
    title: "Nébuleuse",
    tags: ['espace', 'nuage', 'couleur', 'naissance'],
    fact: "Un immense nuage de gaz et de poussière. C'est là que naissent les étoiles (poupinière) ou ce qu'il reste quand elles meurent.",
    analogy: "Les nuages dans le ciel de l'univers. Certains sont des berceaux, d'autres des tombes.",
    detail: "Nébuleuse d'Orion (création), Nébuleuse du Crabe (reste de supernova).",
    interaction: { question: "Composition principale ?", options: ["Eau", "Hydrogène", "Roche"], correctIndex: 1, explanation: "Gaz primordial." },
    dynamicContext: (s) => s.upgrades['cosmic_dust'] ? "Tes premières poussières cosmiques se sont rassemblées en nébuleuses." : null
};

export const COSMO_OORT: KnowledgeNode = {
    id: 'syn_oort',
    title: "Nuage d'Oort",
    tags: ['espace', 'système solaire', 'frontière', 'comète'],
    fact: "Une bulle géante de glaces et de rochers qui entoure notre système solaire, très très loin après Pluton.",
    analogy: "La coquille de l'œuf du Système Solaire. C'est de là que viennent les comètes.",
    detail: "Théorique (jamais vu directement). S'étend jusqu'à 1 année-lumière du Soleil.",
    interaction: { question: "Il contient quoi ?", options: ["Des étoiles", "Des comètes dormantes", "Des aliens"], correctIndex: 1, explanation: "Réserve de glace." },
    dynamicContext: (s) => null
};

export const COSMO_MAGNETOSPHERE: KnowledgeNode = {
    id: 'syn_magnetosphere',
    title: "Magnétosphère",
    tags: ['terre', 'bouclier', 'magnétique', 'soleil'],
    fact: "Le bouclier invisible de la Terre créé par son noyau en fer. Il nous protège des rayons mortels du Soleil.",
    analogy: "Un champ de force comme dans Star Trek. Sans lui, le vent solaire soufflerait notre atmosphère (comme sur Mars).",
    detail: "Crée les aurores boréales quand il est touché. Généré par l'effet dynamo du noyau.",
    interaction: { question: "Si elle disparaît ?", options: ["On bronze", "Plus d'atmosphère", "Rien"], correctIndex: 1, explanation: "Le vent solaire érode l'air." },
    dynamicContext: (s) => s.upgrades['magnetic_field'] ? "Tu as acheté le Champ Magnétique. Tes planètes sont protégées." : "Attention, sans champ magnétique, la vie est impossible."
};

export const COSMO_CMB: KnowledgeNode = {
    id: 'syn_cmb',
    title: "Fond Diffus (CMB)",
    tags: ['cosmologie', 'big bang', 'radio', 'fossile'],
    fact: "La première lumière de l'univers, émise 380 000 ans après le Big Bang. Elle est visible partout dans le ciel en ondes radio.",
    analogy: "L'écho du Big Bang. Si tu allumes une vieille télé sans chaîne, 1% de la 'neige' vient de cette lumière fossile !",
    detail: "Cosmic Microwave Background. Preuve majeure du Big Bang. Sa température est de 2.7 Kelvin.",
    interaction: { question: "C'est quoi ?", options: ["Une étoile", "Un reste de chaleur", "Du bruit"], correctIndex: 1, explanation: "Rayonnement fossile." },
    dynamicContext: (s) => s.era >= Era.RECOMBINATION ? "Tu as passé la Recombinaison. Le CMB est maintenant libre de voyager." : null
};

export const COSMO_EVENT_HORIZON: KnowledgeNode = {
    id: 'syn_event_horizon',
    title: "Horizon des Événements",
    tags: ['trou noir', 'limite', 'temps', 'danger'],
    fact: "La frontière autour d'un trou noir. Une fois traversée, rien ne peut revenir, même la lumière.",
    analogy: "Le bord d'une cascade. Avant, tu peux nager à contre-courant. Après le bord, c'est la chute inévitable.",
    detail: "Le temps semble s'arrêter sur l'horizon pour un observateur extérieur.",
    interaction: { question: "Peut-on en sortir ?", options: ["Oui avec un moteur", "Jamais", "Parfois"], correctIndex: 1, explanation: "Vitesse de libération > c." },
    dynamicContext: (s) => null
};

export const COSMO_LANI_AKEA: KnowledgeNode = {
    id: 'syn_laniakea',
    title: "Laniakea",
    tags: ['espace', 'galaxie', 'maison', 'grand'],
    fact: "Le superamas de galaxies où nous vivons. Il contient 100 000 galaxies, dont la Voie Lactée.",
    analogy: "Notre 'pays' galactique. Son nom veut dire 'Ciel Immense' en hawaïen.",
    detail: "Les galaxies y coulent comme des rivières vers le 'Grand Attracteur'.",
    interaction: { question: "C'est quoi ?", options: ["Une planète", "Un groupe de galaxies", "Une étoile"], correctIndex: 1, explanation: "Superamas." },
    dynamicContext: (s) => s.exploration.currentZoom === 'SUPERCLUSTER' ? "Tu regardes la carte des superamas. L'un d'eux ressemble à Laniakea." : null
};

export const COSMO_NEUTRON_STAR: KnowledgeNode = {
    id: 'syn_neutron_star',
    title: "Étoile à Neutrons",
    tags: ['étoile', 'densité', 'lourd', 'supernova'],
    fact: "Le cœur mort d'une étoile géante. Si dense qu'une cuillère à café de sa matière pèse autant qu'une montagne (1 milliard de tonnes).",
    analogy: "Si tu prenais toute l'humanité et que tu la compressais dans la taille d'un morceau de sucre, tu aurais cette densité.",
    detail: "Composée presque uniquement de neutrons. Peut tourner très vite (Pulsar).",
    interaction: { question: "Densité ?", options: ["Légère", "Inimaginable", "Comme le plomb"], correctIndex: 1, explanation: "La matière la plus dense." },
    dynamicContext: (s) => null
};

export const COSMO_SOLAR_WIND: KnowledgeNode = {
    id: 'syn_solar_wind',
    title: "Vent Solaire",
    tags: ['soleil', 'particule', 'danger', 'espace'],
    fact: "Le Soleil n'envoie pas que de la lumière, il crache en permanence des particules chargées à haute vitesse.",
    analogy: "Un souffle continu de plasma. Il sculpte la queue des comètes (qui pointe toujours à l'opposé du Soleil).",
    detail: "Peut perturber nos satellites et réseaux électriques (tempête solaire).",
    interaction: { question: "Queue de comète ?", options: ["Suit la comète", "Opposée au Soleil", "Vers le Soleil"], correctIndex: 1, explanation: "Poussée par le vent." },
    dynamicContext: (s) => null
};
