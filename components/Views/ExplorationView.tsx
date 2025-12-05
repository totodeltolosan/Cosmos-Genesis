
import React from 'react';
import { GameState, Era, ERAS_ORDER } from '../../types';
import GalacticNavigator from '../Exploration/GalacticNavigator';

interface ExplorationViewProps { state: GameState; setState: React.Dispatch<React.SetStateAction<GameState>>; }

const ExplorationView: React.FC<ExplorationViewProps> = ({ state, setState }) => {
  const currentEraIndex = ERAS_ORDER.indexOf(state.era);
  const requiredEraIndex = ERAS_ORDER.indexOf(Era.STELLAR);
  const isUnlocked = currentEraIndex >= requiredEraIndex;

  if (!isUnlocked) {
    return (
      <div className="w-full h-full bg-[#020617] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="z-10 text-center max-w-lg p-8 bg-slate-900/80 border border-slate-700 rounded-2xl backdrop-blur-xl shadow-2xl">
          <div className="text-6xl mb-4 animate-pulse">🔭</div>
          <h2 className="text-3xl font-bold text-slate-200 mb-2 uppercase tracking-wider">Accès Restreint</h2>
          <p className="text-slate-400 mb-6">
            Les capteurs longue portée nécessitent l'ère <span className="text-yellow-400 font-bold">STELLAIRE</span> pour fonctionner.
            Continuez l'évolution de votre univers.
          </p>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
             <div className="bg-red-500 h-full w-1/3 animate-pulse"></div>
          </div>
          <div className="text-right text-xs text-red-400 mt-2 font-mono">OFFLINE</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-black text-white relative overflow-hidden">
       <GalacticNavigator state={state} setState={setState} />
    </div>
  );
};
export default ExplorationView;
