
import React, { useState } from 'react';
import { GameState, Planet, ResourceType, ColonyType } from '../../../types';
import ArchaeologyModal from '../../Modals/ArchaeologyModal';

interface Props { planet: Planet; state: GameState; setState: React.Dispatch<React.SetStateAction<GameState>>; }

const PlanetActions: React.FC<Props> = ({ planet, state, setState }) => {
  const colony = state.exploration.colonies[planet.id];
  const [showArch, setShowArch] = useState(false);

  const handleColonize = (type: ColonyType) => {
      const cost = 10000;
      if (state.resources[ResourceType.MATTER] < cost) return;
      
      setState(prev => ({
          ...prev,
          resources: { ...prev.resources, [ResourceType.MATTER]: prev.resources[ResourceType.MATTER] - cost },
          exploration: { 
              ...prev.exploration, 
              colonies: { ...prev.exploration.colonies, [planet.id]: { level: 1, type, population: 100, happiness: 100 } } 
          },
          logs: [...prev.logs, { id: crypto.randomUUID(), timestamp: Date.now(), type: 'milestone', text: `Colonie ${type} établie sur ${planet.name}.` }]
      }));
  };

  const handleUpgradeColony = () => {
      if (!colony) return;
      const cost = 10000 * Math.pow(1.5, colony.level);
      if (state.resources[ResourceType.MATTER] < cost) return;

      setState(prev => ({
          ...prev,
          resources: { ...prev.resources, [ResourceType.MATTER]: prev.resources[ResourceType.MATTER] - cost },
          exploration: { 
              ...prev.exploration, 
              colonies: { ...prev.exploration.colonies, [planet.id]: { ...colony, level: colony.level + 1, population: colony.population + 100 } } 
          }
      }));
  };

  const onArtifactFound = (success: boolean) => {
      setShowArch(false);
      if (success) {
          setState(prev => ({
              ...prev,
              exploration: { ...prev.exploration, artifacts: [...prev.exploration.artifacts, 'art_' + Date.now()] }, // Unique ID
              logs: [...prev.logs, { id: crypto.randomUUID(), timestamp: Date.now(), type: 'discovery', text: `Artefact récupéré sur ${planet.name}!` }]
          }));
      }
  };

  if (!colony) {
      return (
          <div className="mt-4 border-t border-slate-800 pt-4 space-y-3">
              <h4 className="text-xs font-bold text-cyan-400 uppercase">Fonder une Colonie (10k Mat)</h4>
              <div className="grid grid-cols-3 gap-2">
                  <button onClick={() => handleColonize('MINING')} className="p-2 border border-slate-600 rounded hover:bg-blue-900/50 text-[10px]">⛏️ Minière</button>
                  <button onClick={() => handleColonize('RESEARCH')} className="p-2 border border-slate-600 rounded hover:bg-purple-900/50 text-[10px]">🔬 Science</button>
                  <button onClick={() => handleColonize('ENERGY')} className="p-2 border border-slate-600 rounded hover:bg-yellow-900/50 text-[10px]">⚡ Énergie</button>
              </div>
          </div>
      );
  }

  return (
    <div className="space-y-4 mt-4 border-t border-slate-800 pt-4">
        {showArch && <ArchaeologyModal onClose={() => setShowArch(false)} onFind={onArtifactFound} />}
        
        <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold text-green-400 uppercase">Colonie {colony.type} (Nv.{colony.level})</h4>
                <div className="text-xs">Pop: {colony.population}</div>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mb-2">
                <div className="h-full bg-pink-500 rounded-full" style={{ width: `${colony.happiness}%` }}></div>
            </div>
            <div className="text-[10px] text-slate-400 mb-2">Bonheur: {colony.happiness}%</div>
            
            <button onClick={handleUpgradeColony} className="w-full py-1 bg-slate-800 border border-slate-600 rounded hover:bg-slate-700 text-xs">
                Agrandir ({Math.floor(10000 * Math.pow(1.5, colony.level)).toLocaleString()} Mat)
            </button>
        </div>

        {planet.ruins !== 'NONE' && (
            <button onClick={() => setShowArch(true)} className="w-full py-2 bg-amber-700/80 hover:bg-amber-600 text-white rounded font-bold text-xs flex items-center justify-center gap-2">
                <span>🏺</span> Lancer Fouilles Archéo
            </button>
        )}
    </div>
  );
};
export default PlanetActions;
