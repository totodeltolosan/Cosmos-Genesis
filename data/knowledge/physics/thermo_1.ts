
import { KnowledgeNode, ResourceType } from '../../../types';

export const THERMO_ENTROPY: KnowledgeNode = {
    id: 'syn_entropy',
    title: "L'Entropie (Désordre)",
    tags: ['entropie', 'désordre', 'chaleur', 'thermodynamique', 'temps'],
    
    fact: "L'entropie est une grandeur physique qui mesure le degré de désordre d'un système. Le Second Principe de la Thermodynamique stipule que l'entropie globale d'un système isolé ne peut qu'augmenter.",
    
    analogy: "Imagine ta chambre. Si tu ne fais rien, elle se range toute seule ? Non. La poussière s'accumule, les vêtements traînent. Le désordre (l'entropie) vient naturellement. Pour ranger (baisser l'entropie), il faut dépenser de l'énergie.",
    
    detail: "L'entropie explique pourquoi le temps a une direction (la Flèche du Temps). Un verre brisé ne se recolle jamais seul, car l'état 'brisé' a une entropie plus haute que l'état 'intact'. L'univers finira probablement en 'Mort Thermique', quand l'entropie sera maximale et que plus rien ne pourra bouger.",
    
    interaction: {
        question: "Si je laisse une tasse de café chaud sur la table, que fait son entropie ?",
        options: [
            "Elle diminue (le café s'ordonne)",
            "Elle augmente (la chaleur se disperse)",
            "Elle reste stable"
        ],
        correctIndex: 1,
        explanation: "La chaleur se diffuse dans la pièce. L'énergie est plus étalée, donc plus désordonnée."
    },

    dynamicContext: (state) => {
        const ent = state.resources[ResourceType.ENTROPY];
        if (ent > 1e9) return `Regarde tes compteurs : tu as généré ${ent.toExponential(1)} unités d'Entropie. Tu as irrémédiablement augmenté le désordre de ce monde virtuel pour créer ta matière. C'est le prix à payer.`;
        if (ent > 1000) return `Tu commences à générer de l'entropie (${Math.floor(ent)}). C'est le moteur de ton univers. Sans ce désordre initial, rien ne pourrait se passer.`;
        return "Pour l'instant, ton univers est trop calme. Génère plus d'entropie pour voir ce principe en action.";
    }
};
