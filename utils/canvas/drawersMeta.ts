
export const drawMultiverse = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number) => {
    const universes = 5;
    for(let i=0; i<universes; i++) {
        const angle = (time * 0.2) + (i * Math.PI * 2 / universes);
        const dist = 150 + Math.sin(time * 0.5 + i) * 50;
        const x = cx + Math.cos(angle) * dist;
        const y = cy + Math.sin(angle) * dist;
        
        // Bubble
        const r = 60 + Math.sin(time + i*2)*10;
        const g = ctx.createRadialGradient(x,y, 0, x,y, r);
        g.addColorStop(0, `hsla(${i*60}, 70%, 50%, 0.1)`);
        g.addColorStop(1, `hsla(${i*60}, 70%, 50%, 0.4)`);
        
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill();
        ctx.strokeStyle = `hsla(${i*60}, 100%, 70%, 0.8)`; ctx.lineWidth = 2; ctx.stroke();

        // Mini Galaxy inside
        ctx.save(); ctx.translate(x, y); ctx.rotate(time * 2);
        ctx.fillStyle = '#fff';
        for(let j=0; j<3; j++) ctx.fillRect(10+j*5, 0, 2, 2);
        ctx.restore();
    }
};

export const drawHyperspace = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number) => {
    ctx.lineWidth = 2;
    const layers = 8;
    for (let i = 0; i < layers; i++) {
        const t = (time * 0.5 + i * 0.2) % 1;
        const scale = Math.pow(t, 3) * 800;
        const alpha = 1 - t;
        
        if (scale > 1) {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(time * 0.2 * (i%2 ? 1 : -1));
            ctx.strokeStyle = `hsla(${time * 50 + i * 30}, 100%, 50%, ${alpha})`;
            ctx.strokeRect(-scale/2, -scale/2, scale, scale);
            ctx.restore();
        }
    }
};

export const drawFractal = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number) => {
    // Recursive squares visual
    const drawSquare = (x: number, y: number, s: number, depth: number) => {
        if (depth <= 0 || s < 5) return;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.2 + depth * 0.5);
        ctx.strokeStyle = `hsl(${(time * 20 + depth * 40)%360}, 80%, 60%)`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-s/2, -s/2, s, s);
        ctx.restore();
        
        const newS = s * 0.6;
        if(depth > 1) {
            drawSquare(x - s/2, y - s/2, newS, depth - 1);
            drawSquare(x + s/2, y + s/2, newS, depth - 1);
        }
    };
    drawSquare(cx, cy, 300, 4);
};

export const drawSourceCode = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number, w: number) => {
    ctx.fillStyle = 'rgba(0, 255, 0, 0.15)'; 
    ctx.font = '16px monospace';
    const lines = ["while(universe.exists())", "  entropy++;", "  if (player.isGod) break;", "  render(reality);", "  // TODO: Fix gravity bug"];
    
    // Background stream
    for(let i=0; i<20; i++) {
        const y = (time * 50 + i * 40) % 800;
        ctx.fillText(lines[i % lines.length], 50 + Math.sin(i)*50, y);
        ctx.fillText(lines[i % lines.length], w - 300 + Math.cos(i)*50, y + 20);
    }

    // Center Big Text
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.font = '24px monospace';
    ctx.fillText("SYSTEM ACCESS: GRANTED", cx, cy);
    ctx.font = '12px monospace';
    ctx.fillText("Rewrite pending...", cx, cy + 30);
};
