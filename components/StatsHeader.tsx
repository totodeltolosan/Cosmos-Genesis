
import React from 'react';
import { GameState, ResourceType } from '../types';

interface StatsHeaderProps {
  state: GameState;
}

const StatsHeader: React.FC<StatsHeaderProps> = ({ state }) => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 flex flex-col md:flex-row justify-between items-start pointer-events-none z-10 gap-2">
      {/* Resources */}
      <div className="flex gap-4 pointer-events-auto bg-slate-950/80 p-2 rounded-lg backdrop-blur border border-slate-800 shadow-lg">
        <div className="text-center min-w-[80px]">
            <div className="text-[10px] text-purple-400 uppercase tracking-wider font-bold">Entropie</div>
            <div className="text-lg font-mono text-white font-bold drop-shadow-md">{Math.floor(state.resources[ResourceType.ENTROPY]).toLocaleString()}</div>
            <div className="text-[10px] text-green-400 font-mono">+{state.production[ResourceType.ENTROPY].toExponential(1)}/s</div>
        </div>
        
        <div className="w-px bg-slate-700"></div>

        {state.resources[ResourceType.MATTER] > 0 || state.production[ResourceType.MATTER] > 0 ? (
            <div className="text-center min-w-[80px]">
                <div className="text-[10px] text-blue-400 uppercase tracking-wider font-bold">Matière</div>
                <div className="text-lg font-mono text-white font-bold">{state.resources[ResourceType.MATTER].toFixed(0)}</div>
                <div className={`${state.production[ResourceType.MATTER] >= 0 ? 'text-green-400' : 'text-red-400'} text-[10px] font-mono`}>
                    {state.production[ResourceType.MATTER] >= 0 ? '+' : ''}{state.production[ResourceType.MATTER].toFixed(1)}/s
                </div>
            </div>
        ) : null}

        <div className="w-px bg-slate-700"></div>

        {state.resources[ResourceType.COMPLEXITY] > 0 || state.production[ResourceType.COMPLEXITY] > 0 ? (
            <div className="text-center min-w-[80px]">
                <div className="text-[10px] text-amber-400 uppercase tracking-wider font-bold">Savoir</div>
                <div className="text-lg font-mono text-white font-bold">{state.resources[ResourceType.COMPLEXITY].toFixed(0)}</div>
                 <div className="text-[10px] text-green-400 font-mono">+{state.production[ResourceType.COMPLEXITY].toFixed(1)}/s</div>
            </div>
        ) : null}
      </div>

      {/* Center - Stability */}
      <div className="pointer-events-auto bg-slate-950/80 p-2 rounded-lg backdrop-blur border border-slate-800 flex flex-col items-center w-32">
          <span className="text-[9px] text-slate-400 uppercase">Stabilité Système</span>
          <div className="w-full h-2 bg-slate-800 rounded-full mt-1 overflow-hidden">
              <div className={`h-full transition-all duration-1000 ${state.stability > 50 ? 'bg-green-500' : 'bg-red-500'}`} style={{width: `${state.stability}%`}}></div>
          </div>
          <span className="text-xs font-mono font-bold text-white">{state.stability.toFixed(1)}%</span>
      </div>

      {/* Right - Era & Age */}
      <div className="text-right bg-slate-950/50 p-2 rounded-lg backdrop-blur border border-white/5">
        <div className="text-2xl font-light text-white tracking-widest uppercase mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {state.era}
        </div>
        <div className="text-xs font-mono text-cyan-500">
            T+ {(state.universeAge).toFixed(3)} Mds Années
        </div>
      </div>
    </div>
  );
};

export default StatsHeader;
