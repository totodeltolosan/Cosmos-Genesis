
import React from 'react';
import { GameState } from '../../types';

interface Props { state: GameState; }

const ARTIFACT_DB = [
    { id: 'art_cube', name: 'Cube de Données', icon: '🧊', bonus: '+5% Savoir' },
    { id: 'art_engine', name: 'Moteur Ancien', icon: '⚙️', bonus: '+10% Matière' },
    { id: 'art_tablet', name: 'Tablette Prophétique', icon: '📜', bonus: '+50 Entropie/s' },
    { id: 'art_weapon', name: 'Arme à Plasma', icon: '🔫', bonus: 'Puissance Militaire' },
];

const MuseumView: React.FC<Props> = ({ state }) => {
  const artifacts = state.exploration.artifacts;

  return (
    <div className="w-full h-full bg-[#0b1021] p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 border-b border-amber-900 pb-4">Musée Galactique</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ARTIFACT_DB.map(art => {
                const found = artifacts.includes(art.id); // In a real scenario, ID would match generation
                // Since procedural gen makes random IDs, we simulate finding "Types" of artifacts here or check count
                const isUnlocked = artifacts.length > ARTIFACT_DB.indexOf(art); // Simple heuristic for demo

                return (
                    <div key={art.id} className={`p-6 rounded-xl border flex flex-col items-center gap-4 transition-all ${
                        isUnlocked ? 'bg-slate-900 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]' : 'bg-slate-950 border-slate-800 opacity-30 grayscale'
                    }`}>
                        <div className="text-6xl filter drop-shadow-lg">{art.icon}</div>
                        <div className="text-center">
                            <div className="font-bold text-white text-lg">{isUnlocked ? art.name : '???'}</div>
                            <div className="text-xs text-amber-200 mt-1">{isUnlocked ? art.bonus : 'Inconnu'}</div>
                        </div>
                    </div>
                );
            })}
        </div>
        
        {artifacts.length === 0 && (
            <div className="text-center text-slate-500 mt-20 italic">
                Aucun artefact découvert. Envoyez des équipes archéologiques sur les planètes avec des ruines.
            </div>
        )}
    </div>
  );
};
export default MuseumView;
