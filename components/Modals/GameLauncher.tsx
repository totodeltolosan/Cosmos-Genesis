
import React from 'react';

interface GameLauncherProps {
  onSelectOption: (option: 'GAME' | 'SCHOOL') => void;
}

const GameLauncher: React.FC<GameLauncherProps> = ({ onSelectOption }) => {
  const handleMouseMove = (e: React.MouseEvent) => {
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach((layer, i) => {
          (layer as HTMLElement).style.transform = `translateX(${x * (i+1)}px) translateY(${y * (i+1)}px)`;
      });
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#020617] flex items-center justify-center p-4 overflow-hidden" onMouseMove={handleMouseMove}>
      
      {/* 3D Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="parallax-layer absolute inset-[-5%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" style={{ transition: 'transform 0.1s linear' }}></div>
          <div className="parallax-layer absolute inset-[-10%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" style={{ transition: 'transform 0.1s linear' }}></div>
          
          {/* Shooting Stars */}
          <div className="absolute top-0 left-0 w-full h-full animate-spin-slow opacity-30">
             <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white shadow-[0_0_10px_white]"></div>
             <div className="absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-blue-300 shadow-[0_0_15px_blue]"></div>
          </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 tracking-widest text-center animate-fade-in-down drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          COSMOS GENESIS
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-12 tracking-[0.3em] uppercase opacity-90 animate-pulse font-light">
          Interface de Simulation Universelle v3.1
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
            {/* GAME CARD */}
            <button 
                onClick={() => onSelectOption('GAME')}
                className="group relative h-96 rounded-2xl bg-slate-900/40 border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all duration-500 hover:shadow-[0_0_80px_rgba(34,211,238,0.2)] hover:-translate-y-2 backdrop-blur-sm"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">🚀</div>
                    <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                        Simulation
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-xs mx-auto opacity-80 group-hover:opacity-100">
                        Prenez le contrôle du Big Bang. Créez la matière, les étoiles et la vie. 
                        Incarnez un Dieu Cosmique.
                    </p>
                    <div className="mt-8 px-8 py-3 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        Lancer le Protocole
                    </div>
                </div>
            </button>

            {/* SCHOOL CARD */}
            <button 
                onClick={() => onSelectOption('SCHOOL')}
                className="group relative h-96 rounded-2xl bg-slate-900/40 border border-slate-700 overflow-hidden hover:border-green-500 transition-all duration-500 hover:shadow-[0_0_80px_rgba(74,222,128,0.2)] hover:-translate-y-2 backdrop-blur-sm"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-900/30 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">🎓</div>
                    <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-green-300 transition-colors">
                        Académie L.U.M.I
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-xs mx-auto opacity-80 group-hover:opacity-100">
                        Rejoignez l'Académie Cosmique. Suivez des cours, passez vos diplômes et devenez un expert.
                    </p>
                    <div className="mt-8 px-8 py-3 border border-green-500/50 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest group-hover:bg-green-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                        Entrer en Classe
                    </div>
                </div>
            </button>
        </div>
        
        <div className="mt-16 text-slate-600 text-xs font-mono animate-pulse">
            Système en ligne. En attente de l'opérateur...
        </div>
      </div>
      <style>{`
        @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 100s linear infinite; }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out; }
      `}</style>
    </div>
  );
};

export default GameLauncher;
