
import React, { useMemo } from 'react';
import { generateSystem } from '../../../utils/proceduralGen';

interface Props { systemId: string; }

const SystemLayer: React.FC<Props> = ({ systemId }) => {
  const system = useMemo(() => generateSystem(systemId), [systemId]);

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-black">
        <div className="w-24 h-24 rounded-full shadow-[0_0_100px_rgba(253,224,71,0.5)] animate-pulse" 
             style={{ backgroundColor: system.color }}>
        </div>
        
        {system.planets.map((p, i) => (
            <div key={p.id} 
                className="absolute border border-white/10 rounded-full flex items-center justify-center animate-spin"
                style={{ width: `${p.coords.x * 2}px`, height: `${p.coords.x * 2}px`, animationDuration: `${10 + i * 5}s` }}
            >
                {/* Planet Body - Add terraforming check if we had state access, but strictly visual here */}
                <div className="absolute top-0 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg group hover:scale-150 transition-transform cursor-help"
                     style={{ backgroundColor: p.color }}>
                     <div className="hidden group-hover:block absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-cyan-500/50 p-2 rounded w-40 z-50">
                        <div className="text-cyan-300 font-bold text-xs">{p.name}</div>
                        <div className="text-[10px] text-slate-400">{p.type}</div>
                        <div className="text-[9px] text-slate-500 italic mt-1">{p.faction !== 'NONE' ? `Territoire: ${p.faction}` : 'Non revendiqué'}</div>
                     </div>
                </div>
            </div>
        ))}
    </div>
  );
};
export default SystemLayer;
