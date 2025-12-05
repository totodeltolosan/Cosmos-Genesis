
import { PlayerClass, PlayerAvatar } from '../types';

export const PLAYER_CLASSES: PlayerClass[] = [
    { 
        id: 'theorist', 
        title: 'Le Théoricien', 
        description: 'Vous cherchez à comprendre les lois fondamentales. Votre curiosité débloque le savoir plus vite.', 
        bonus: '+20% Production de Complexité', 
        icon: '📐' 
    },
    { 
        id: 'architect', 
        title: 'L\'Architecte', 
        description: 'Vous aimez bâtir des structures durables. Vous manipulez la matière avec aisance.', 
        bonus: '+20% Production de Matière', 
        icon: '🏗️' 
    },
    { 
        id: 'pioneer', 
        title: 'Le Pionnier', 
        description: 'Toujours plus loin, toujours plus vite. L\'énergie pure est votre moteur.', 
        bonus: '+20% Production d\'Entropie', 
        icon: '🚀' 
    },
    { 
        id: 'admin', 
        title: 'L\'Administrateur', 
        description: 'Vous voyez l\'univers comme un système à optimiser. Équilibre parfait.', 
        bonus: '+5% Toutes productions', 
        icon: '💻' 
    }
];

export const PLAYER_AVATARS: PlayerAvatar[] = [
    // Male
    { id: 'm1', icon: '👨‍🚀', gender: 'MALE' },
    { id: 'm2', icon: '👨‍🔬', gender: 'MALE' },
    { id: 'm3', icon: '🤴', gender: 'MALE' },
    { id: 'm4', icon: '🧔', gender: 'MALE' },
    { id: 'm5', icon: '👨‍💻', gender: 'MALE' },
    
    // Female
    { id: 'f1', icon: '👩‍🚀', gender: 'FEMALE' },
    { id: 'f2', icon: '👩‍🔬', gender: 'FEMALE' },
    { id: 'f3', icon: '👸', gender: 'FEMALE' },
    { id: 'f4', icon: '👩‍🎤', gender: 'FEMALE' },
    { id: 'f5', icon: '👩‍💻', gender: 'FEMALE' },

    // NB / Other
    { id: 'n1', icon: '🧑‍🚀', gender: 'NB' },
    { id: 'n2', icon: '🧝', gender: 'NB' },
    { id: 'n3', icon: '🧙', gender: 'NB' },
    { id: 'n4', icon: '🧛', gender: 'NB' },

    // Robot
    { id: 'r1', icon: '🤖', gender: 'ROBOT' },
    { id: 'r2', icon: '👽', gender: 'ROBOT' },
    { id: 'r3', icon: '👾', gender: 'ROBOT' },
];
