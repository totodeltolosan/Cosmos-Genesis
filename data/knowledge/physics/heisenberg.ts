
import { KnowledgeNode } from '../../../types';

export const PHYS_HEISENBERG: KnowledgeNode = {
    id: 'syn_heisenberg',
    title: "Principe d'Incertitude",
    tags: ['physique', 'quantique', 'heisenberg', 'incertitude', 'position', 'vitesse'],
    
    fact: "En mécanique quantique, il est impossible de connaître simultanément et avec une précision parfaite la position et la vitesse d'une particule (comme un électron). Plus on connaît l'une, moins on connaît l'autre.",
    
    analogy: "Imagine prendre une photo d'une voiture de course. Si tu utilises une vitesse d'obturation rapide, l'image est nette (tu sais OÙ elle est), mais tu ne vois pas le flou de mouvement (tu ne sais pas à quelle VITESSE elle va). Si tu fais une pose longue, tu vois le flou (vitesse), mais la voiture est une traînée floue (position inconnue).",
    
    detail: "Formulé par Werner Heisenberg en 1927. Inégalité : Δx · Δp ≥ ℏ/2. Ce n'est pas un défaut de nos instruments, c'est une propriété fondamentale de la nature ondulatoire de la matière.",
    
    interaction: {
        question: "Si je connais exactement la position d'un électron...",
        options: [
            "Je connais aussi sa vitesse",
            "Sa vitesse devient totalement inconnue",
            "L'électron disparaît"
        ],
        correctIndex: 1,
        explanation: "La précision sur la position détruit l'information sur la vitesse (impulsion)."
    },

    dynamicContext: (s) => s.upgrades['quantum_fluctuation'] ? "C'est grâce à ce principe que tu as pu créer tes premières 'Fluctuations Quantiques' : en empruntant de l'énergie au vide pour une durée très courte." : null
};
