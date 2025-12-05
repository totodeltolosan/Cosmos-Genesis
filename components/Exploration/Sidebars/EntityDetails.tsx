
import React, { useMemo } from 'react';
import { ZoomLevel, GameState } from '../../../types';
import { generateSystem, generateGalaxy } from '../../../utils/proceduralGen';
import PlanetActions from './PlanetActions';
import StarActions from './StarActions';

interface Props { selectedId: string | null; zoom: ZoomLevel; state: GameState; setState: React.Dispatch<React.SetStateAction<GameState>>; }

const EntityDetails: React.FC<Props> = ({ selectedId, zoom, state, setState }) => {
  const entityData = useMemo(() => {
      if (!selectedId) return null;
      if (zoom === 'SYSTEM') return generateSystem(selectedId.split('_').slice(0,3).join('_')); // Needs full system ID
      return null;
  }, [selectedId, zoom]);

  const selectedPlanet = useMemo(() => {
      if (zoom === 'SYSTEM' && selectedId && entityData) return entityData.planets.find(p => p.id === selectedId);
      return null;
  }, [selectedId, zoom, entityData]);

  if (!selectedId) return null;

  return (
    <div className="w-80 bg-slate-950/95 border-l border-slate-800 p-6 flex flex-col backdrop-blur-md animate-slide-in z-30 h-full overflow-y-auto custom-scrollbar">
       <h3 className="text-xs font-mono text-slate-500 uppercase mb-2">Scanner: {zoom}</h3>
       <div className="text-2xl font-bold text-cyan-400 mb-4 break-all">{selectedPlanet ? selectedPlanet.name : zoom === 'GALAXY' ? 'Galaxie' : 'Système'}</div>
       
       <div className="space-y-2 mb-6 text-sm">
           <div className="flex justify-between border-b border-slate-800 pb-1"><span className="text-slate-400">ID</span><span className="font-mono text-yellow-500">{selectedId}</span></div>
           <div className="flex justify-between border-b border-slate-800 pb-1"><span className="text-slate-400">Type</span><span className="text-white">{selectedPlanet?.type || 'N/A'}</span></div>
           {selectedPlanet?.rareResource !== 'NONE' && (
               <div className="flex justify-between border-b border-slate-800 pb-1"><span className="text-purple-400">Ressource</span><span className="text-purple-200 font-bold">{selectedPlanet?.rareResource}</span></div>
           )}
       </div>

       {/* Sub-Modules */}
       {selectedPlanet && <PlanetActions planet={selectedPlanet} state={state} setState={setState} />}
       {zoom === 'SYSTEM' && !selectedPlanet && entityData && <StarActions star={entityData} state={state} setState={setState} />}
       
       <style>{`@keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } } .animate-slide-in { animation: slide-in 0.3s ease-out; }`}</style>
    </div>
  );
};
export default EntityDetails;
