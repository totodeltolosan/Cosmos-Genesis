
import React from 'react';
import { Upgrade, ResourceType } from '../../types';

interface UpgradeCardProps {
  upgrade: Upgrade;
  count: number;
  cost: number;
  affordable: boolean;
  onBuy: (id: string) => void;
  isLocked: boolean;
  lockReason?: string;
  currentResourceAmount?: number; // New prop to calculate progress
}

const UpgradeCard: React.FC<UpgradeCardProps> = ({ 
    upgrade, count, cost, affordable, onBuy, isLocked, lockReason, currentResourceAmount 
}) => {
  const resourceName = upgrade.costType === ResourceType.ENTROPY ? 'Entropie' : upgrade.costType === ResourceType.MATTER ? 'Matière' : 'Complexité';
  
  if (isLocked) {
    return (
        <div className="relative p-3 rounded border border-cyan-900/30 bg-slate-950/40 overflow-hidden group">
             {/* Scanning Animation Effect */}
             <div className="absolute top-0 left-0 w-full h-[500%] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan pointer-events-none z-0"></div>
             
             {/* Grid Background */}
             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

             <div className="relative z-10 flex flex-col h-full justify-between">
                 <div>
                    <div className="flex justify-between items-start mb-1 opacity-70">
                        <span className="font-bold flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
                            <span className="text-lg grayscale">{upgrade.icon}</span> En Recherche...
                        </span>
                        <span className="text-[10px] text-slate-600">🔒</span>
                    </div>
                    <div className="text-sm font-bold text-slate-500 mb-1">{upgrade.name}</div>
                    
                    <div className="bg-red-900/20 border border-red-900/30 text-red-400/80 px-2 py-1 rounded text-[10px] mb-2 inline-block">
                        PRÉREQUIS : {lockReason}
                    </div>
                 </div>

                 {/* Projected Cost Display */}
                 <div className="mt-2 pt-2 border-t border-slate-800/50 flex justify-between items-center text-xs font-mono text-slate-500">
                    <span>Coût estimé :</span>
                    <span className="text-slate-400">{cost.toLocaleString()} {resourceName}</span>
                 </div>
             </div>
             
             <style>{`
                @keyframes scan { 0% { transform: translateY(-50%); } 100% { transform: translateY(0%); } }
                .animate-scan { animation: scan 3s linear infinite; }
             `}</style>
        </div>
    );
  }

  // Calculate affordability progress
  const progressPercent = currentResourceAmount ? Math.min(100, (currentResourceAmount / cost) * 100) : 0;

  return (
    <div className={`group relative p-3 rounded border transition-all duration-300 overflow-hidden ${
      affordable 
        ? 'bg-slate-800 border-slate-600 hover:border-cyan-400/60 hover:bg-slate-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-[2px]' 
        : 'bg-slate-900/50 border-slate-800'
    }`}>
      {/* Affordability Progress Bar Background (for unaffordable items) */}
      {!affordable && (
          <div 
            className="absolute bottom-0 left-0 h-1 bg-cyan-900/50 transition-all duration-500 ease-out" 
            style={{ width: `${progressPercent}%` }}
          />
      )}

      <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-1 relative z-10">
        <span className={`font-bold flex items-center gap-2 transition-colors ${affordable ? 'text-slate-200 group-hover:text-cyan-100' : 'text-slate-500'}`}>
          <span className="text-xl filter drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300">{upgrade.icon}</span>
          {upgrade.name}
        </span>
        <span className="text-[10px] uppercase bg-slate-950 px-1.5 py-0.5 rounded text-cyan-600 font-bold border border-slate-800">
          Niv. {count}
        </span>
      </div>

      <p className="text-xs text-slate-400 mb-3 leading-relaxed relative z-10">{upgrade.description}</p>

      <div className="relative z-10">
        <button
            disabled={!affordable}
            onClick={() => onBuy(upgrade.id)}
            className={`w-full py-1.5 px-3 rounded text-sm font-medium flex justify-between items-center transition-all duration-300 border ${
            affordable 
                ? 'bg-cyan-950/40 text-cyan-300 border-cyan-800/50 shadow-[0_0_10px_rgba(34,211,238,0.05)] hover:bg-cyan-900/60 hover:border-cyan-400/80 hover:text-cyan-100 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:scale-[1.02] active:scale-95' 
                : 'bg-slate-950 text-slate-600 cursor-not-allowed border-transparent'
            }`}
        >
            <span>Améliorer</span>
            <div className="flex flex-col items-end leading-none">
                <span>{cost.toLocaleString()} {resourceName.substring(0,3)}</span>
                {/* Show percentage needed if not affordable */}
                {!affordable && (
                    <span className="text-[9px] text-cyan-700 font-mono mt-0.5">
                        {progressPercent.toFixed(0)}%
                    </span>
                )}
            </div>
        </button>
      </div>
    </div>
  );
};

export default UpgradeCard;
