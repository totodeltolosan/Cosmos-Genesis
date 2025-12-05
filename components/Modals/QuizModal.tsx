
import React, { useState, useEffect, useMemo } from 'react';
import { QuizQuestion, LessonPage } from '../../types';

interface QuizModalProps {
  title: string;
  pages?: LessonPage[];
  questions?: QuizQuestion[]; // The pool
  onComplete: (score: number) => void;
  onClose: () => void;
  isTimed: boolean;
}

type Mode = 'READING' | 'QUIZ' | 'RESULT';

const QuizModal: React.FC<QuizModalProps> = ({ title, pages = [], questions = [], onComplete, onClose, isTimed }) => {
  const [mode, setMode] = useState<Mode>(pages.length > 0 ? 'READING' : 'QUIZ');
  
  // Reading State
  const [currentPage, setCurrentPage] = useState(0);

  // Quiz State
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | string)[]>([]); // number index for MCQ, string for INPUT
  const [inputVal, setInputVal] = useState('');
  const [timeLeft, setTimeLeft] = useState(isTimed ? 60 : 999);
  const [score, setScore] = useState(0);

  // Init Quiz (Pick 5 random)
  useEffect(() => {
      if (questions.length > 0) {
          const shuffled = [...questions].sort(() => 0.5 - Math.random());
          setActiveQuestions(shuffled.slice(0, 5));
      }
  }, [questions]);

  // Timer
  useEffect(() => {
    if (mode !== 'QUIZ' || !isTimed) return;
    const timer = setInterval(() => {
        setTimeLeft(prev => {
            if (prev <= 1) {
                finishQuiz();
                return 0;
            }
            return prev - 1;
        });
    }, 1000);
    return () => clearInterval(timer);
  }, [isTimed, mode]);

  const handleNextPage = () => {
      if (currentPage < pages.length - 1) {
          setCurrentPage(prev => prev + 1);
      } else {
          setMode('QUIZ');
      }
  };

  const handleMCQAnswer = (optionIndex: number) => {
      const newAnswers = [...answers];
      newAnswers[currentQIndex] = optionIndex;
      setAnswers(newAnswers);
      nextQuestion();
  };

  const handleInputAnswer = () => {
      const newAnswers = [...answers];
      newAnswers[currentQIndex] = inputVal;
      setAnswers(newAnswers);
      setInputVal('');
      nextQuestion();
  };

  const nextQuestion = () => {
      if (currentQIndex < activeQuestions.length - 1) {
          setCurrentQIndex(prev => prev + 1);
      } else {
          finishQuiz();
      }
  };

  const finishQuiz = () => {
      // Need to calculate score based on CURRENT answers state, which might be stale in closure if not careful
      // We use the functional update pattern or local variable in previous calls usually, 
      // but here we rely on state update latency being acceptable for the result screen render.
      // Better: Recalculate from answers array directly.
      
      let correctCount = 0;
      activeQuestions.forEach((q, i) => {
          const ans = answers[i]; // Wait, answers state update is async. 
          // However, finishQuiz is called AFTER setAnswers in handlers. 
          // But React batching... Let's pass the final answer to finishQuiz in handlers or use a ref.
          // For simplicity in this constraints: We will trust the state is updated or calculate inside Result render.
      });
      
      setMode('RESULT');
  };

  // Score Calculation
  const finalScore = useMemo(() => {
      if (activeQuestions.length === 0) return 0;
      let correct = 0;
      activeQuestions.forEach((q, i) => {
          const ans = answers[i];
          if (q.type === 'INPUT' || !q.options) {
              // Check input string match
              if (typeof ans === 'string' && q.acceptedAnswers) {
                  const normAns = ans.trim().toLowerCase();
                  if (q.acceptedAnswers.some(a => a.toLowerCase() === normAns)) correct++;
              }
          } else {
              // MCQ
              if (ans === q.correctIndex) correct++;
          }
      });
      return Math.round((correct / activeQuestions.length) * 20);
  }, [answers, activeQuestions]);

  const renderReading = () => {
      const page = pages[currentPage];
      return (
          <div className="flex flex-col h-full">
              <div className="flex-1 p-8 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                      <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
                      <span className="text-xs font-mono text-slate-500">PAGE {currentPage + 1}/{pages.length}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-6">{page.title}</h2>
                  <div className="text-slate-300 leading-loose text-lg whitespace-pre-line">
                      {page.content}
                  </div>
              </div>
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between">
                  <button disabled={currentPage === 0} onClick={() => setCurrentPage(p => p - 1)} className="px-4 py-2 rounded text-slate-400 hover:bg-slate-900 disabled:opacity-30">Précédent</button>
                  <button onClick={handleNextPage} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded shadow-lg animate-pulse">
                      {currentPage === pages.length - 1 ? 'PASSER L\'EXAMEN' : 'SUIVANT'}
                  </button>
              </div>
          </div>
      );
  };

  const renderQuiz = () => {
      const q = activeQuestions[currentQIndex];
      if (!q) return <div>Chargement...</div>;

      return (
          <div className="flex flex-col h-full">
              <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
                <h3 className="font-bold text-cyan-300">Examen</h3>
                <div className="flex gap-4 text-xs font-mono">
                    <span>Q: {currentQIndex + 1}/{activeQuestions.length}</span>
                    {isTimed && <span className={`${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-slate-300'}`}>⏱️ {timeLeft}s</span>}
                </div>
            </div>

            <div className="p-8 flex-1 overflow-y-auto flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed text-center">
                    {q.question}
                </h2>

                {q.type === 'INPUT' ? (
                    <div className="w-full max-w-md mx-auto">
                        <input 
                            type="text" 
                            value={inputVal} 
                            onChange={(e) => setInputVal(e.target.value)} 
                            onKeyDown={(e) => e.key === 'Enter' && inputVal && handleInputAnswer()}
                            className="w-full bg-slate-950 border border-slate-600 p-4 rounded text-xl text-center text-white focus:border-cyan-500 outline-none mb-4"
                            placeholder="Tapez votre réponse..."
                            autoFocus
                        />
                        <button onClick={handleInputAnswer} disabled={!inputVal} className="w-full py-3 bg-cyan-600 rounded text-white font-bold disabled:opacity-50">
                            VALIDER
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-3">
                        {q.options?.map((opt, idx) => (
                            <button key={idx} onClick={() => handleMCQAnswer(idx)}
                                className="p-4 text-left bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-400 rounded-lg transition-all flex items-center"
                            >
                                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mr-4 font-bold text-slate-500">
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                {opt}
                            </button>
                        ))}
                    </div>
                )}
            </div>
          </div>
      );
  };

  if (mode === 'RESULT') {
      return (
        <div className="absolute inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl max-w-md w-full text-center animate-scale-up">
                <h2 className="text-3xl font-bold mb-4 text-white">Résultats</h2>
                <div className={`text-6xl font-mono font-bold mb-4 ${finalScore >= 10 ? 'text-green-400' : 'text-red-400'}`}>
                    {finalScore}/20
                </div>
                
                <div className="flex justify-center gap-1 mb-6">
                    {[1,2,3,4,5].map(star => (
                        <span key={star} className={`text-3xl ${star <= (finalScore/4) ? 'text-yellow-400' : 'text-slate-800'}`}>★</span>
                    ))}
                </div>

                <p className="text-slate-300 mb-6 italic">
                    {finalScore >= 18 ? "Performance Exceptionnelle. Maîtrise Totale." : 
                     finalScore >= 14 ? "Très bonne compréhension." :
                     finalScore >= 10 ? "Module validé." : "Connaissances insuffisantes. Relisez le cours."}
                </p>
                <button onClick={() => { onComplete(finalScore); onClose(); }} className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded text-white font-bold">
                    Terminer
                </button>
            </div>
        </div>
      );
  }

  return (
    <div className="absolute inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl h-[80vh] rounded-xl shadow-2xl overflow-hidden flex flex-col">
            {mode === 'READING' ? renderReading() : renderQuiz()}
        </div>
    </div>
  );
};
export default QuizModal;
