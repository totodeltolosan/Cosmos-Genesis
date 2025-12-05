
import React, { useMemo } from 'react';
import { generateGalaxy } from '../../../utils/proceduralGen';

interface Props { galaxyId: string; onSelect: (id: string) => void; }

const GalaxyLayer: React.FC<Props> = ({ galaxyId, onSelect }) => {
  const galaxy = useMemo(() => generateGalaxy(galaxyId), [galaxyId]);

  return (
    <div className="w-full h-full flex items-center justify-center relative animate-spin-slow">
        {/* Core */}
        <div className="absolute w-32 h-32 bg-white rounded-full blur-3xl opacity-20"></div>
        <div className="relative w-[80vh] h-[80vh] rounded-full border border-white/5">
            {galaxy.stars.map(star => (
                <button key={star.id} onClick={() => onSelect(star.id)}
                    style={{ 
                        transform: `translate(${star.coords.x}px, ${star.coords.y}px)`,
                        backgroundColor: star.color 
                    }}
                    className="absolute w-2 h-2 rounded-full hover:scale-[4] hover:z-50 transition-transform shadow-[0_0_5px_currentColor] cursor-pointer group"
                >
                    <div className="hidden group-hover:block absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 p-2 rounded w-32 z-50 pointer-events-none">
                        <div className="text-xs font-bold text-white">{star.name}</div>
                        <div className="text-[10px] text-slate-400">{star.type}</div>
                    </div>
                </button>
            ))}
        </div>
        <style>{`.animate-spin-slow { animation: spin 120s linear infinite; }`}</style>
    </div>
  );
};
export default GalaxyLayer;
