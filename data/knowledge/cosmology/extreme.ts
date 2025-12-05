
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const COSMO_FERMI: KnowledgeNode = {
    id: 'syn_fermi',
    title: "Paradoxe de Fermi",
    tags: ['espace', 'alien', 'fermi', 'silence', 'paradoxe'],
    fact: "S'il y a des milliards d'étoiles et que la vie est probable, pourquoi n'a-t-on vu personne ? 'Où sont-ils ?'",
    analogy: "C'est comme arriver dans une immense forêt pleine de bruits, mais ne voir aucun animal. Se cachent-ils ? Sont-ils morts ?",
    detail: "Solutions : Ils sont trop loin, ils dorment, ils nous observent (Zoo), ou ils se sont auto-détruits (Grand Filtre).",
    interaction: { question: "La réponse la plus triste ?", options: ["On est seuls", "Ils sont timides", "Pas de Wifi"], correctIndex: 0, explanation: "Nous serions l'unique accident de la vie." },
    dynamicContext: (s) => {
        const metSomeone = Object.values(s.exploration.factions).some(f => f && f.id !== 'NONE');
        return metSomeone ? "Tu as résolu le paradoxe ! Tu as rencontré l'Empire ou le Syndicat. Nous ne sommes pas seuls." : "Pour l'instant, tes scanners n'ont rien trouvé. Le silence est angoissant, non ?";
    }
};

export const COSMO_DYSON: KnowledgeNode = {
    id: 'syn_dyson',
    title: "Sphère de Dyson",
    tags: ['énergie', 'structure', 'étoile', 'civilisation', 'futur'],
    fact: "Une mégastructure théorique qui entoure complètement une étoile pour capturer 100% de son énergie.",
    analogy: "Au lieu de mettre un panneau solaire sur ton toit, tu mets ton toit autour du Soleil.",
    detail: "Classifie une civilisation de Type II sur l'échelle de Kardashev. Indispensable pour les calculs interstellaires massifs.",
    interaction: { question: "Sert à quoi ?", options: ["Cacher l'étoile", "Capturer toute l'énergie", "Habiter dessus"], correctIndex: 1, explanation: "Énergie quasi-infinie." },
    dynamicContext: (s) => {
        const hasDyson = Object.values(s.exploration.megastructures).some(m => m.type === 'DYSON_SPHERE');
        return hasDyson ? "Je détecte que tu es en train d'en construire une. Tu entres dans la cour des grands." : "Tu n'as pas encore domestiqué ton étoile. Tu gaspilles 99.99% de sa lumière.";
    }
};

export const COSMO_GOLDILOCKS: KnowledgeNode = {
    id: 'syn_goldilocks',
    title: "Zone Habitable",
    tags: ['vie', 'planète', 'eau', 'boucle d\'or', 'température'],
    fact: "La zone autour d'une étoile où il ne fait ni trop chaud, ni trop froid, pour que l'eau reste liquide.",
    analogy: "Comme dans le conte 'Boucle d'Or'. Pas trop chaud, pas trop froid, juste parfait pour la vie.",
    detail: "Dépend de la taille de l'étoile. Pour une Naine Rouge, c'est très près. Pour une Géante Bleue, c'est très loin.",
    interaction: { question: "Condition principale ?", options: ["Oxygène", "Eau liquide", "Gravité"], correctIndex: 1, explanation: "L'eau est le solvant de la vie." },
    dynamicContext: (s) => `Tu as colonisé plusieurs planètes. Vérifie si elles sont dans la zone habitable de leur système.`
};

export const COSMO_PANSPERMIA: KnowledgeNode = {
    id: 'syn_panspermia',
    title: "Panspermie",
    tags: ['vie', 'origine', 'comète', 'voyage', 'bactérie'],
    fact: "L'hypothèse que la vie n'est pas née sur Terre, mais a été apportée par des météorites ou des comètes contaminées.",
    analogy: "La Terre a été 'ensemencée' par un livreur cosmique (une comète) qui portait des briques de vie.",
    detail: "Certaines bactéries résistent au vide spatial. Nous sommes peut-être tous des Martiens immigrés.",
    interaction: { question: "Véhicule de la vie ?", options: ["Vaisseau", "Météorite", "Vent solaire"], correctIndex: 1, explanation: "Transporte bactéries et eau." },
    dynamicContext: (s) => s.era === Era.BIOLOGICAL ? "Ta soupe primordiale vient-elle d'ici ou d'ailleurs ? C'est un mystère." : null
};

export const COSMO_FILTER: KnowledgeNode = {
    id: 'syn_filter',
    title: "Le Grand Filtre",
    tags: ['fermi', 'danger', 'extinction', 'fin', 'survie'],
    fact: "L'idée qu'il y a une étape très difficile dans l'évolution que presque aucune civilisation ne dépasse (guerre nucléaire, climat, IA).",
    analogy: "Un mur géant sur l'autoroute de la vie. Soit il est derrière nous (on est chanceux), soit il est devant (on est foutus).",
    detail: "Si on trouve de la vie partout, c'est mauvais signe : ça veut dire que le filtre est devant nous.",
    interaction: { question: "Si le filtre est devant ?", options: ["Génial", "On va disparaître", "Rien"], correctIndex: 1, explanation: "La fin est proche." },
    dynamicContext: (s) => s.stability < 50 ? "Ta stabilité est faible. Attention, le Grand Filtre pourrait être votre propre incompétence à gérer vos ressources." : "Ton univers est stable. Vous avez peut-être passé le filtre."
};
