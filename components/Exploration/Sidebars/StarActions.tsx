
import React from 'react';
import { GameState, StarSystem, ResourceType, MegaType } from '../../../types';

interface Props { star: StarSystem; state: GameState; setState: React.Dispatch<React.SetStateAction<GameState>>; }

const StarActions: React.FC<Props> = ({ star, state, setState }) => {
  const structure = state.exploration.megastructures[star.id]; // Undefined or MegaDetails
  
  const handleBuild = (type: MegaType) => {
      const stage = structure ? structure.stage : 0;
      if (stage >= 3) return;

      const costs = [1e6, 1e9, 1e12]; // Cost for Stage 1, 2, 3
      const cost = costs[stage];
      
      if (state.resources[ResourceType.MATTER] < cost) return;

      setState(prev => ({
          ...prev,
          resources: { ...prev.resources, [ResourceType.MATTER]: prev.resources[ResourceType.MATTER] - cost },
          exploration: { 
              ...prev.exploration, 
              megastructures: { ...prev.exploration.megastructures, [star.id]: { type, stage: (stage + 1) as any } } 
          },
          logs: [...prev.logs, { id: crypto.randomUUID(), timestamp: Date.now(), type: 'milestone', text: `Chantier ${type} : Étape ${stage + 1} terminée.` }]
      }));
  };

  const getStageName = (s: number) => s === 0 ? "Non débuté" : s === 1 ? "Armature" : s === 2 ? "Panneaux" : "Opérationnel";

  return (
    <div className="space-y-4 mt-4 border-t border-slate-800 pt-4">
        <h4 className="text-xs font-bold text-yellow-400 uppercase">Ingénierie Stellaire</h4>
        
        {(!structure || structure.type === 'DYSON_SPHERE') && (
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
                <div className="flex justify-between mb-2">
                    <span className="font-bold text-xs text-white">Sphère de Dyson</span>
                    <span className="text-[10px] text-yellow-500">{structure ? getStageName(structure.stage) : '0/3'}</span>
                </div>
                {(!structure || structure.stage < 3) ? (
                    <button onClick={() => handleBuild('DYSON_SPHERE')} className="w-full py-2 bg-yellow-900/40 border border-yellow-600 rounded text-yellow-200 text-xs hover:bg-yellow-900/60">
                        Construire Étape {structure ? structure.stage + 1 : 1}
                    </button>
                ) : <div className="text-center text-green-400 text-xs font-bold">✅ ACTIVE</div>}
            </div>
        )}

        {(!structure || structure.type === 'STELLAR_ENGINE') && (
            <div className="bg-slate-900 p-3 rounded border border-slate-700 opacity-80">
                <div className="flex justify-between mb-2">
                    <span className="font-bold text-xs text-white">Moteur Stellaire</span>
                    <span className="text-[10px] text-red-500">{structure ? getStageName(structure.stage) : '0/3'}</span>
                </div>
                {(!structure || structure.stage < 3) ? (
                    <button onClick={() => handleBuild('STELLAR_ENGINE')} className="w-full py-2 bg-red-900/40 border border-red-600 rounded text-red-200 text-xs hover:bg-red-900/60">
                        Construire Étape {structure ? structure.stage + 1 : 1}
                    </button>
                ) : <div className="text-center text-green-400 text-xs font-bold">✅ ACTIF</div>}
            </div>
        )}
    </div>
  );
};
export default StarActions;
