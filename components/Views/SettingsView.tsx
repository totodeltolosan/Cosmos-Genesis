
import React from 'react';
import { GameState, Era, ERAS_ORDER } from '../../types';

interface SettingsViewProps {
    state?: GameState;
    onReset?: () => void;
    onPrestige?: () => void;
    // Add audio setter if needed, but state update is passed via App usually. 
    // Here we need to update state.audioSettings.
    // For simplicity, I assume the parent component handles state updates via a setState passed down or similar. 
    // Wait, App.tsx doesn't pass setState to SettingsView props in the interface.
    // I will use a local update approach if prop is missing, but App needs update.
    // Correction: App.tsx passes `state` but not `setState`. 
    // I need to assume App.tsx passes a way to update settings or I dispatch an event.
    // Best practice: The interface should accept an onUpdate callback.
    // Since I can't change App.tsx props easily without breaking things, I'll rely on the fact that I CAN change App.tsx.
}

// Updating Props to include onUpdateSettings
interface ExtendedSettingsProps extends SettingsViewProps {
    onUpdateSettings?: (settings: any) => void; 
}

const SettingsView: React.FC<ExtendedSettingsProps> = ({ state, onReset, onPrestige, onUpdateSettings }) => {
  if (!state) return null;

  const currentEraIndex = ERAS_ORDER.indexOf(state.era);
  const prestigeEraIndex = ERAS_ORDER.indexOf(Era.INTERSTELLAR);
  const canPrestige = currentEraIndex >= prestigeEraIndex;
  
  const currentPrestige = state.prestigeLevel || 0;
  
  const handleVolumeChange = (type: 'master' | 'music' | 'sfx', value: number) => {
      if (onUpdateSettings) {
          onUpdateSettings({ 
              ...state.audioSettings, 
              [`${type}Volume`]: value 
          });
      }
  };

  const toggleMute = () => {
      if (onUpdateSettings) {
          onUpdateSettings({ 
              ...state.audioSettings, 
              muted: !state.audioSettings.muted 
          });
      }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0b1021] p-4 overflow-y-auto">
      <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 w-full max-w-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Paramètres Système</h2>
        
        <div className="space-y-8">
           {/* AUDIO SECTION */}
           <div className="space-y-4">
               <h3 className="text-lg font-bold text-cyan-400">Audio</h3>
               
               <div className="flex items-center gap-4">
                   <button onClick={toggleMute} className={`p-2 rounded border ${state.audioSettings.muted ? 'bg-red-900 border-red-500 text-white' : 'bg-slate-800 border-slate-600 text-cyan-400'}`}>
                       {state.audioSettings.muted ? '🔇 MUTE' : '🔊 ON'}
                   </button>
                   <span className="text-xs text-slate-500">Global</span>
               </div>

               <div className="space-y-3">
                   <div className="flex flex-col gap-1">
                       <div className="flex justify-between text-xs text-slate-300"><span>Volume Principal</span><span>{(state.audioSettings.masterVolume * 100).toFixed(0)}%</span></div>
                       <input 
                            type="range" min="0" max="1" step="0.05" 
                            value={state.audioSettings.masterVolume} 
                            onChange={(e) => handleVolumeChange('master', parseFloat(e.target.value))}
                            className="accent-cyan-500 w-full" 
                        />
                   </div>
                   <div className="flex flex-col gap-1">
                       <div className="flex justify-between text-xs text-slate-300"><span>Ambiance / Musique</span><span>{(state.audioSettings.musicVolume * 100).toFixed(0)}%</span></div>
                       <input 
                            type="range" min="0" max="1" step="0.05" 
                            value={state.audioSettings.musicVolume} 
                            onChange={(e) => handleVolumeChange('music', parseFloat(e.target.value))}
                            className="accent-purple-500 w-full" 
                        />
                   </div>
                   <div className="flex flex-col gap-1">
                       <div className="flex justify-between text-xs text-slate-300"><span>Effets Sonores (SFX)</span><span>{(state.audioSettings.sfxVolume * 100).toFixed(0)}%</span></div>
                       <input 
                            type="range" min="0" max="1" step="0.05" 
                            value={state.audioSettings.sfxVolume} 
                            onChange={(e) => handleVolumeChange('sfx', parseFloat(e.target.value))}
                            className="accent-green-500 w-full" 
                        />
                   </div>
               </div>
           </div>

           {/* PRESTIGE SECTION */}
           <div className="pt-4 border-t border-slate-800">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Cycle Cosmique (Prestige)</h3>
                <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-200">Niveau Actuel</span>
                        <span className="font-bold text-xl text-white">{currentPrestige}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-purple-200">Bonus Production</span>
                        <span className="font-bold text-green-400">+{currentPrestige * 50}%</span>
                    </div>
                    
                    <button 
                        onClick={onPrestige}
                        disabled={!canPrestige}
                        className={`w-full py-3 rounded font-bold uppercase tracking-wider transition-all border ${
                            canPrestige 
                            ? 'bg-purple-600 hover:bg-purple-500 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                            : 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed'
                        }`}
                    >
                        {canPrestige ? `Initier le Big Crunch (+${50}%)` : `Verrouillé (Req: ${Era.INTERSTELLAR})`}
                    </button>
                </div>
           </div>

           {/* HARD RESET */}
           <div className="pt-4 border-t border-slate-800">
             <button 
                onClick={() => { if(confirm("Attention: Ceci effacera TOUTE la progression. Êtes-vous sûr ?")) onReset?.(); }}
                className="w-full py-2 bg-red-900/30 text-red-400 border border-red-900 rounded hover:bg-red-900/50 text-sm"
             >
               Réinitialiser Complètement (Hard Reset)
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
