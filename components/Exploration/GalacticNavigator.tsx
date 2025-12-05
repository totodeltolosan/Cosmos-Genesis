
import React from 'react';
import { GameState, ZoomLevel } from '../../types';
import SuperclusterLayer from './Layers/SuperclusterLayer';
import GalaxyLayer from './Layers/GalaxyLayer';
import SystemLayer from './Layers/SystemLayer';
import EntityDetails from './Sidebars/EntityDetails';

interface Props { state: GameState; setState: React.Dispatch<React.SetStateAction<GameState>>; }

const GalacticNavigator: React.FC<Props> = ({ state, setState }) => {
  const { currentZoom, selectedId, path } = state.exploration;

  const handleSelect = (id: string, type: 'SC' | 'GAL' | 'SYS') => {
      let nextZoom: ZoomLevel = 'UNIVERSE';
      if (type === 'SC') nextZoom = 'GALAXY';
      if (type === 'GAL') nextZoom = 'SYSTEM';
      
      setState(prev => ({
          ...prev, exploration: {
              ...prev.exploration, selectedId: id, currentZoom: nextZoom, path: [...prev.exploration.path, id]
          }
      }));
  };

  const navigateToPathIndex = (index: number) => {
      // index -1 = Root (Universe)
      const newPath = index === -1 ? [] : path.slice(0, index + 1);
      const newId = newPath.length > 0 ? newPath[newPath.length - 1] : null;
      
      let newZoom: ZoomLevel = 'UNIVERSE';
      if (newPath.length === 0) newZoom = 'UNIVERSE';
      else if (newPath.length === 1) newZoom = 'GALAXY';
      else if (newPath.length === 2) newZoom = 'SYSTEM';

      setState(prev => ({
          ...prev, exploration: {
               ...prev.exploration, currentZoom: newZoom, selectedId: newId, path: newPath
          }
      }));
  };

  const getLabelForId = (id: string, idx: number) => {
      if (idx === 0) return `Amas ${id.split('_')[1] || id}`;
      if (idx === 1) return `Galaxie NGC-${id.split('_')[1] || id}`;
      return `Système ${id}`;
  };

  return (
    <div className="w-full h-full flex relative font-sans">
       <div className="flex-1 relative bg-gradient-to-br from-black via-[#050510] to-[#0a0a20] overflow-hidden cursor-crosshair">
           
           {/* Interactive Breadcrumb */}
           <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 items-start">
               <div className="flex items-center gap-1 bg-slate-950/80 px-3 py-2 rounded-lg border border-slate-700 backdrop-blur shadow-xl">
                    <button 
                        onClick={() => navigateToPathIndex(-1)}
                        className={`text-xs font-bold uppercase tracking-wider transition-colors ${path.length === 0 ? 'text-white cursor-default' : 'text-cyan-400 hover:text-cyan-200 hover:underline'}`}
                    >
                        UNIVERS
                    </button>
                    
                    {path.map((id, idx) => (
                        <React.Fragment key={id}>
                            <span className="text-slate-600 text-[10px]">▶</span>
                            <button 
                                onClick={() => navigateToPathIndex(idx)}
                                className={`text-xs font-mono max-w-[120px] truncate transition-colors ${idx === path.length - 1 ? 'text-white cursor-default font-bold' : 'text-cyan-400 hover:text-cyan-200 hover:underline'}`}
                            >
                                {getLabelForId(id, idx)}
                            </button>
                        </React.Fragment>
                    ))}
               </div>
               
               <div className="px-2 py-0.5 bg-black/40 rounded text-[9px] text-slate-500 font-mono border border-slate-800/50 ml-1">
                   ZOOM: {currentZoom}
               </div>
           </div>

           {/* Layers */}
           {(currentZoom === 'UNIVERSE' || currentZoom === 'SUPERCLUSTER') && <SuperclusterLayer onSelect={(id) => handleSelect(id, 'SC')} />}
           {currentZoom === 'GALAXY' && <GalaxyLayer galaxyId={selectedId || '0'} onSelect={(id) => handleSelect(id, 'GAL')} />}
           {currentZoom === 'SYSTEM' && <SystemLayer systemId={selectedId || '0'} />}
       </div>

       <EntityDetails selectedId={selectedId} zoom={currentZoom} state={state} setState={setState} />
    </div>
  );
};
export default GalacticNavigator;
