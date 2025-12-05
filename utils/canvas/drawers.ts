
export const drawEarlyUniverse = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number) => {
    // Primordial Soup Turbulence
    for (let i = 0; i < 8; i++) {
        const t = time * (0.5 + i * 0.1);
        ctx.beginPath();
        ctx.ellipse(cx, cy, 100 + Math.sin(t)*20, 100 + Math.cos(t*0.8)*20, t, 0, Math.PI*2);
        ctx.strokeStyle = `rgba(129, 140, 248, ${0.1 - i*0.01})`;
        ctx.lineWidth = 2 + i;
        ctx.stroke();
    }
    // Core
    const pulse = Math.sin(time * 8) * 5;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60 + pulse);
    g.addColorStop(0, '#fff'); g.addColorStop(0.4, '#6366f1'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, 60 + pulse, 0, Math.PI * 2); ctx.fill();
};

export const drawStellarEra = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number) => {
    // 1. Background Stars Zoom Effect (Parallax)
    const maxDist = Math.max(cx, cy) * 1.5;
    for (let i = 0; i < 60; i++) {
        const angle = i * 23; // Pseudo-random angle
        const speed = 20 + (i % 5) * 10;
        // Distance increases with time (zoom out), modulo to loop
        const dist = ((time * speed) + (i * 30)) % maxDist;
        const opacity = Math.min(1, dist / 150) * 0.5; // Fade in from center
        
        const x = cx + Math.cos(angle) * dist;
        const y = cy + Math.sin(angle) * dist;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath(); ctx.arc(x, y, (i % 2) + 0.5, 0, Math.PI * 2); ctx.fill();
    }

    // 2. Main Sun Breathing Effect
    const zoom = 1 + Math.sin(time * 0.8) * 0.03; // Subtle pulse

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(zoom, zoom);

    // Corona
    for(let i=0; i<36; i++) {
        const angle = (Math.PI*2/36)*i + time*0.1;
        const len = 140 + Math.sin(time*5 + i*13) * 10;
        ctx.beginPath(); ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle)*len, Math.sin(angle)*len);
        ctx.strokeStyle = `rgba(251, 146, 60, ${0.1 + Math.sin(time*2+i)*0.05})`;
        ctx.lineWidth = 4; ctx.stroke();
    }
    // Core Sun
    const g = ctx.createRadialGradient(0, 0, 40, 0, 0, 120);
    g.addColorStop(0, '#fff7ed'); g.addColorStop(0.3, '#f97316'); g.addColorStop(1, 'rgba(234, 88, 12, 0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 120, 0, Math.PI*2); ctx.fill();

    ctx.restore();
};

export const drawSolarSystem = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number, hasLife: boolean, hasCiv: boolean) => {
    // Sun
    const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, 50);
    g.addColorStop(0, '#fde047'); g.addColorStop(1, 'rgba(234, 179, 8, 0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, 50, 0, Math.PI * 2); ctx.fill();

    // Asteroid Belt
    const asteroidCount = 150;
    const beltDist = 190;
    for(let i=0; i<asteroidCount; i++) {
        const a = (i * 123.4) + time * 0.05; // deterministic randomness
        const d = beltDist + (Math.sin(i * 78.9) * 20);
        ctx.fillStyle = '#64748b';
        ctx.fillRect(cx + Math.cos(a)*d, cy + Math.sin(a)*d * 0.8, 2, 2);
    }

    // Planets
    const planets = [
        { dist: 90, r: 5, s: 1.5, c: '#9ca3af', ring: false }, 
        { dist: 140, r: 9, s: 0.8, c: hasLife ? '#3b82f6' : '#a16207', life: hasLife },
        { dist: 260, r: 16, s: 0.3, c: '#eab308', ring: true }, 
        { dist: 380, r: 14, s: 0.15, c: '#38bdf8', ring: false }
    ];

    planets.forEach((p, i) => {
        const a = time * p.s + (i * 10);
        const px = cx + Math.cos(a) * p.dist; 
        const py = cy + Math.sin(a) * (p.dist * 0.8);
        
        // Orbit line
        ctx.beginPath(); ctx.ellipse(cx, cy, p.dist, p.dist * 0.8, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1; ctx.stroke();

        // Planet Body
        ctx.beginPath(); ctx.arc(px, py, p.r, 0, Math.PI * 2); ctx.fillStyle = p.c; ctx.fill();
        
        // Effects
        if (p.life) { // Atmosphere glow
            ctx.shadowColor = '#4ade80'; ctx.shadowBlur = 10 + Math.sin(time*2)*5;
            ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 1; ctx.stroke(); ctx.shadowBlur = 0;
        }
        if (p.ring) {
            ctx.beginPath(); ctx.ellipse(px, py, p.r * 2.5, p.r * 0.5, -0.4, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'; ctx.lineWidth = 2; ctx.stroke();
        }
        // Satellites for Civ
        if (hasCiv) {
            const satA = time * -2;
            ctx.fillStyle = '#fff'; ctx.fillRect(px + Math.cos(satA)*(p.r+5), py + Math.sin(satA)*(p.r+5), 2, 2);
        }
    });
};

export const drawNetwork = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number, w: number, h: number, isUniv: boolean) => {
    const nodeCount = isUniv ? 30 : 12;
    // Deterministic nodes based on index
    const nodes = Array.from({length: nodeCount}, (_, i) => {
        const a = (i / nodeCount) * Math.PI * 2 + Math.sin(time*0.1 + i);
        const d = (isUniv ? 600 : 250) * (0.5 + Math.sin(i*99)*0.4);
        return { x: cx + Math.cos(a)*d, y: cy + Math.sin(a)*d*0.8 };
    });

    // Connections
    nodes.forEach((n, i) => {
        nodes.slice(i+1).forEach(n2 => {
            const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
            if(dist < (isUniv ? 400 : 200)) {
                ctx.strokeStyle = isUniv ? `rgba(139,92,246,0.15)` : `rgba(34,211,238,0.15)`;
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y); ctx.stroke();

                // Traffic packets
                const packetTime = (time * (isUniv ? 2 : 1) + (n.x + n2.x)*0.01) % 1;
                const px = n.x + (n2.x - n.x) * packetTime;
                const py = n.y + (n2.y - n.y) * packetTime;
                ctx.fillStyle = isUniv ? '#fff' : '#22d3ee';
                ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI*2); ctx.fill();
            }
        });
        // Node
        ctx.beginPath(); ctx.arc(n.x, n.y, isUniv ? 3 : 6, 0, Math.PI*2);
        ctx.fillStyle = isUniv ? '#8b5cf6' : '#0ea5e9'; ctx.fill();
    });
};
