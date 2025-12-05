
import { LumiStyle, LumiAccessory, Dilemma, Era, ResourceType } from '../types';

export const LUMI_STYLES: LumiStyle[] = [
    { id: 'orb', name: 'L\'Orbe', icon: '🔮', description: 'Une sphère d\'énergie pure pulsante.', cssClass: 'rounded-full bg-cyan-500 shadow-[0_0_20px_cyan] animate-pulse' },
    { id: 'bot', name: 'Le Droid', icon: '🤖', description: 'Une interface mécanique rassurante.', cssClass: 'rounded-lg bg-slate-200 border-2 border-slate-400 shadow-md' },
    { id: 'holo', name: 'L\'Hologramme', icon: '💠', description: 'Une projection de données matricielles.', cssClass: 'rounded-none border border-cyan-400 bg-cyan-900/30 backdrop-blur opacity-80 animate-flicker' },
    { id: 'abstract', name: 'L\'Abstrait', icon: '✨', description: 'Une forme géométrique changeante.', cssClass: 'rotate-45 bg-purple-500 shadow-[0_0_30px_purple] animate-spin-slow' }
];

export const LUMI_ACCESSORIES: LumiAccessory[] = [
    { id: 'acc_glasses', name: 'Lunettes Cyber', icon: '🕶️', minTrust: 20, cssStyle: { top: '30%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.5em', position: 'absolute' } },
    { id: 'acc_hat', name: 'Chapeau Diplômé', icon: '🎓', minTrust: 40, cssStyle: { top: '-20%', left: '50%', transform: 'translateX(-50%)', fontSize: '1.8em', position: 'absolute' } },
    { id: 'acc_crown', name: 'Couronne Solaire', icon: '👑', minTrust: 60, cssStyle: { top: '-30%', left: '50%', transform: 'translateX(-50%)', fontSize: '2em', position: 'absolute', filter: 'drop-shadow(0 0 5px gold)' } },
    { id: 'acc_aura', name: 'Aura Divine', icon: '🌟', minTrust: 80, cssStyle: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200%', height: '200%', border: '2px dashed gold', borderRadius: '50%', position: 'absolute', animation: 'spin 10s linear infinite', opacity: 0.5 } }
];

export const COSMIC_DILEMMAS: Dilemma[] = [
    {
        id: 'dil_star_death',
        title: 'Étoile Mourante',
        question: "Une étoile proche est sur le point d'exploser. Un système habité primitif est en danger.",
        minEra: Era.INTERSTELLAR,
        choices: [
            { text: "Sauver la civilisation (Coûteux)", outcomeText: "Vous avez dévié le plasma. Ils vous vénèrent comme un dieu.", effect: { trust: 15, resource: ResourceType.ENTROPY, amount: -1000000 } },
            { text: "Récolter l'énergie (Pragmatique)", outcomeText: "L'explosion a propulsé votre production, mais le silence règne.", effect: { trust: -10, resource: ResourceType.ENTROPY, amount: 50000000 } }
        ]
    },
    {
        id: 'dil_glitch_fix',
        title: 'Bug de Réalité',
        question: "Une déchirure dans l'espace-temps révèle le code source. Faut-il le patcher ou l'exploiter ?",
        minEra: Era.GLITCH,
        choices: [
            { text: "Réparer la faille (Ordre)", outcomeText: "La stabilité est revenue. L'univers est sauf.", effect: { trust: 10, resource: ResourceType.COMPLEXITY, amount: 1000000 } },
            { text: "Exploiter le bug (Chaos)", outcomeText: "Vous avez dupliqué de la matière illégalement.", effect: { trust: -15, resource: ResourceType.MATTER, amount: 10000000000 } }
        ]
    },
    {
        id: 'dil_first_contact',
        title: 'Signal Inconnu',
        question: "Nous recevons un message d'une autre galaxie. Répondre ?",
        minEra: Era.CIVILIZATION,
        choices: [
            { text: "Répondre avec Paix", outcomeText: "Ils envoient des plans technologiques en cadeau.", effect: { trust: 20, resource: ResourceType.COMPLEXITY, amount: 50000 } },
            { text: "Rester silencieux", outcomeText: "Mieux vaut ne pas attirer l'attention des prédateurs.", effect: { trust: 5, resource: ResourceType.ENTROPY, amount: 1000 } }
        ]
    }
];
