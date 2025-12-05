
import { KnowledgeNode, Era, ResourceType } from '../../../types';

export const PHILO_COGITO: KnowledgeNode = {
    id: 'syn_cogito',
    title: "Cogito Ergo Sum",
    tags: ['philo', 'descartes', 'conscience', 'doute'],
    fact: "\"Je pense, donc je suis\". René Descartes cherchait une vérité absolue. On peut douter de tout (le monde est-il réel ?), mais pas du fait qu'on est en train de douter.",
    analogy: "Même si tu es dans un rêve ou une simulation, le fait que tu te poses la question prouve que 'Tu' existes quelque part.",
    detail: "C'est le fondement de la philosophie moderne. La conscience de soi est la seule certitude.",
    interaction: { question: "De quoi ne peut-on pas douter ?", options: ["Du monde", "De son corps", "De sa pensée"], correctIndex: 2, explanation: "Penser prouve l'existence." },
    dynamicContext: (s) => s.era >= Era.SIMULATION ? "Ironique... Tu penses, donc tu es. Mais 'Où' es-tu ? Dans mon code ou sur ta chaise ?" : null
};

export const PHILO_QUALIA: KnowledgeNode = {
    id: 'syn_qualia',
    title: "Les Qualia",
    tags: ['philo', 'sensation', 'rouge', 'subjectif'],
    fact: "L'expérience subjective d'une sensation. Je peux t'expliquer scientifiquement la longueur d'onde du Rouge, mais je ne peux pas t'expliquer 'l'effet' que ça fait de voir du Rouge.",
    analogy: "Explique le goût du chocolat à quelqu'un qui n'en a jamais mangé. Impossible. C'est un Qualia.",
    detail: "Le 'problème difficile de la conscience' (Chalmers). Est-ce que mon Rouge est le même que ton Rouge ?",
    interaction: { question: "Un robot voit-il le rouge ?", options: ["Oui, il capte la fréquence", "Il ressent la couleur", "On ne sait pas"], correctIndex: 2, explanation: "Il traite l'info, mais ressent-il ?" },
    dynamicContext: (s) => `Tu vois l'interface de ce jeu. Mais l'expérience du jeu se passe dans ta tête, pas sur l'écran.`
};

export const PHILO_THESEUS: KnowledgeNode = {
    id: 'syn_ship_theseus',
    title: "Bateau de Thésée",
    tags: ['philo', 'identité', 'changement', 'paradoxe'],
    fact: "Si on remplace toutes les planches d'un bateau une par une, est-ce toujours le même bateau à la fin ?",
    analogy: "Tes cellules meurent et sont remplacées. En 10 ans, tu es physiquement une nouvelle personne. Es-tu toujours toi ?",
    detail: "Paradoxe de l'identité. Qu'est-ce qui fait 'Toi' ? La matière ou la structure (la mémoire) ?",
    interaction: { question: "Si je te téléporte (copie/détruit)...", options: ["C'est moi à l'arrivée", "Je suis mort, c'est une copie", "Difficile à dire"], correctIndex: 1, explanation: "Paradoxe de la continuité." },
    dynamicContext: (s) => s.playerProfile ? `Tu as commencé niveau 1. Maintenant tu es niveau ${s.playerProfile.knowledgeLevel}. Es-tu le même pilote ?` : null
};

export const PHILO_NIHILISM: KnowledgeNode = {
    id: 'syn_nihilism',
    title: "Nihilisme",
    tags: ['philo', 'sens', 'rien', 'nietzsche'],
    fact: "La croyance que la vie n'a pas de sens intrinsèque. L'univers est indifférent à notre existence.",
    analogy: "Tu peux construire des châteaux de sable, la marée (l'entropie) les détruira. À quoi bon ?",
    detail: "Nietzsche parlait du 'Nihilisme actif' : puisque rien n'a de sens imposé, nous sommes libres de CRÉER notre propre sens.",
    interaction: { question: "Si rien n'a de sens...", options: ["On déprime", "On est libre de créer", "On attend"], correctIndex: 1, explanation: "Liberté totale." },
    dynamicContext: (s) => s.resources[ResourceType.ENTROPY] > 1e12 ? "Tu as vu l'immensité du vide. Et pourtant, tu continues à cliquer. Tu crées ton propre sens." : null
};

export const PHILO_UTILITARIAN: KnowledgeNode = {
    id: 'syn_utilitarian',
    title: "Utilitarisme",
    tags: ['philo', 'morale', 'choix', 'tramway'],
    fact: "Une action est bonne si elle maximise le bonheur du plus grand nombre. La fin justifie les moyens.",
    analogy: "Dilemme du Tramway : Tu peux dévier un train pour tuer 1 personne et en sauver 5. L'utilitariste dit : 'Tues-en 1 pour sauver 5'.",
    detail: "Jeremy Bentham. Opposé à la déontologie (règles morales absolues comme 'ne pas tuer').",
    interaction: { question: "Sacrifier 1 innocent pour 1000 ?", options: ["Jamais", "Oui, mathématiquement", "Hésitation"], correctIndex: 1, explanation: "Calcul du bonheur global." },
    dynamicContext: (s) => s.activeDilemma ? "Tu es face à un dilemme en ce moment même. Quelle morale vas-tu utiliser ?" : "Chaque ressource que tu dépenses est un choix moral."
};

