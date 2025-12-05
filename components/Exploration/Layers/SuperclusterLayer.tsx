
import React from 'react';

interface Props { onSelect: (id: string) => void; }

const SuperclusterLayer: React.FC<Props> = ({ onSelect }) => {
  // Deterministic random dots for "Universe Web"
  const clusters = Array.from({length: 40}, (_, i) => ({
      id: `sc_${i}`,
      x: 10 + Math.random() * 80, // %
      y: 10 + Math.random() * 80, // %
      size: 2 + Math.random() * 6
  }));

  return (
    <div className="w-full h-full relative animate-fade-in">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        {clusters.map(c => (
            <button key={c.id}
                onClick={() => onSelect(c.id)}
                style={{ left: `${c.x}%`, top: `${c.y}%`, width: `${c.size}vw`, height: `${c.size}vw` }}
                className="absolute rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-150 hover:bg-cyan-300 hover:shadow-[0_0_50px_cyan] transition-all duration-500 group"
            >
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 whitespace-nowrap bg-black/80 px-2 rounded">
                    Amas {c.id}
                </span>
            </button>
        ))}
    </div>
  );
};
export default SuperclusterLayer;
