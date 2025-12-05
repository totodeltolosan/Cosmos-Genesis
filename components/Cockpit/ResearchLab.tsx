
import React, { useState } from 'react';
import { GameState, ResourceType } from '../../types';
import { playSFX } from '../../utils/audioManager';

interface Props { state: GameState; onReward: (res: ResourceType, amount: number) => void; }

const ResearchLab: React.FC<Props> = ({ state, onReward }) => {
  const [problem, setProblem] = useState<{q: string, a: string} | null>(null);
  const [input, setInput] = useState('');

  const generateProblem = () => {
      // Simple math generation for demo (could link to real lessons)
      const a = Math.floor(Math.random() * 20) + 1;
      const b = Math.floor(Math.random() * 20) + 1;
      setProblem({ q: `${a} x ${b} ?`, a: (a*b).toString() });
      setInput('');
  };

  const checkAnswer = () => {
      if (!problem) return;
      if (input.trim() === problem.a) {
          playSFX('success');
          onReward(ResourceType.COMPLEXITY, 1000 * (state.playerProfile?.age || 1));
          setProblem(null);
      } else {
          playSFX('error');
      }
  };

  return (
    <div className="bg-slate-900/90 border-t border-slate-700 p-4 rounded-xl mt-4 relative overflow-hidden">
        <h3 className="text-xs font-bold text-blue-400 uppercase mb-2 flex items-center gap-2">
            🧪 Laboratoire d'Application
        </h3>
        {!problem ? (
            <button onClick={generateProblem} className="w-full py-2 bg-blue-900/50 border border-blue-600 rounded text-blue-200 text-sm hover:bg-blue-800 transition-colors">
                Calibrer les Systèmes (Gain Savoir)
            </button>
        ) : (
            <div className="flex gap-2">
                <div className="bg-black px-3 py-2 rounded text-white font-mono text-sm border border-slate-600">{problem.q}</div>
                <input 
                    type="text" value={input} onChange={e => setInput(e.target.value)} 
                    className="flex-1 bg-slate-800 border border-slate-600 rounded px-2 text-white font-mono"
                    placeholder="Réponse..."
                    onKeyDown={e => e.key === 'Enter' && checkAnswer()}
                    autoFocus
                />
                <button onClick={checkAnswer} className="px-4 bg-green-700 text-white rounded text-sm font-bold">OK</button>
            </div>
        )}
    </div>
  );
};
export default ResearchLab;
