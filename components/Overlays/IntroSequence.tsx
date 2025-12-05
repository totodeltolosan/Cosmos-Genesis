
import React, { useState, useEffect } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const script = [
    "INITIALIZING QUANTUM KERNEL v2.0...",
    "LOADING COSMIC CONSTANTS...",
    "CHECKING VACUUM STABILITY... [OK]",
    "ESTABLISHING NEURAL LINK...",
    "CONNECTING TO L.U.M.I INTERFACE...",
    "CALIBRATING REALITY SENSORS...",
    "SYSTEM ONLINE.",
    "WAKE UP, PILOT."
  ];

  useEffect(() => {
    let delay = 0;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    script.forEach((line, index) => {
      delay += Math.random() * 600 + 400; // Random typing speed
      const t = setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === script.length - 1) {
          const finalT = setTimeout(onComplete, 2000);
          timeouts.push(finalT);
        }
      }, delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 font-mono cursor-pointer select-none" onClick={onComplete}>
      <div className="max-w-xl w-full">
        {lines.map((line, i) => (
          <div key={i} className="text-green-500 mb-2 text-sm md:text-base border-r-2 border-green-500 animate-typewriter w-fit pr-1 overflow-hidden whitespace-nowrap">
            <span className="text-slate-600 mr-3">[{String(i * 102).padStart(4, '0')}]</span>
            {line}
          </div>
        ))}
        <div className="animate-pulse text-green-500 mt-4 text-xl">_</div>
      </div>
      
      <div className="absolute bottom-10 text-slate-600 text-xs uppercase tracking-widest animate-pulse">
        Touchez l'écran pour initialisation rapide
      </div>

      <style>{`
        .animate-typewriter { animation: typing 0.5s steps(40, end); }
        @keyframes typing { from { width: 0 } to { width: 100% } }
      `}</style>
    </div>
  );
};

export default IntroSequence;
