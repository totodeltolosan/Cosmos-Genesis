
export type ParticleType = 'dust' | 'galaxy_star' | 'ship' | 'spark' | 'flare' | 'matrix_char' | 'debris' | 'comet';

export interface Particle {
    x: number; y: number; vx: number; vy: number;
    life: number; maxLife: number; color: string; size: number;
    type: ParticleType; char?: string; angle?: number; speed?: number;
}

export const createSpark = (particles: Particle[], cx: number, cy: number) => {
    const angle = Math.random() * Math.PI * 2, dist = Math.random() * 50;
    particles.push({
        x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 5, vy: (Math.random() - 0.5) * 5,
        life: 30 + Math.random() * 30, maxLife: 60,
        color: Math.random() > 0.5 ? '#a5b4fc' : '#67e8f9', size: 1 + Math.random() * 3, type: 'spark'
    });
};

export const createDebris = (particles: Particle[], cx: number, cy: number, radius: number) => {
    const angle = Math.random() * Math.PI * 2;
    // Spiral placement
    particles.push({
        x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        life: 100 + Math.random() * 100, maxLife: 200,
        color: '#94a3b8', size: 0.5 + Math.random(), type: 'debris'
    });
};

export const createComet = (particles: Particle[], w: number, h: number) => {
    const startX = Math.random() * w;
    particles.push({
        x: startX, y: 0, vx: (Math.random() - 0.5) * 2, vy: 4 + Math.random() * 4,
        life: 150, maxLife: 150, color: '#fff', size: 2, type: 'comet'
    });
};

export const createGalaxyStar = (particles: Particle[], cx: number, cy: number) => {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.pow(Math.random(), 1.5) * 600 + 20; // More density in center
    const spiralOffset = (dist * 0.015); 
    const armCount = 2;
    const armAngle = (Math.floor(Math.random() * armCount) * (Math.PI * 2 / armCount)) + spiralOffset;
    
    // Mix arm angle with random scatter
    const finalAngle = armAngle + (Math.random() - 0.5);

    particles.push({
        x: cx + Math.cos(finalAngle) * dist, y: cy + Math.sin(finalAngle) * (dist * 0.6),
        vx: 0, vy: 0, life: 100 + Math.random() * 100, maxLife: 200,
        color: dist < 100 ? '#fef3c7' : (Math.random() > 0.7 ? '#60a5fa' : '#e0f2fe'), 
        size: Math.random() * 2, type: 'galaxy_star'
    });
};

export const createMatrixChar = (particles: Particle[], w: number) => {
    const chars = "01XYZΩΠΣ⚡";
    particles.push({
        x: Math.random() * w, y: -20, vx: 0, vy: 5 + Math.random() * 10,
        life: 100, maxLife: 100, color: '#22c55e', size: 14 + Math.random() * 10,
        type: 'matrix_char', char: chars[Math.floor(Math.random() * chars.length)]
    });
};

export const updateParticles = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--; p.x += p.vx; p.y += p.vy;

        const opacity = Math.min(1, p.life / (p.maxLife * 0.2)); // Fade in/out logic
        ctx.globalAlpha = opacity; ctx.fillStyle = p.color;

        if (p.type === 'matrix_char') {
            ctx.font = `${p.size}px monospace`; ctx.fillText(p.char || '0', p.x, p.y);
        } else if (p.type === 'comet') {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
            // Tail
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 10, p.y - p.vy * 10);
            ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.stroke();
        } else if (p.type === 'spark') {
            ctx.beginPath(); ctx.moveTo(p.x, p.y-p.size*2); ctx.lineTo(p.x+p.size, p.y);
            ctx.lineTo(p.x, p.y+p.size*2); ctx.lineTo(p.x-p.size, p.y); ctx.fill();
        } else {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        }
        ctx.globalAlpha = 1;
        if (p.life <= 0) particles.splice(i, 1);
    }
};
