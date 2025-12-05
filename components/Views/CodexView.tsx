
import React from 'react';
import { GameState, KnowledgeLevel } from '../../types';
import { CODEX_ENTRIES } from '../../data/codexData';

interface CodexViewProps { state: GameState; }

const CodexView: React.FC<CodexViewProps> = ({ state }) => {
  const unlockedEntries = CODEX_ENTRIES.filter(entry => entry.unlockCondition(Object.keys(state.upgrades)));
  const knowledgeLevel = state.playerProfile?.knowledgeLevel || KnowledgeLevel.INTERMEDIATE;

  return (
    <div className="w-full h-full bg-[#0b1021] p-4 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto pb-20">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 border-b border-purple-900/50 pb-4">
            ARCHIVES L.U.M.I
        </h2>
        
        <div className="space-y-6">
           {CODEX_ENTRIES.map(entry => {
               const isUnlocked = unlockedEntries.some(e => e.id === entry.id);
               
               return (
                   <div key={entry.id} className={`p-6 rounded-lg border transition-all duration-500 ${
                       isUnlocked 
                       ? 'bg-slate-900/80 border-cyan-900/50 shadow-lg hover:border-cyan-500/30' 
                       : 'bg-slate-950/30 border-slate-800/50 opacity-60'
                   }`}>
                       <div className="flex justify-between items-start mb-3">
                           <h4 className={`text-lg font-bold ${isUnlocked ? 'text-cyan-300' : 'text-slate-600'}`}>
                               {isUnlocked ? entry.title : 'Données Cryptées'}
                           </h4>
                           {isUnlocked && (
                               <span className="text-xs px-2 py-1 rounded border bg-slate-950 border-cyan-900 text-cyan-600">
                                   {entry.category}
                               </span>
                           )}
                       </div>
                       
                       <p className={`text-sm leading-relaxed ${isUnlocked ? 'text-slate-300' : 'text-slate-700 blur-[2px] select-none'}`}>
                           {isUnlocked 
                                ? entry.content[knowledgeLevel] 
                                : "Niveau d'accréditation insuffisant. Développez l'univers pour décrypter."}
                       </p>
                   </div>
               );
           })}
        </div>
      </div>
    </div>
  );
};

export default CodexView;
