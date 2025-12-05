
import { KnowledgeNode, ResourceType, Era } from '../../../types';

export const MATH_CHAOS: KnowledgeNode = {
    id: 'syn_chaos',
    title: "Théorie du Chaos",
    tags: ['maths', 'désordre', 'papillon', 'imprévisible'],
    fact: "Des systèmes simples peuvent devenir imprévisibles. 'Le battement d'ailes d'un papillon au Brésil peut provoquer une tornade au Texas'.",
    analogy: "Impossible de prévoir la météo à 10 jours. Une minuscule erreur au début change tout à la fin.",
    detail: "Attracteurs étranges. Sensibilité aux conditions initiales.",
    interaction: { question: "Le futur est-il écrit ?", options: ["Oui", "Non, imprévisible", "Facile"], correctIndex: 1, explanation: "Chaos déterministe." },
    dynamicContext: (s) => "Chaque clic que tu as fait a changé l'histoire de ton univers."
};

export const MATH_FRACTAL: KnowledgeNode = {
    id: 'syn_fractal',
    title: "Fractales",
    tags: ['maths', 'forme', 'infini', 'zoom', 'nature'],
    fact: "Une forme géométrique qui se répète à l'infini quand on zoome. Le tout ressemble à une partie.",
    analogy: "Un chou romanesco, un flocon de neige, tes poumons. C'est le motif de la nature.",
    detail: "Benoit Mandelbrot. Dimension non-entière (ex: 1.5). Permet de compresser des images.",
    interaction: { question: "Si on zoome ?", options: ["C'est flou", "On voit le même motif", "C'est noir"], correctIndex: 1, explanation: "Auto-similarité." },
    dynamicContext: (s) => s.era === Era.FRACTAL ? "Tu es dans l'ère Fractale. Regarde l'écran : le motif est infini." : null
};

export const MATH_FIBONACCI: KnowledgeNode = {
    id: 'syn_fibonacci',
    title: "Suite de Fibonacci",
    tags: ['maths', 'suite', 'lapin', 'nombre', 'or'],
    fact: "0, 1, 1, 2, 3, 5, 8, 13... Chaque nombre est la somme des deux précédents.",
    analogy: "C'est le code de croissance des plantes. Le nombre de pétales d'une fleur est souvent un nombre de Fibonacci.",
    detail: "Lié au Nombre d'Or (Phi). Modélise la croissance des populations de lapins.",
    interaction: { question: "Après 5 et 8 ?", options: ["10", "12", "13"], correctIndex: 2, explanation: "5 + 8 = 13." },
    dynamicContext: (s) => null
};

export const MATH_IMAGINARY: KnowledgeNode = {
    id: 'syn_imaginary',
    title: "Nombres Imaginaires",
    tags: ['maths', 'i', 'racine', 'complexe'],
    fact: "Des nombres qui n'existent pas dans le réel mais qui permettent de calculer. i² = -1.",
    analogy: "Comme une dimension cachée sur le côté de la ligne des nombres. Indispensable pour l'électricité.",
    detail: "Nombres Complexes (a + ib). Utilisés en mécanique quantique.",
    interaction: { question: "Racine de -1 ?", options: ["Impossible", "i", "0"], correctIndex: 1, explanation: "Imaginaire." },
    dynamicContext: (s) => null
};

export const MATH_ZERO_ABS: KnowledgeNode = {
    id: 'syn_zero_abs',
    title: "Zéro Absolu",
    tags: ['froid', 'kelvin', 'atome', 'immobile'],
    fact: "-273.15°C (0 Kelvin). La température où les atomes arrêtent totalement de bouger.",
    analogy: "Le silence thermique total. On ne peut jamais l'atteindre parfaitement.",
    detail: "À cette température, la matière devient bizarre (Supraconductivité, Superfluidité).",
    interaction: { question: "Ça bouge encore ?", options: ["Oui", "Non, figé", "Ça explose"], correctIndex: 1, explanation: "Plus d'énergie cinétique." },
    dynamicContext: (s) => s.resources[ResourceType.ENTROPY] < 100 ? "Au début, ton univers était proche de cet état figé." : "Avec toute ton énergie, tu es loin du zéro absolu."
};
