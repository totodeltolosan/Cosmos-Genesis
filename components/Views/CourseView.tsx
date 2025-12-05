
import React, { useState } from 'react';
import { GameState, KnowledgeLevel, SubjectCategory } from '../../types';
import { COSMIC_COURSE } from '../../data/courseData';
import { DIPLOMAS } from '../../data/diplomaData';

interface CourseViewProps {
    state: GameState;
    onStartQuiz: (lessonId: string) => void;
    onShowDiploma: (diplomaId: string) => void;
}

const SUBJECTS: {id: SubjectCategory, name: string, icon: string, color: string}[] = [
    { id: 'MATH', name: 'Mathématiques', icon: '📐', color: 'bg-blue-900 border-blue-500' },
    { id: 'HISTORY', name: 'Histoire', icon: '🏛️', color: 'bg-amber-900 border-amber-500' },
    { id: 'CS', name: 'Informatique', icon: '💻', color: 'bg-green-900 border-green-500' },
    { id: 'BIO', name: 'Biologie', icon: '🧬', color: 'bg-pink-900 border-pink-500' },
    { id: 'PHYSICS', name: 'Physique', icon: '⚛️', color: 'bg-purple-900 border-purple-500' },
    { id: 'GEO', name: 'Géographie', icon: '🌍', color: 'bg-cyan-900 border-cyan-500' },
    { id: 'FRENCH', name: 'Lettres', icon: '✒️', color: 'bg-red-900 border-red-500' },
    { id: 'PSYCH', name: 'Psychologie', icon: '🧠', color: 'bg-fuchsia-900 border-fuchsia-500' },
    { id: 'CIVIC', name: 'Civisme', icon: '⚖️', color: 'bg-indigo-900 border-indigo-500' },
    { id: 'QI', name: 'Logique', icon: '💡', color: 'bg-lime-900 border-lime-500' },
];

const CourseView: React.FC<CourseViewProps> = ({ state, onStartQuiz, onShowDiploma }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectCategory | null>(null);

  const filteredLessons = selectedSubject ? COSMIC_COURSE.filter(l => l.subject === selectedSubject) : [];
  
  // Calculate Average Mastery
  const allMastery = Object.values(state.lessonMastery || {});
  const avgMastery = allMastery.length > 0 
    ? (allMastery.reduce((a,b)=>a+b,0) / allMastery.length).toFixed(1) 
    : '0.0';

  return (
    <div className="w-full h-full bg-[#0b1021] p-4 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl mx-auto pb-20">
        
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 mb-8 flex justify-between items-center gap-6 shadow-xl">
            <div>
                <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">ACADÉMIE L.U.M.I</h2>
                <p className="text-slate-400 text-sm">Élève : <span className="text-cyan-400 font-mono font-bold">{state.playerProfile?.name}</span></p>
            </div>
            <div className="text-center bg-slate-800 p-3 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-500 uppercase font-bold">Maîtrise Moy.</div>
                <div className="text-3xl font-bold text-yellow-400">{avgMastery}<span className="text-sm text-slate-600">/5</span></div>
            </div>
        </div>

        {!selectedSubject ? (
            <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-slate-300 mb-4 uppercase tracking-widest border-b border-slate-800 pb-2">Cursus Disponibles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SUBJECTS.map(sub => {
                        const lessons = COSMIC_COURSE.filter(l => l.subject === sub.id);
                        const completedCount = lessons.filter(l => state.completedLessons.includes(l.id)).length;
                        const progress = (completedCount / lessons.length) * 100;
                        
                        return (
                            <button key={sub.id} onClick={() => setSelectedSubject(sub.id)}
                                className={`group relative p-6 rounded-xl border-2 flex flex-col items-center gap-3 transition-all shadow-lg overflow-hidden ${sub.color} bg-opacity-20 hover:bg-opacity-40 hover:-translate-y-1`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">{sub.icon}</div>
                                <div className="font-bold text-xl text-white">{sub.name}</div>
                                <div className="w-full bg-black/50 h-2 rounded-full mt-2 overflow-hidden border border-white/10">
                                    <div className="h-full bg-white/80" style={{width: `${progress}%`}}></div>
                                </div>
                                <div className="text-xs text-slate-300 font-mono">{completedCount}/{lessons.length} Modules</div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <h3 className="text-xl font-bold text-slate-300 mb-6 uppercase tracking-widest">Certification</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {DIPLOMAS.map(dip => {
                            const isEarned = state.unlockedDiplomas.includes(dip.id);
                            return (
                                <button key={dip.id} disabled={!isEarned} onClick={() => onShowDiploma(dip.id)}
                                    className={`relative p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                                        isEarned ? `bg-gradient-to-br ${dip.color} border-white/20 shadow-lg hover:scale-105 cursor-pointer` : 'bg-slate-950 border-slate-800 grayscale opacity-40 cursor-not-allowed'
                                    }`}
                                >
                                    <span className="text-3xl drop-shadow-md">{dip.icon}</span>
                                    <div className="text-center">
                                        <div className="font-bold text-white text-xs md:text-sm leading-tight">{dip.title}</div>
                                    </div>
                                    {isEarned && <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-ping"></div>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        ) : (
            <div className="animate-slide-in">
                <button onClick={() => setSelectedSubject(null)} className="mb-6 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors bg-slate-900 px-4 py-2 rounded-full border border-slate-700 hover:border-cyan-500">
                    ⬅ Retour au Menu
                </button>
                
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl">{SUBJECTS.find(s => s.id === selectedSubject)?.icon}</span>
                    <h3 className="text-4xl font-bold text-white tracking-tight">{SUBJECTS.find(s => s.id === selectedSubject)?.name}</h3>
                </div>

                <div className="space-y-4">
                    {filteredLessons.map((lesson, idx) => {
                        const isCompleted = state.completedLessons.includes(lesson.id);
                        const isUnlocked = idx === 0 || state.completedLessons.includes(filteredLessons[idx-1].id);
                        const mastery = state.lessonMastery[lesson.id] || 0;

                        return (
                            <div key={lesson.id} className={`relative p-6 rounded-xl border flex flex-col md:flex-row gap-6 items-start md:items-center transition-all ${
                                isUnlocked ? 'bg-slate-800/60 border-slate-600 shadow-md' : 'bg-slate-950/40 border-slate-800 opacity-60 grayscale'
                            }`}>
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 border-2 ${isCompleted ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400' : isUnlocked ? 'bg-slate-700 border-slate-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-700'}`}>
                                    {isCompleted ? '✓' : idx + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-100 mb-1">{lesson.title}</h3>
                                    <p className="text-sm text-slate-400 mb-2">{lesson.description}</p>
                                    
                                    {/* Mastery Stars */}
                                    <div className="flex gap-1" title={`Maîtrise: ${mastery}/5`}>
                                        {[1,2,3,4,5].map(s => (
                                            <span key={s} className={`text-sm ${s <= mastery ? 'text-yellow-400' : 'text-slate-700'}`}>★</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-3 min-w-[140px]">
                                    <button disabled={!isUnlocked} onClick={() => onStartQuiz(lesson.id)}
                                        className={`w-full px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-lg ${isUnlocked ? 'bg-cyan-600 hover:bg-cyan-500 text-white hover:scale-105' : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'}`}
                                    >
                                        {mastery === 5 ? 'Réviser' : mastery > 0 ? 'Améliorer' : 'Commencer'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )}
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .animate-fade-in { animation: fadeIn 0.5s ease-out; } @keyframes slideIn { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } } .animate-slide-in { animation: slideIn 0.3s ease-out; }`}</style>
    </div>
  );
};
export default CourseView;
