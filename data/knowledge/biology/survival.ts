
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const BIO_HOMEOSTASIS: KnowledgeNode = {
    id: 'syn_homeostasis',
    title: "Homéostasie",
    tags: ['corps', 'équilibre', 'santé', 'température'],
    fact: "La capacité du corps à garder son équilibre intérieur (température, eau, sucre) peu importe ce qu'il se passe dehors.",
    analogy: "Comme le thermostat de ta maison. S'il fait froid, le chauffage s'allume (frisson). S'il fait chaud, la clim s'allume (transpiration).",
    detail: "Vital. Si l'homéostasie rompt, c'est la maladie ou la mort.",
    interaction: { question: "Si tu as trop chaud ?", options: ["Tu trembles", "Tu transpires", "Tu dors"], correctIndex: 1, explanation: "Évaporation refroidit." },
    dynamicContext: (s) => s.stability < 50 ? "La stabilité de ton univers chute. Ton homéostasie cosmique est en panne." : "Système stable."
};

export const BIO_PLACEBO: KnowledgeNode = {
    id: 'syn_placebo',
    title: "Effet Placebo",
    tags: ['cerveau', 'soin', 'croyance', 'médicament'],
    fact: "Si tu crois qu'un faux médicament va te soigner, ton corps peut vraiment aller mieux !",
    analogy: "Le pouvoir de la conviction. Le cerveau libère ses propres médicaments (endorphines) s'il est convaincu d'être soigné.",
    detail: "Marche sur la douleur, la dépression, Parkinson. Preuve du lien Corps-Esprit.",
    interaction: { question: "C'est magique ?", options: ["Oui", "Non, biologique", "C'est faux"], correctIndex: 1, explanation: "Chimie du cerveau." },
    dynamicContext: (s) => null
};

export const BIO_ADRENALINE: KnowledgeNode = {
    id: 'syn_adrenaline',
    title: "Adrénaline",
    tags: ['peur', 'hormone', 'force', 'survie'],
    fact: "L'hormone du super-héros. En cas de danger, elle donne une force et une vitesse surhumaines temporaires.",
    analogy: "Le mode 'Turbo' de ton corps. Le cœur bat fort, la douleur disparaît, le temps semble ralentir.",
    detail: "Sécrétée par les glandes surrénales. Prépare au 'Combat ou Fuite'.",
    interaction: { question: "Effet ?", options: ["Dormir", "Digérer", "Courir vite"], correctIndex: 2, explanation: "Mobilisation énergie." },
    dynamicContext: (s) => null
};

export const BIO_VIRUS_RNA: KnowledgeNode = {
    id: 'syn_rna',
    title: "ARN",
    tags: ['adn', 'génétique', 'messager', 'virus'],
    fact: "Le cousin de l'ADN. C'est souvent une copie temporaire pour fabriquer des protéines, mais certains virus n'ont QUE de l'ARN.",
    analogy: "Si l'ADN est le livre précieux à la bibliothèque, l'ARN est la photocopie qu'on emmène sur le chantier.",
    detail: "Acide Ribonucléique. Hypothèse du 'Monde ARN' : la vie aurait commencé par l'ARN avant l'ADN.",
    interaction: { question: "Différence ADN ?", options: ["Plus stable", "Moins stable/Simple brin", "Bleu"], correctIndex: 1, explanation: "Plus fragile." },
    dynamicContext: (s) => s.upgrades['rna_world'] ? "Tu as l'amélioration Monde ARN. C'est l'étape clé avant la vie complexe." : null
};

export const BIO_SYMBIOSIS: KnowledgeNode = {
    id: 'syn_symbiosis',
    title: "Symbiose",
    tags: ['nature', 'entraide', 'animaux', 'équipe'],
    fact: "Quand deux espèces différentes vivent ensemble et s'aident mutuellement.",
    analogy: "Le poisson-clown et l'anémone. L'oiseau qui nettoie les dents du crocodile. Nos bactéries intestinales.",
    detail: "Mutualisme (Gagnant-Gagnant) vs Parasitisme (Gagnant-Perdant).",
    interaction: { question: "Toi et tes bactéries ?", options: ["Guerre", "Symbiose", "Indifférence"], correctIndex: 1, explanation: "Elles t'aident à digérer." },
    dynamicContext: (s) => null
};

