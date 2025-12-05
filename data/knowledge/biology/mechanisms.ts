
import { KnowledgeNode, ResourceType, Era } from '../../../types';

export const BIO_MITOCHONDRIA: KnowledgeNode = {
    id: 'syn_mitochondria',
    title: "Mitochondrie",
    tags: ['biologie', 'cellule', 'énergie', 'centrale', 'atp'],
    fact: "L'organite qui sert de centrale électrique à la cellule. C'était une ancienne bactérie mangée par une autre !",
    analogy: "C'est une centrale nucléaire miniature dans chacune de tes cellules. Elle brûle le sucre pour faire de l'énergie.",
    detail: "Théorie endosymbiotique. Elle a son propre ADN (ADNmt) transmis uniquement par la mère.",
    interaction: { question: "Origine ?", options: ["Usine", "Ancienne bactérie", "Virus"], correctIndex: 1, explanation: "Symbiose." },
    dynamicContext: (s) => `Ton compteur d'Entropie augmente de ${s.production[ResourceType.ENTROPY].toFixed(1)}/s. Tes mitochondries virtuelles tournent à plein régime.`
};

export const BIO_ATP: KnowledgeNode = {
    id: 'syn_atp',
    title: "ATP",
    tags: ['énergie', 'molécule', 'biologie', 'batterie'],
    fact: "Adénosine Triphosphate. C'est la 'monnaie' énergétique universelle du vivant. Tout ce que tu fais coûte des ATP.",
    analogy: "C'est une batterie rechargeable. Quand tu bouges, tu décharges l'ATP en ADP. En mangeant, tu recharges.",
    detail: "Le corps recycle son propre poids en ATP chaque jour ! Le cycle de Krebs la produit.",
    interaction: { question: "Rôle de l'ATP ?", options: ["Stocker l'info", "Transporter l'énergie", "Détruire les virus"], correctIndex: 1, explanation: "Carburant cellulaire." },
    dynamicContext: (s) => null
};

export const BIO_NEURON: KnowledgeNode = {
    id: 'syn_neuron',
    title: "Neurone",
    tags: ['cerveau', 'cellule', 'pensée', 'électricité', 'réseau'],
    fact: "La cellule du cerveau. Elle transmet l'information par des signaux électriques et chimiques.",
    analogy: "Un câble électrique vivant qui peut se connecter à 10 000 autres câbles. C'est la base de l'intelligence.",
    detail: "Axone (câble), Dendrites (antennes), Synapse (connexion). L'influx nerveux va à 100 m/s.",
    interaction: { question: "Connexion entre deux neurones ?", options: ["Nœud", "Synapse", "Wifi"], correctIndex: 1, explanation: "Zone de contact." },
    dynamicContext: (s) => s.resources[ResourceType.COMPLEXITY] > 50000 ? "Tu as accumulé beaucoup de Savoir (Complexité). C'est l'équivalent de millions de connexions neuronales." : null
};

export const BIO_TELOMERES: KnowledgeNode = {
    id: 'syn_telomeres',
    title: "Télomères",
    tags: ['vieillesse', 'adn', 'mort', 'cellule', 'temps'],
    fact: "Les bouts de protection au bout de tes chromosomes. Ils raccourcissent à chaque fois que la cellule se divise.",
    analogy: "Comme le bout en plastique au bout des lacets. Si ça s'use, le lacet (ADN) s'effiloche et la cellule meurt (vieillesse).",
    detail: "L'enzyme Télomérase peut les réparer (cellules souches, cancer, ou méduse immortelle).",
    interaction: { question: "Quand ils sont courts ?", options: ["On rajeunit", "On vieillit", "Rien"], correctIndex: 1, explanation: "Fin de division." },
    dynamicContext: (s) => s.universeAge > 10 ? "Ton univers a vieilli. Ses télomères cosmiques commencent à s'user." : "Ton univers est jeune."
};

export const BIO_ENZYME: KnowledgeNode = {
    id: 'syn_enzyme',
    title: "Enzymes",
    tags: ['chimie', 'biologie', 'vitesse', 'protéine', 'digestion'],
    fact: "Des protéines qui accélèrent les réactions chimiques du corps. Sans elles, digérer prendrait des années !",
    analogy: "C'est un ouvrier spécialisé avec des outils. Il attrape les molécules et les coupe ou les colle à toute vitesse.",
    detail: "Catalyseur biologique. Spécifique à une tâche (clé-serrure). Sensible à la chaleur (fièvre).",
    interaction: { question: "Rôle ?", options: ["Ralentir", "Accélérer", "Stopper"], correctIndex: 1, explanation: "Catalyseur." },
    dynamicContext: (s) => `Tes améliorations (Upgrades) agissent comme des enzymes : elles accélèrent ta production de ressources x${Object.keys(s.upgrades).length}.`
};
