
import React, { useState } from 'react';
import { GameState } from '../types';
import { ACHIEVEMENTS } from '../constants';
import { getUpgradeCost, canAfford, getVisibleUpgrades } from '../utils/gameLogic';
import UpgradeCard from './subcomponents/UpgradeCard';
import AchievementCard from './subcomponents/AchievementCard';

interface ControlPanelProps {
  state: GameState;
  onBuyUpgrade: (id: string) => void;
  onManualClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ state, onBuyUpgrade, onManualClick }) => {
  const [activeTab, setActiveTab] = useState<'upgrades' | 'achievements'>('upgrades');
  
  const visibleUpgrades = getVisibleUpgrades(state);
  const unlockedCount = state.achievements.length;
  const isAutoClick = (state.upgrades['quantum_fluctuation'] || 0) >= 50;

  return (
    <div className="bg-slate-900/80 backdrop-blur-md border-r border-slate-700 w-full md:w-96 h-full flex flex-col p-4 shadow-2xl z-20 relative">
      <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono tracking-wider flex items-center gap-2">
        <span className="animate-pulse">●</span> CONTRÔLE
      </h2>
      
      <button onClick={onManualClick}
        className={`group relative w-full py-6 mb-4 rounded-xl shadow-lg text-white font-bold text-lg transition-all active:scale-95 border overflow-hidden shrink-0 ${isAutoClick ? 'bg-emerald-900/50 border-emerald-500' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 border-indigo-400/30'}`}
      >
        <span className="relative z-10 flex flex-col items-center">
          <span className="flex items-center gap-2">
            {isAutoClick && <span className="animate-spin">⚙️</span>} DÉCLENCHER ENTROPIE
          </span>
          <span className="text-xs bg-black/30 px-2 py-1 rounded-full text-yellow-300 mt-1 shadow-inner font-mono">
            +1 Md {isAutoClick && <span className="text-emerald-300">| AUTO (10/s)</span>}
          </span>
        </span>
      </button>

      <div className="flex space-x-1 mb-4 bg-slate-950 p-1 rounded-lg shrink-0">
          {(['upgrades', 'achievements'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded text-xs font-bold transition-all ${activeTab === tab ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}
            >
               {tab === 'upgrades' ? 'EVOLUTION' : `SUCCÈS [${unlockedCount}]`}
            </button>
          ))}
      </div>

      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar space-y-3 pb-20">
        {activeTab === 'upgrades' ? (
            visibleUpgrades.length === 0 ? 
                <div className="text-center p-8 text-slate-600 italic">Analyse des données en cours...</div> 
                : visibleUpgrades.map(({ upgrade, isLocked, lockReason }) => (
                    <UpgradeCard 
                        key={upgrade.id} 
                        upgrade={upgrade} 
                        count={state.upgrades[upgrade.id] || 0}
                        cost={getUpgradeCost(upgrade, state.upgrades[upgrade.id] || 0)} 
                        affordable={canAfford(upgrade, state.upgrades[upgrade.id] || 0, state.resources)} 
                        onBuy={onBuyUpgrade}
                        isLocked={isLocked} 
                        lockReason={lockReason}
                        currentResourceAmount={state.resources[upgrade.costType]}
                    />
                ))
        ) : (
            ACHIEVEMENTS.map(ach => <AchievementCard key={ach.id} achievement={ach} isUnlocked={state.achievements.includes(ach.id)} />)
        )}
      </div>
    </div>
  );
};
export default ControlPanel;
