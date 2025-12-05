
import React, { useEffect, useRef } from 'react';
import { GameState, SubjectCategory } from '../../types';
import { COSMIC_COURSE } from '../../data/courseData';

interface Props { state: GameState; }

const SUBJECTS: {id: SubjectCategory, label: string, color: string}[] = [
    { id: 'MATH', label: 'Maths', color: '#3b82f6' },
    { id: 'PHYSICS', label: 'Physique', color: '#a855f7' },
    { id: 'BIO', label: 'Biologie', color: '#ec4899' },
    { id: 'CS', label: 'Info', color: '#10b981' },
    { id: 'HISTORY', label: 'Histoire', color: '#f59e0b' },
    { id: 'GEO', label: 'Géo', color: '#06b6d4' },
    { id: 'FRENCH', label: 'Lettres', color: '#f43f5e' },
    { id: 'PSYCH', label: 'Psycho', color: '#d946ef' },
    { id: 'CIVIC', label: 'Civique', color: '#6366f1' },
    { id: 'QI', label: 'Logique', color: '#84cc16' }
];

const ProgressView: React.FC<Props> = ({ state }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Calculate stats
  const stats = SUBJECTS.map(subj => {
      const lessons = COSMIC_COURSE.filter(l => l.subject === subj.id);
      if (lessons.length === 0) return { ...subj, value: 0 };
      const completed = lessons.filter(l => state.completedLessons.includes(l.id)).length;
      return { ...subj, value: completed / lessons.length };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rot = 0;
    let animId: number;

    const draw = () => {
        if (!canvas) return;
        const w = canvas.width = canvas.parentElement?.clientWidth || 800;
        const h = canvas.height = canvas.parentElement?.clientHeight || 600;
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(w, h) * 0.35;

        ctx.clearRect(0, 0, w, h);
        
        rot += 0.005;

        // Draw Web
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1;
        for (let r = 0.2; r <= 1; r += 0.2) {
            ctx.beginPath();
            for (let i = 0; i <= stats.length; i++) {
                const angle = (Math.PI * 2 * i) / stats.length + rot;
                const x = cx + Math.cos(angle) * radius * r;
                const y = cy + Math.sin(angle) * radius * r;
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        // Draw Axes
        stats.forEach((s, i) => {
            const angle = (Math.PI * 2 * i) / stats.length + rot;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            
            ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y);
            ctx.strokeStyle = '#475569'; ctx.stroke();

            // Label
            const lx = cx + Math.cos(angle) * (radius + 40);
            const ly = cy + Math.sin(angle) * (radius + 20);
            ctx.fillStyle = s.color;
            ctx.font = 'bold 14px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(s.label, lx, ly);
            
            const pct = Math.round(s.value * 100);
            ctx.fillStyle = '#94a3b8';
            ctx.font = '10px monospace';
            ctx.fillText(`${pct}%`, lx, ly + 15);
        });

        // Draw Data Polygon
        ctx.beginPath();
        stats.forEach((s, i) => {
            const angle = (Math.PI * 2 * i) / stats.length + rot;
            const val = Math.max(0.1, s.value); // min size for visibility
            const x = cx + Math.cos(angle) * radius * val;
            const y = cy + Math.sin(angle) * radius * val;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = 'rgba(34, 211, 238, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw Points
        stats.forEach((s, i) => {
            const angle = (Math.PI * 2 * i) / stats.length + rot;
            const val = Math.max(0.1, s.value);
            const x = cx + Math.cos(angle) * radius * val;
            const y = cy + Math.sin(angle) * radius * val;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
        });

        animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [stats]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020617] relative">
        <h2 className="absolute top-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            PROFIL COGNITIF
        </h2>
        <div className="w-full h-full max-w-4xl max-h-[80vh]">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    </div>
  );
};
export default ProgressView;
