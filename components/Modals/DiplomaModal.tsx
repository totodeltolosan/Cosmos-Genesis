
import React, { useEffect, useState } from 'react';
import { Diploma } from '../../types';

interface DiplomaModalProps {
  diploma: Diploma;
  playerName: string;
  onClose: () => void;
}

const DiplomaModal: React.FC<DiplomaModalProps> = ({ diploma, playerName, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      {showConfetti && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             {[...Array(50)].map((_, i) => (
                 <div key={i} className="absolute animate-fall" style={{
                     left: `${Math.random() * 100}%`,
                     top: `-${Math.random() * 20}%`,
                     backgroundColor: ['#FFD700', '#C0C0C0', '#f472b6', '#22d3ee'][Math.floor(Math.random() * 4)],
                     width: '10px', height: '10px',
                     animationDuration: `${2 + Math.random() * 3}s`,
                     animationDelay: `${Math.random()}s`
                 }} />
             ))}
          </div>
      )}

      <div className="relative bg-[#fff9e6] text-slate-900 w-full max-w-2xl p-2 rounded shadow-2xl animate-scale-up">
        {/* Border Layer */}
        <div className="border-4 border-double border-slate-900 h-full p-8 flex flex-col items-center text-center relative overflow-hidden">
            
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-600"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-yellow-600"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-yellow-600"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-600"></div>

            {/* Content */}
            <div className="mb-4 text-4xl">{diploma.icon}</div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-2 uppercase tracking-wider">
                Certificat de Réussite
            </h1>
            
            <p className="text-slate-600 italic font-serif text-lg mb-8">
                Décerné par l'Académie Cosmique L.U.M.I
            </p>

            <p className="text-xl mb-2">Ce document atteste que</p>
            <h2 className="text-3xl font-bold text-blue-900 font-serif mb-6 border-b-2 border-slate-300 pb-2 px-8">
                {playerName}
            </h2>

            <p className="text-lg mb-2">A validé avec succès le grade de</p>
            <h3 className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${diploma.color} mb-6 uppercase`}>
                {diploma.title}
            </h3>
            
            <p className="text-slate-700 max-w-md mx-auto mb-10 font-serif">
                "{diploma.description}"
            </p>

            <div className="w-full flex justify-between items-end mt-auto px-8">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-4 border-yellow-600 flex items-center justify-center bg-yellow-100 text-yellow-700 text-xs font-bold shadow-inner mb-2">
                        SCEAU<br/>OFFICIEL
                    </div>
                    <span className="text-xs font-serif">Date Stellaire 2024</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-script text-2xl text-blue-800 mb-1" style={{fontFamily: 'cursive'}}>L.U.M.I. AI</div>
                    <div className="h-px w-32 bg-slate-900"></div>
                    <span className="text-xs font-serif mt-1">Signature du Recteur</span>
                </div>
            </div>
        </div>

        <button onClick={onClose} className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-8 h-8 font-bold shadow-lg hover:bg-red-500">
            ✕
        </button>
      </div>

      <style>{`
        @keyframes fall { to { transform: translateY(100vh) rotate(720deg); } }
        .animate-fall { animation-timing-function: linear; animation-iteration-count: infinite; }
        @keyframes scaleUp { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-up { animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
      `}</style>
    </div>
  );
};

export default DiplomaModal;
