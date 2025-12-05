
import { ResourceType, Era, Upgrade, LumiPersonalityType, GameState, ERAS_ORDER } from '../types';
import { calculateProduction as calcProd } from './production';
import { determineEra as detEra } from './eraProgression';
import { UPGRADES } from '../constants';

// Facade Exports
export const calculateProduction = calcProd;
export const determineEra = detEra;

export const analyzePlaystyle = (resources: { [key in ResourceType]: number }): LumiPersonalityType => {
    const total = resources.ENTROPY + resources.MATTER + resources.COMPLEXITY + 1;
    const eRatio = resources.ENTROPY / total;
    const mRatio = resources.MATTER / total;
    const cRatio = resources.COMPLEXITY / total;

    if (cRatio > 0.5) return 'SCIENTIST';
    if (mRatio > 0.5) return 'BUILDER';
    if (eRatio > 0.8) return 'WARRIOR';
    if (eRatio > 0.4 && cRatio > 0.3) return 'MYSTIC';
    return 'NEUTRAL';
};

// --- UI HELPERS (Refactoring) ---

export const getUpgradeCost = (u: Upgrade, currentLevel: number) => {
    return Math.floor(u.baseCost * Math.pow(u.multiplier, currentLevel));
};

export const canAfford = (u: Upgrade, currentLevel: number, resources: { [key in ResourceType]: number }) => {
    return resources[u.costType] >= getUpgradeCost(u, currentLevel);
};

export const getVisibleUpgrades = (state: GameState) => {
    return UPGRADES.map(u => {
        const eraIdx = ERAS_ORDER.indexOf(state.era);
        const reqEraIdx = ERAS_ORDER.indexOf(u.reqEra);
        
        // Hide upgrades 2 eras ahead
        if (reqEraIdx > eraIdx + 1) return null;

        let isLocked = false;
        let lockReason = "";

        // Era Lock
        if (reqEraIdx > eraIdx) {
            isLocked = true;
            lockReason = `Ère requise : ${u.reqEra}`;
        }
        // Parent Tech Lock
        if (u.parentUpgradeId) {
            const parentLevel = state.upgrades[u.parentUpgradeId] || 0;
            const reqLevel = u.reqParentLevel || 1;
            if (parentLevel < reqLevel) {
                 isLocked = true;
                 const parent = UPGRADES.find(p => p.id === u.parentUpgradeId);
                 lockReason = `Req: ${parent?.name || 'Technologie Inconnue'} (Niv ${reqLevel})`;
            }
        }
        return { upgrade: u, isLocked, lockReason };
    }).filter((i): i is { upgrade: Upgrade, isLocked: boolean, lockReason: string } => i !== null);
};
