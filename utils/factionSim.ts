
import { FactionId, Faction } from '../types';

export const FACTION_DEFS: { [id in FactionId]?: Faction } = {
    'EMPIRE': { id: 'EMPIRE', name: 'Hégémonie de Fer', color: '#ef4444', description: 'Militaristes expansionnistes.', power: 50, expansion: 0.8 },
    'CONCLAVE': { id: 'CONCLAVE', name: 'Conclave Psionique', color: '#a855f7', description: 'Mystiques technologiques.', power: 40, expansion: 0.4 },
    'SYNDICATE': { id: 'SYNDICATE', name: 'Syndicat Libre', color: '#fbbf24', description: 'Commerçants opportunistes.', power: 30, expansion: 0.6 }
};

export const simulateFactions = (factions: { [id in FactionId]?: Faction } | undefined): { updatedFactions: { [id in FactionId]?: Faction }, event?: string } => {
    const current = factions || FACTION_DEFS;
    const updates = { ...current };
    let event = undefined;

    // Simulate growth
    (Object.keys(updates) as FactionId[]).forEach(fid => {
        if (fid === 'NONE') return;
        const fac = updates[fid]!;
        
        // Growth logic
        if (Math.random() < 0.1) {
            fac.power += fac.expansion;
        }

        // Random Event Gen
        if (Math.random() < 0.005) {
            if (fid === 'EMPIRE') event = "L'Hégémonie mobilise sa flotte.";
            if (fid === 'CONCLAVE') event = "Le Conclave a découvert une relique.";
            if (fid === 'SYNDICATE') event = "Le Syndicat ouvre une nouvelle route commerciale.";
        }
    });

    return { updatedFactions: updates, event };
};
