
import { Galaxy, StarSystem, Planet, StarType, PlanetType, RuinType, ExoticResourceType, FactionId } from '../types';

const mulberry32 = (a: number) => {
    return () => {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
};

const colors = ['#f87171', '#fbbf24', '#60a5fa', '#a78bfa', '#34d399'];
const starTypes: StarType[] = ['RED_DWARF', 'YELLOW_DWARF', 'BLUE_GIANT', 'NEUTRON', 'BLACK_HOLE'];
const planetTypes: PlanetType[] = ['ROCKY', 'GAS_GIANT', 'ICE_GIANT', 'LAVA', 'OCEAN'];
const ruins: RuinType[] = ['NONE', 'NONE', 'NONE', 'TEMPLE', 'VAULT', 'SHIPWRECK'];
const resources: ExoticResourceType[] = ['NONE', 'NONE', 'NONE', 'DARK_MATTER', 'CHRONO_CRYSTALS', 'STELLAR_PLASMA'];
const factions: FactionId[] = ['NONE', 'EMPIRE', 'CONCLAVE', 'SYNDICATE'];

export const generateGalaxy = (id: string): Galaxy => {
    const seed = parseInt(id.split('_')[1] || '0');
    const rng = mulberry32(seed);
    const starCount = 50 + Math.floor(rng() * 50);
    const stars: StarSystem[] = [];

    for(let i=0; i<starCount; i++) {
        const dist = rng() * 400;
        const angle = rng() * Math.PI * 2 + (dist * 0.01);
        stars.push({
            id: `sys_${id}_${i}`,
            name: `Sys-${Math.floor(rng()*9000)+1000}`,
            type: starTypes[Math.floor(rng() * starTypes.length)],
            color: colors[Math.floor(rng() * colors.length)],
            coords: { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist },
            planets: [],
            faction: 'NONE' // Filled in detailed gen
        });
    }
    return { id, name: `Galaxie NGC-${seed}`, type: 'SPIRAL', color: '#fff', stars, coords: {x:0, y:0} };
};

export const generateSystem = (id: string): StarSystem => {
    const seed = parseInt(id.split('_').pop() || '0');
    const rng = mulberry32(seed);
    const starType = starTypes[Math.floor(rng() * starTypes.length)];
    const planetCount = 3 + Math.floor(rng() * 6);
    const systemFaction = factions[Math.floor(rng() * factions.length)];
    
    const planets: Planet[] = [];

    for(let i=0; i<planetCount; i++) {
        const hasLife = rng() > 0.8;
        planets.push({
            id: `pl_${id}_${i}`,
            name: `Planète ${String.fromCharCode(65+i)}`,
            type: planetTypes[Math.floor(rng() * planetTypes.length)],
            color: hasLife ? '#4ade80' : colors[Math.floor(rng() * colors.length)],
            coords: { x: (i+1) * 60, y: 0 },
            hasLife,
            civStage: hasLife ? (rng() > 0.5 ? 'Civilisation Primitive' : 'Microbien') : undefined,
            ruins: ruins[Math.floor(rng() * ruins.length)],
            rareResource: resources[Math.floor(rng() * resources.length)],
            faction: hasLife ? systemFaction : 'NONE'
        });
    }
    return { id, name: `Système Sigma-${seed}`, type: starType, color: '#fbbf24', planets, coords: {x:0, y:0}, faction: systemFaction };
};
