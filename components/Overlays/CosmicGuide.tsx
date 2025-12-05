
import React, { useState, useEffect } from 'react';
import { Mission, GameState, KnowledgeLevel, DilemmaChoice } from '../../types';
import { MISSIONS } from '../../data/missionsData';
import { LUMI_STYLES, LUMI_ACCESSORIES } from '../../data/lumiData';

interface CosmicGuideProps { 
    state: GameState; 
    onResolveDilemma?: (choice: DilemmaChoice) => void; 
}

const CosmicGuide: React.FC<CosmicGuideProps> = ({ state, onResolveDilemma }) => {
  const [currentMission, setCurrentMission] = useState<Mission | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const activeMissions = state.activeMissions;
  const knowledgeLevel = state.playerProfile?.knowledgeLevel || KnowledgeLevel.INTERMEDIATE;
  const lumiStyle = LUMI_STYLES.find(s => s.id === state.lumiStyleId) || LUMI_STYLES[0];
  const activeDilemma = state.activeDilemma;

  // Find latest active mission to display
  useEffect(() => {
    const mId = activeMissions[activeMissions.length - 1];
    const mission = MISSIONS.find(m => m.id === mId);
    // If mission changed or if we just loaded and there is a mission, show it
    if (mission && mission.id !== currentMission?.id) {
        setCurrentMission(mission);
        setIsVisible(true);
    }
  }, [activeMissions, currentMission]);

  // Determine Accessory
  const bestAccessory = LUMI_ACCESSORIES
    .filter(acc => state.unlockedAccessories.includes(acc.id))
    .sort((a,b) => b.minTrust - a.minTrust)[0];

  const handleHelpClick = () => {
      const mId = activeMissions[activeMissions.length - 1];
      const mission = MISSIONS.find(m => m.id === mId);
      if (mission) {
          setCurrentMission(mission);
          setIsVisible(true);
      }
  };

  // --- DILEMMA RENDER ---
  if (activeDilemma) {
      return (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-slate-900 border-2 border-red-500 rounded-xl p-6 max-w-lg w-full shadow-2xl animate-scale-up">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 flex items-center justify-center ${lumiStyle.cssClass} text-2xl relative`}>
                        {lumiStyle.icon}
                        {bestAccessory && <div style={bestAccessory.cssStyle}>{bestAccessory.icon}</div>}
                    </div>
                    <div>
                        <h3 className="text-red-400 font-bold uppercase tracking-widest text-sm">Alerte Prioritaire</h3>
                        <h2 className="text-2xl font-bold text-white">{activeDilemma.title}</h2>
                    </div>
                </div>
                
                <p className="text-slate-300 mb-8 text-lg italic border-l-4 border-slate-700 pl-4">
                    "{activeDilemma.question}"
                </p>

                <div className="grid gap-3">
                    {activeDilemma.choices.map((choice, idx) => (
                        <button key={idx} onClick={() => onResolveDilemma && onResolveDilemma(choice)}
                            className="p-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-400 rounded text-left transition-all group"
                        >
                            <span className="font-bold text-cyan-300 group-hover:text-white block mb-1">{choice.text}</span>
                            <span className="text-xs text-slate-500 group-hover:text-slate-400">Conséquence estimée : ???</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
      );
  }

  // --- MINIMIZED STATE (HINT BUTTON) ---
  if (!isVisible || !currentMission) {
      return (
          <div className="absolute bottom-24 right-4 z-40 pointer-events-auto">
              <button 
                onClick={handleHelpClick}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-500/50 hover:scale-110 transition-transform ${lumiStyle.cssClass}`}
                title="Demander conseil à L.U.M.I"
              >
                  <span className="text-xl filter drop-shadow">{lumiStyle.icon}</span>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
              </button>
          </div>
      );
  }

  // --- FULL GUIDE RENDER ---
  return (
    <div className="absolute bottom-24 right-4 z-40 max-w-sm w-full animate-slide-up pointer-events-none">
      <div className="bg-slate-900/95 border-l-4 border-cyan-500 rounded-r-lg shadow-2xl p-4 backdrop-blur-xl pointer-events-auto relative overflow-hidden">
        
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

        <div className="flex items-start gap-4 relative z-10">
          <div className="relative shrink-0 flex flex-col items-center">
             {/* Avatar + Accessory */}
             <div className={`w-14 h-14 flex items-center justify-center mb-2 ${lumiStyle.cssClass} relative`}>
                <span className="text-2xl filter drop-shadow-md z-10">{lumiStyle.icon}</span>
                {bestAccessory && <div style={bestAccessory.cssStyle} className="z-20">{bestAccessory.icon}</div>}
             </div>
             <span className="text-[10px] text-cyan-500 font-mono tracking-tighter mb-1">L.U.M.I</span>
             
             {/* Trust Bar */}
             <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700" title={`Confiance: ${state.lumiTrust}%`}>
                 <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-1000" style={{ width: `${state.lumiTrust}%` }}></div>
             </div>
          </div>
          
          <div className="flex-1">
             <div className="flex justify-between items-start mb-2">
                 <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Objectif en cours</h4>
                 <button onClick={() => setIsVisible(false)} className="text-slate-500 hover:text-white transition-colors">✕</button>
             </div>

             <div className="bg-slate-950/60 p-3 rounded-br-xl rounded-tl-xl border border-slate-800/50 mb-2">
                <p className="text-slate-200 text-sm leading-relaxed italic font-medium font-serif">
                  "{currentMission.dialogueStart[knowledgeLevel]}"
                </p>
             </div>
             
             <div className="text-[10px] text-cyan-300 font-mono">
                {currentMission.description}
             </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes flicker { 0% { opacity: 0.8; } 5% { opacity: 0.5; } 10% { opacity: 0.8; } }
        .animate-flicker { animation: flicker 2s infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes slide-up { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-up { animation: scaleUp 0.3s ease-out; }
      `}</style>
    </div>
  );
};
export default CosmicGuide;