export const BIO_INSTINCT: KnowledgeNode = {
    id: 'syn_instinct',
    title: "Instinct",
    tags: ['comportement', 'inné', 'animal', 'savoir'],
    fact: "Un savoir que tu as dès la naissance, sans apprendre. L'araignée sait tisser sa toile sans cours de tissage.",
    analogy: "Un logiciel pré-installé dans le cerveau.",
    detail: "Inné vs Acquis. Chez l'homme, l'apprentissage remplace beaucoup d'instincts.",
    interaction: { question: "Bébé qui tète ?", options: ["Appris", "Instinct", "Hasard"], correctIndex: 1, explanation: "Réflexe archaïque." },
    dynamicContext: (s) => null
};

export const BIO_PHOTOSYNTHESIS_DEEP: KnowledgeNode = {
    id: 'syn_photo_deep',
    title: "Chlorophylle",
    tags: ['plante', 'vert', 'soleil', 'énergie'],
    fact: "Le pigment vert des plantes qui capture la lumière. C'est le panneau solaire de la nature.",
    analogy: "L'antenne qui capte l'énergie du soleil pour cuisiner du sucre.",
    detail: "Absorbe le rouge et le bleu, rejette le vert (d'où la couleur).",
    interaction: { question: "Couleur absorbée ?", options: ["Vert", "Rouge/Bleu", "Jaune"], correctIndex: 1, explanation: "Le vert est rejeté." },
    dynamicContext: (s) => s.upgrades['photosynthesis'] ? "Tes écosystèmes sont verts grâce à elle." : null
};

export const BIO_FERMENTATION: KnowledgeNode = {
    id: 'syn_fermentation',
    title: "Fermentation",
    tags: ['chimie', 'bactérie', 'pain', 'bière'],
    fact: "Produire de l'énergie sans oxygène. C'est ce que font les levures pour faire lever le pain.",
    analogy: "La respiration de secours des microbes. Ça produit du gaz (trous dans le pain) ou de l'alcool.",
    detail: "Pasteur a expliqué ce processus. Vital pour l'alimentation humaine (Yaourt, Fromage).",
    interaction: { question: "Besoin d'air ?", options: ["Oui", "Non", "Un peu"], correctIndex: 1, explanation: "Anaérobie." },
    dynamicContext: (s) => null
};

export const BIO_CLONING: KnowledgeNode = {
    id: 'syn_cloning',
    title: "Clonage",
    tags: ['génétique', 'copie', 'mouton', 'futur'],
    fact: "Créer un individu génétiquement identique à un autre. La brebis Dolly (1996) fut le premier mammifère cloné.",
    analogy: "Faire un Copier-Coller d'un être vivant. Ils ont le même ADN, mais pas les mêmes souvenirs.",
    detail: "Interdit sur l'homme pour raisons éthiques. Naturel chez les vrais jumeaux.",
    interaction: { question: "Mêmes souvenirs ?", options: ["Oui", "Non", "Un peu"], correctIndex: 1, explanation: "Vécus différents." },
    dynamicContext: (s) => null
};

export const BIO_HIBERNATION: KnowledgeNode = {
    id: 'syn_hibernation',
    title: "Hibernation",
    tags: ['sommeil', 'froid', 'survie', 'ours'],
    fact: "Mettre le corps au ralenti extrême pour survivre à l'hiver sans manger.",
    analogy: "Le mode 'Veille' de l'ordinateur. Le cœur bat très lentement, la température baisse.",
    detail: "Espoir pour les voyages spatiaux lointains (biostase).",
    interaction: { question: "Pourquoi ?", options: ["Dormir", "Économiser énergie", "Grandir"], correctIndex: 1, explanation: "Manque de nourriture." },
    dynamicContext: (s) => null
};
