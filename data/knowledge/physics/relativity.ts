
import { KnowledgeNode, ResourceType } from '../../../types';

export const PHYS_RELATIVITY: KnowledgeNode = {
    id: 'syn_relativity',
    title: "Relativité Générale",
    tags: ['physique', 'einstein', 'gravité', 'espace-temps', 'temps'],
    
    fact: "La gravité n'est pas une force invisible qui tire les objets, mais une courbure de l'espace-temps provoquée par la masse. Les objets suivent cette courbure.",
    
    analogy: "Imagine un trampoline (l'espace). Pose une boule de bowling au milieu (le Soleil). Le tissu se creuse. Si tu lances une bille (la Terre), elle va tourner autour du creux, non pas parce qu'elle est tirée, mais parce que le sol est penché.",
    
    detail: "Publiée par Einstein en 1915. Elle prédit que le temps ralentit près d'une masse forte (dilatation temporelle) et que la lumière est déviée par la gravité (lentilles gravitationnelles).",
    
    interaction: {
        question: "Que fait une masse à l'espace autour d'elle ?",
        options: [
            "Elle le repousse",
            "Elle le courbe/déforme",
            "Elle le réchauffe"
        ],
        correctIndex: 1,
        explanation: "La masse dit à l'espace comment se courber, et l'espace dit à la masse comment bouger."
    },

    dynamicContext: (s) => s.resources[ResourceType.MATTER] > 1e6 ? `Avec ${Math.floor(s.resources[ResourceType.MATTER])} unités de matière, tu commences à creuser significativement le tissu de ton univers virtuel.` : null
};
