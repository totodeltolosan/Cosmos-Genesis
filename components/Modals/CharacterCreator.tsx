
import React, { useState } from 'react';
import { PlayerProfile, KnowledgeLevel, GameMode, Gender } from '../../types';
import { LUMI_STYLES } from '../../data/lumiData';
import { PLAYER_CLASSES, PLAYER_AVATARS } from '../../data/playerData';

interface CharacterCreatorProps { 
    onCreate: (profile: PlayerProfile, lumiId: string, mode: GameMode) => void; 
}

const CharacterCreator: React.FC<CharacterCreatorProps> = ({ onCreate }) => {
  const [step, setStep] = useState(1);
  
  // Profile State
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<Gender>('MALE');
  const [avatarIcon, setAvatarIcon] = useState<string>('👨‍🚀');
  const [classId, setClassId] = useState<string>('theorist');
  const [knowledge, setKnowledge] = useState<KnowledgeLevel>(KnowledgeLevel.INTERMEDIATE);
  
  // Lumi & Game State
  const [lumiId, setLumiId] = useState('orb');
  const [gameMode, setGameMode] = useState<GameMode>('SANDBOX');

  // Step 1: Identité
  const renderStep1_Identity = () => (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-xl font-bold text-cyan-300 uppercase tracking-widest text-center">Identité du Pilote</h2>
        
        <div className="space-y-2">
            <label className="text-xs uppercase text-slate-500">Nom de code</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} 
              className="w-full bg-slate-950 border border-slate-700 p-3 text-cyan-300 rounded focus:border-cyan-500 outline-none" placeholder="Ex: Commander Shepard" />
        </div>

        <div className="flex gap-4">
            <div className="flex-1 space-y-2">
                <label className="text-xs uppercase text-slate-500">Âge Terrestre</label>
                <input type="number" value={age} onChange={e => setAge(parseInt(e.target.value))} min={5} max={120}
                  className="w-full bg-slate-950 border border-slate-700 p-3 text-white rounded outline-none" />
            </div>
            <div className="flex-1 space-y-2">
                <label className="text-xs uppercase text-slate-500">Genre</label>
                <div className="flex bg-slate-950 rounded border border-slate-700 p-1">
                    {(['MALE', 'FEMALE', 'NB', 'ROBOT'] as Gender[]).map(g => (
                        <button key={g} onClick={() => setGender(g)} 
                            className={`flex-1 py-2 rounded text-lg ${gender === g ? 'bg-slate-700 text-cyan-300' : 'text-slate-600 hover:text-slate-400'}`}>
                            {g === 'MALE' ? '♂️' : g === 'FEMALE' ? '♀️' : g === 'NB' ? '⚧' : '🤖'}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        <button onClick={() => name && setStep(2)} disabled={!name} className="w-full py-3 bg-cyan-700 hover:bg-cyan-600 rounded text-white font-bold disabled:opacity-50 transition-colors">SUIVANT : APPARENCE</button>
    </div>
  );

  // Step 2: Avatar
  const renderStep2_Avatar = () => {
      const filteredAvatars = PLAYER_AVATARS.filter(a => a.gender === gender);
      return (
        <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-bold text-cyan-300 uppercase tracking-widest text-center">Choisir Avatar</h2>
            <div className="grid grid-cols-5 gap-3 max-h-60 overflow-y-auto custom-scrollbar p-2">
                {filteredAvatars.map(av => (
                    <button key={av.id} onClick={() => setAvatarIcon(av.icon)}
                        className={`text-4xl p-3 rounded-xl border transition-all ${avatarIcon === av.icon ? 'bg-cyan-900/50 border-cyan-400 scale-110 shadow-[0_0_15px_cyan]' : 'bg-slate-950 border-slate-800 hover:bg-slate-800'}`}>
                        {av.icon}
                    </button>
                ))}
            </div>
            <div className="flex gap-3 pt-4">
                <button onClick={() => setStep(1)} className="flex-1 py-3 border border-slate-700 rounded text-slate-400">RETOUR</button>
                <button onClick={() => setStep(3)} className="flex-1 py-3 bg-cyan-700 rounded text-white font-bold">SUIVANT</button>
            </div>
        </div>
      );
  };

  // Step 3: Classe / Spécialisation
  const renderStep3_Class = () => (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-xl font-bold text-yellow-300 uppercase tracking-widest text-center">Type d'Exploration</h2>
        <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto custom-scrollbar pr-1">
            {PLAYER_CLASSES.map(cls => (
                <button key={cls.id} onClick={() => setClassId(cls.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${classId === cls.id ? 'bg-yellow-900/30 border-yellow-500 shadow-md' : 'bg-slate-950 border-slate-800 opacity-60 hover:opacity-100'}`}>
                    <div className="text-4xl">{cls.icon}</div>
                    <div>
                        <div className="font-bold text-white">{cls.title}</div>
                        <div className="text-xs text-slate-300 mb-1">{cls.description}</div>
                        <div className="text-xs font-mono text-yellow-400">{cls.bonus}</div>
                    </div>
                </button>
            ))}
        </div>
        
        <div className="space-y-2 mt-4">
            <label className="text-xs uppercase text-slate-500">Niveau de connaissances (Difficulté des textes)</label>
            <div className="grid grid-cols-3 gap-2">
                {[ { id: KnowledgeLevel.NOVICE, l: 'Débutant' }, { id: KnowledgeLevel.INTERMEDIATE, l: 'Standard' }, { id: KnowledgeLevel.EXPERT, l: 'Expert' } ].map(l => (
                    <button key={l.id} onClick={() => setKnowledge(l.id)} className={`p-2 rounded border text-xs font-bold ${knowledge === l.id ? 'bg-blue-900/50 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>{l.l}</button>
                ))}
            </div>
        </div>

        <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="flex-1 py-3 border border-slate-700 rounded text-slate-400">RETOUR</button>
            <button onClick={() => setStep(4)} className="flex-1 py-3 bg-cyan-700 rounded text-white font-bold">SUIVANT</button>
        </div>
    </div>
  );

  // Step 4: Lumi
  const renderStep4_Lumi = () => (
      <div className="space-y-6 animate-fade-in">
        <h2 className="text-xl font-bold text-purple-300 uppercase tracking-widest text-center">Assistant L.U.M.I</h2>
        <p className="text-center text-slate-400 text-sm italic">Choisissez l'interface de votre guide IA.</p>
        <div className="grid grid-cols-2 gap-4">
            {LUMI_STYLES.map(style => (
                <button key={style.id} onClick={() => setLumiId(style.id)} className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${lumiId === style.id ? 'bg-slate-800 border-cyan-400 scale-105 shadow-lg' : 'bg-slate-950 border-slate-800 opacity-60'}`}>
                    <div className={`w-10 h-10 flex items-center justify-center ${style.cssClass}`}>{style.icon}</div>
                    <span className="text-xs font-bold uppercase">{style.name}</span>
                </button>
            ))}
        </div>
        <div className="flex gap-3">
            <button onClick={() => setStep(3)} className="flex-1 py-3 border border-slate-700 rounded text-slate-400">RETOUR</button>
            <button onClick={() => setStep(5)} className="flex-1 py-3 bg-cyan-700 rounded text-white font-bold">SUIVANT</button>
        </div>
      </div>
  );

  // Step 5: Mode
  const renderStep5_Mode = () => (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-xl font-bold text-green-300 uppercase tracking-widest text-center">Protocole de Simulation</h2>
        <div className="grid gap-4">
            <button onClick={() => setGameMode('SANDBOX')} className={`p-4 border rounded-xl text-left transition-all ${gameMode === 'SANDBOX' ? 'bg-slate-800 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' : 'bg-slate-950 border-slate-800'}`}>
                <div className="font-bold text-lg text-green-400 mb-1">🚀 Mode Sandbox</div>
                <div className="text-xs text-slate-400">Expérience incrémentale classique. Liberté totale de gestion et d'expansion. Idéal pour explorer à son rythme.</div>
            </button>
            <button onClick={() => setGameMode('ACADEMY')} className={`p-4 border rounded-xl text-left transition-all ${gameMode === 'ACADEMY' ? 'bg-slate-800 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-slate-950 border-slate-800'}`}>
                <div className="font-bold text-lg text-blue-400 mb-1">🎓 Mode Académie</div>
                <div className="text-xs text-slate-400">Progression structurée par l'apprentissage. Débloquez l'univers en réussissant des examens et en obtenant des diplômes.</div>
            </button>
        </div>
        <div className="flex gap-3 pt-4">
            <button onClick={() => setStep(4)} className="flex-1 py-3 border border-slate-700 rounded text-slate-400">RETOUR</button>
            <button onClick={() => onCreate({ name, gender, classId, avatarIcon, age, knowledgeLevel: knowledge }, lumiId, gameMode)} className="flex-1 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded text-white font-bold shadow-lg hover:scale-105 transition-transform">INITIALISER</button>
        </div>
    </div>
  );

  return (
    <div className="absolute inset-0 z-50 bg-[#020617] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-slate-900/95 border border-slate-700 rounded-2xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
            <div className="h-full bg-cyan-500 transition-all duration-300" style={{ width: `${(step/5)*100}%` }}></div>
        </div>

        {step === 1 && renderStep1_Identity()}
        {step === 2 && renderStep2_Avatar()}
        {step === 3 && renderStep3_Class()}
        {step === 4 && renderStep4_Lumi()}
        {step === 5 && renderStep5_Mode()}
        
        <div className="flex justify-center gap-2 mt-6">
            {[1,2,3,4,5].map(s => <div key={s} className={`w-2 h-2 rounded-full transition-colors ${step >= s ? 'bg-cyan-500' : 'bg-slate-700'}`} />)}
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in { animation: fadeIn 0.4s ease-out; }`}</style>
    </div>
  );
};
export default CharacterCreator;
