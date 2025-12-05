
import { KnowledgeNode, ResourceType } from '../../../types';

export const BIO_DNA: KnowledgeNode = {
    id: 'syn_dna',
    title: "Réplication ADN",
    tags: ['biologie', 'adn', 'copie', 'cellule', 'mutation'],
    
    fact: "Avant qu'une cellule se divise, elle doit copier tout son manuel d'instructions (ADN). Une enzyme ouvre l'ADN comme une fermeture éclair et copie chaque côté.",
    
    analogy: "Imagine un livre immense. Pour le copier, on détache les pages, on les met dans la photocopieuse, et on relie deux nouveaux livres. Parfois, la photocopieuse fait une faute de frappe : c'est une mutation.",
    
    detail: "L'enzyme s'appelle l'ADN Polymérase. Le processus est semi-conservatif : chaque nouvel ADN a un vieux brin et un brin neuf. C'est la base de l'hérédité.",
    
    interaction: {
        question: "Qu'est-ce qu'une mutation ?",
        options: [
            "Une erreur de copie",
            "Un super-pouvoir",
            "Un virus"
        ],
        correctIndex: 0,
        explanation: "C'est un changement accidentel dans le code génétique lors de la copie."
    },

    dynamicContext: (s) => s.playerProfile ? `Tout comme l'ADN définit un être vivant, ton profil définit ton rôle : ${s.playerProfile.name}, de classe ${s.playerProfile.classId}. C'est ton code génétique dans ce jeu.` : null
};
