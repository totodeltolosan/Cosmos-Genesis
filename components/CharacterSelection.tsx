import React from 'react';
import { CHARACTERS } from '../data/charactersData';

interface CharacterSelectionProps {
  onSelect: (id: string) => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({ onSelect }) => {
  return (
    <div className="absolute inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-2 tracking-widest text-center">
        COSMOS GENESIS
      </h1>
      <p className="text-slate-400 mb-8 text-center max-w-lg">
        L'univers est sur le point de naître. Qui racontera son histoire ?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {CHARACTERS.map((char) => (
          <button
            key={char.id}
            onClick={() => onSelect(char.id)}
            className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-slate-600 group-hover:border-cyan-400 mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
              {char.id === 'archivist' ? '🤖' : char.id === 'oracle' ? '🔮' : '👾'}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300">{char.name}</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">{char.description}</p>
            
            <div className="mt-auto pt-4 border-t border-slate-800 w-full">
              <span className="text-xs uppercase tracking-widest text-cyan-600 font-bold">
                {char.bonusDescription}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;