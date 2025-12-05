
import { KnowledgeNode } from '../../../types';

export const COSMO_STARS: KnowledgeNode = {
    id: 'syn_stars',
    title: "Vie des Étoiles",
    tags: ['étoile', 'soleil', 'fusion', 'supernova', 'trou noir'],
    
    fact: "Une étoile est une boule de gaz (Hydrogène) en équilibre entre la gravité (qui veut l'écraser) et l'explosion nucléaire (qui veut la faire éclater).",
    
    analogy: "C'est comme une cocotte-minute géante. La gravité met le couvercle, et la fusion nucléaire chauffe l'intérieur. Quand il n'y a plus de carburant, la cocotte explose ou s'effondre.",
    
    detail: "Les petites étoiles meurent doucement (Naines blanches). Les grosses explosent en Supernova et deviennent des étoiles à neutrons ou des trous noirs. Nous sommes faits de poussière d'étoiles (carbone, fer) créée dans leur cœur.",
    
    interaction: {
        question: "Que devient une très grosse étoile à sa mort ?",
        options: [
            "Une planète",
            "Une Supernova puis un Trou Noir",
            "Elle s'éteint doucement"
        ],
        correctIndex: 1,
        explanation: "L'effondrement est si violent qu'il déchire l'espace-temps."
    },

    dynamicContext: (s) => (s.upgrades['star_ignition'] || 0) > 0 ? `Tu as allumé ${s.upgrades['star_ignition']} générations d'étoiles. Chacune d'elles est une usine à atomes.` : "L'univers est encore sombre. Tu n'as pas encore allumé les fourneaux stellaires."
};
