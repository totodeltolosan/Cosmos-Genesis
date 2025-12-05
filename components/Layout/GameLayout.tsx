
import React from 'react';
import { ViewType, GameState } from '../../types';

interface GameLayoutProps {
  children: React.ReactNode; currentView: ViewType; onNavigate: (view: ViewType) => void; state: GameState;
}

const GameLayout: React.FC<GameLayoutProps> = ({ children, currentView, onNavigate, state }) => {
  const navItems: {id: ViewType, label: string, icon: string}[] = [
    { id: 'COCKPIT', label: 'Simulation', icon: '🚀' },
    { id: 'COURSE', label: 'Académie', icon: '🎓' },
    { id: 'EXPLORATION', label: 'Exploration', icon: '🗺️' },
    { id: 'MUSEUM', label: 'Musée', icon: '🏺' },
    { id: 'PROGRESS', label: 'Stats', icon: '📊' },
    { id: 'CODEX', label: 'Codex', icon: '📚' },
    { id: 'SETTINGS', label: 'Système', icon: '⚙️' },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-[#020617] text-slate-200 font-sans select-none">
      <div className="h-14 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between px-4 z-50 backdrop-blur-md">
        <div className="flex items-center gap-4">
           <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider hidden md:block">
             COSMOS <span className="text-slate-500">V3.1</span>
           </h1>
           {state.playerProfile && (
             <div className="flex items-center gap-2 text-xs bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
               <span className="text-cyan-400">PILOTE:</span> {state.playerProfile.name}
             </div>
           )}
        </div>
        <div className="flex gap-1 overflow-x-auto custom-scrollbar items-center">
          {navItems.map(item => (
            <button key={item.id} onClick={() => onNavigate(item.id)}
              className={`px-3 md:px-4 py-2 rounded flex items-center gap-2 text-sm transition-all whitespace-nowrap ${
                currentView === item.id ? 'bg-slate-800 text-cyan-300 border-b-2 border-cyan-500' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span>{item.icon}</span> <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
          
          {/* SPECIAL LUMI LINK BUTTON */}
          <button 
            onClick={() => onNavigate('LUMI_CHAT')}
            className={`ml-2 px-3 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-900/20 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-2 ${currentView === 'LUMI_CHAT' ? 'bg-cyan-500 text-black' : ''}`}
            title="Lien Neural L.U.M.I"
          >
            <span className="animate-pulse">🔮</span> <span className="hidden lg:inline text-xs font-bold uppercase">Oracle</span>
          </button>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">{children}</div>
    </div>
  );
};
export default GameLayout;
