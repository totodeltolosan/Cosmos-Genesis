
import { useEffect, useRef } from 'react';
import { Era } from '../types';
import { updateParticles, createSpark, createMatrixChar, createGalaxyStar, createComet, Particle } from '../utils/canvas/particles';
import { drawSolarSystem, drawNetwork, drawEarlyUniverse, drawStellarEra } from '../utils/canvas/drawers';
import { drawMultiverse, drawHyperspace, drawFractal, drawSourceCode } from '../utils/canvas/drawersMeta';

export const useCanvasAnimation = (canvasRef: React.RefObject<HTMLCanvasElement | null>, era: Era) => {
  const eraRef = useRef(era);

  useEffect(() => {
    eraRef.current = era;
  }, [era]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.01;
      const curEra = eraRef.current;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // --- Background ---
      ctx.fillStyle = curEra === Era.GLITCH ? '#001100' : curEra === Era.VOID ? '#000' : '#020617';
      if (curEra === Era.INFINITE) ctx.fillStyle = `hsl(${time * 10}, 20%, 5%)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- Scene Logic ---
      if ([Era.PLANCK, Era.INFLATION, Era.NUCLEOSYNTHESIS, Era.RECOMBINATION, Era.DARK_AGES].includes(curEra)) {
          drawEarlyUniverse(ctx, cx, cy, time);
          if (Math.random() < 0.3) createSpark(particles, cx, cy);
      }
      else if (curEra === Era.STELLAR) {
          drawStellarEra(ctx, cx, cy, time);
          if (Math.random() < 0.1) createSpark(particles, cx, cy);
      }
      else if ([Era.PLANETARY, Era.BIOLOGICAL, Era.CIVILIZATION].includes(curEra)) {
          drawSolarSystem(ctx, cx, cy, time, curEra !== Era.PLANETARY, curEra === Era.CIVILIZATION);
          if (Math.random() < 0.02) createComet(particles, canvas.width, canvas.height);
      }
      else if ([Era.INTERSTELLAR, Era.UNIVERSAL].includes(curEra)) {
          drawNetwork(ctx, cx, cy, time, canvas.width, canvas.height, curEra === Era.UNIVERSAL);
      }
      else if (curEra === Era.GALACTIC) {
          for(let k=0; k<5; k++) createGalaxyStar(particles, cx, cy);
          ctx.fillStyle = '#000'; ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI*2); ctx.fill();
          ctx.strokeStyle = '#fff'; ctx.lineWidth = 1; ctx.stroke();
      }
      else if (curEra === Era.MULTIVERSE) drawMultiverse(ctx, cx, cy, time);
      else if (curEra === Era.HYPERSPACE) drawHyperspace(ctx, cx, cy, time);
      else if (curEra === Era.FRACTAL) drawFractal(ctx, cx, cy, time);
      else if (curEra === Era.SOURCE_CODE) drawSourceCode(ctx, cx, cy, time, canvas.width);
      else if (curEra === Era.GLITCH && Math.random() > 0.2) createMatrixChar(particles, canvas.width);

      updateParticles(ctx, particles);
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []); // Mounted once, era updated via Ref
};
