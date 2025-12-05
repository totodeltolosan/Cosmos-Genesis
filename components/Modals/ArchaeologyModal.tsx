
import React, { useState } from 'react';

interface Props {
  onClose: () => void;
  onFind: (success: boolean) => void;
}

const ArchaeologyModal: React.FC<Props> = ({ onClose, onFind }) => {
  const [grid, setGrid] = useState<number[]>(Array(25).fill(0).map(() => Math.random() > 0.7 ? 2 : Math.random() > 0.8 ? 1 : 0)); // 0=Dirt, 1=Artifact, 2=Rock
  const [revealed, setRevealed] = useState<boolean[]>(Array(25).fill(false));
  const [moves, setMoves] = useState(10);
  const [foundCount, setFoundCount] = useState(0);

  const handleDig = (idx: number) => {
      if (revealed[idx] || moves <= 0) return;
      
      const newRevealed = [...revealed];
      newRevealed[idx] = true;
      setRevealed(newRevealed);
      setMoves(m => m - 1);

      if (grid[idx] === 1) {
          setFoundCount(c => c + 1);
          if (foundCount + 1 >= 1) { // Win condition: Find 1
              setTimeout(() => onFind(true), 1000);
          }
      }
      
      if (moves - 1 === 0 && foundCount === 0 && grid[idx] !== 1) {
          setTimeout(() => onFind(false), 1000);
      }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur">
      <div className="bg-slate-900 border-2 border-amber-600 rounded-xl p-6 w-96 shadow-2xl">
        <h2 className="text-xl font-bold text-amber-500 mb-4 flex justify-between">
            <span>Fouilles Archéologiques</span>
            <span className="text-white text-sm">Coups: {moves}</span>
        </h2>
        
        <div className="grid grid-cols-5 gap-2 mb-4">
            {grid.map((val, idx) => (
                <button key={idx} 
                    onClick={() => handleDig(idx)}
                    disabled={revealed[idx]}
                    className={`h-14 w-14 rounded flex items-center justify-center text-2xl transition-all ${
                        !revealed[idx] ? 'bg-amber-800 hover:bg-amber-700 border border-amber-900' :
                        val === 1 ? 'bg-cyan-500 shadow-[0_0_10px_cyan]' : 
                        val === 2 ? 'bg-slate-700' : 'bg-slate-800'
                    }`}
                >
                    {!revealed[idx] ? '' : val === 1 ? '🏆' : val === 2 ? '🪨' : ''}
                </button>
            ))}
        </div>
        
        <div className="text-center text-slate-400 text-xs">
            Trouvez l'artefact (🏆) avant la fin des coups. Attention aux rochers (🪨).
        </div>
        <button onClick={onClose} className="mt-4 w-full py-2 bg-slate-800 rounded hover:bg-slate-700 text-white">Abandonner</button>
      </div>
    </div>
  );
};
export default ArchaeologyModal;