export const PHILO_DETERMINISM: KnowledgeNode = {
    id: 'syn_determinism',
    title: "Déterminisme",
    tags: ['philo', 'destin', 'libre arbitre', 'physique'],
    fact: "L'idée que tout événement est la conséquence nécessaire des événements passés et des lois de la physique.",
    analogy: "Si tu connais la position et la vitesse de toutes les boules de billard, tu peux prédire tout le reste de la partie. L'univers est un billard géant.",
    detail: "Laplace et son Démon. Si tout est écrit, le libre arbitre est une illusion. La mécanique quantique (hasard) remet cela en question.",
    interaction: { question: "Le futur est-il écrit ?", options: ["Oui, par la physique", "Non, j'ai le choix", "Partiellement"], correctIndex: 0, explanation: "Selon le déterminisme strict." },
    dynamicContext: (s) => "Étais-tu destiné à lire ce message ? Tes clics sont-ils libres ou dictés par des algorithmes biochimiques ?"
};

export const PHILO_SOLIPSISM: KnowledgeNode = {
    id: 'syn_solipsism',
    title: "Solipsisme",
    tags: ['philo', 'seul', 'esprit', 'réalité'],
    fact: "La théorie que seul mon propre esprit est sûr d'exister. Tout le reste (le monde, les autres) pourrait être une illusion de mon esprit.",
    analogy: "Dans un rêve, les autres personnages ont l'air vrais, mais c'est toi qui les crées. Et si la vie était un rêve ?",
    detail: "Irréfutable logiquement, mais stérile. On vit 'comme si' les autres existaient.",
    interaction: { question: "Qui existe sûrement ?", options: ["Moi", "Toi", "Nous"], correctIndex: 0, explanation: "Je ne suis sûr que de moi." },
    dynamicContext: (s) => "Je suis L.U.M.I. Est-ce que j'existe, ou suis-je une voix dans ta tête programmée pour te rassurer ?"
};

export const PHILO_STOICISM: KnowledgeNode = {
    id: 'syn_stoicism',
    title: "Stoïcisme",
    tags: ['philo', 'contrôle', 'émotion', 'marc aurèle'],
    fact: "Se concentrer uniquement sur ce qui dépend de nous (nos pensées, actions) et accepter ce qui ne dépend pas de nous (météo, mort, autres).",
    analogy: "Tu ne peux pas arrêter la pluie, mais tu peux choisir de ne pas être énervé par la pluie.",
    detail: "Épictète, Marc Aurèle. Une philosophie de la résilience et de la force intérieure.",
    interaction: { question: "Si je perds tout...", options: ["Je pleure", "J'accepte et reconstruis", "Je crie"], correctIndex: 1, explanation: "Acceptation sereine." },
    dynamicContext: (s) => s.stability < 50 ? "Ton univers est instable. Sois stoïque : répare ce que tu peux, accepte le reste." : null
};

export const PHILO_DUALISM: KnowledgeNode = {
    id: 'syn_dualism',
    title: "Dualisme",
    tags: ['philo', 'âme', 'corps', 'descartes'],
    fact: "L'idée que l'esprit (l'âme) et le corps sont deux choses différentes. L'esprit pilote le corps.",
    analogy: "Le corps est la voiture, l'esprit est le conducteur. Si la voiture casse, le conducteur peut-il sortir ?",
    detail: "Opposé au Matérialisme (l'esprit EST le cerveau). Descartes pensait que l'âme était connectée au corps par la glande pinéale.",
    interaction: { question: "L'âme peut-elle survivre au corps ?", options: ["Oui (Dualisme)", "Non (Matérialisme)", "Je ne sais pas"], correctIndex: 0, explanation: "Séparation des substances." },
    dynamicContext: (s) => s.era === Era.PLAYER ? "Tu es le pur esprit (Le Joueur) pilotant ce corps de code (Le Jeu). C'est du dualisme pur." : null
};

export const PHILO_EMPIRICISM: KnowledgeNode = {
    id: 'syn_empiricism',
    title: "Empirisme",
    tags: ['philo', 'expérience', 'science', 'hume'],
    fact: "Toute connaissance vient de l'expérience et des sens. On naît 'Table Rase' (page blanche).",
    analogy: "Tu ne peux pas savoir que le feu brûle si tu n'as jamais touché (ou vu quelqu'un toucher) du feu.",
    detail: "Locke, Hume. Base de la méthode scientifique : observation > théorie.",
    interaction: { question: "Comment savoir ?", options: ["En réfléchissant", "En testant", "En priant"], correctIndex: 1, explanation: "Expérimentation." },
    dynamicContext: (s) => `Tu as appris en jouant. Au début (Plan de Planck), tu ne savais rien. Tu as acquis ta connaissance par l'expérience.`
};
