
import React, { useState, useRef, useEffect } from 'react';
import { GameState, KnowledgeNode, SynapseInteraction } from '../../types';
import { searchBrain, hydrateSynapse, strengthenConnection } from '../../utils/lumiBrain';
import { playSFX } from '../../utils/audioManager';

interface Props {
    state: GameState;
    onClose: () => void;
    setState: React.Dispatch<React.SetStateAction<GameState>>;
}

interface ChatMessage {
    sender: 'USER' | 'LUMI';
    text: string | string[];
    nodeId?: string;
    interaction?: SynapseInteraction;
    isInteractionSolved?: boolean;
    relatedSuggestions?: KnowledgeNode[];
    isPrimed?: boolean;
}

const LumiChat: React.FC<Props> = ({ state, onClose, setState }) => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<ChatMessage[]>([
        { sender: 'LUMI', text: `Connexion établie, ${state.playerProfile?.name || 'Pilote'}. Mon Cerveau est synchronisé (${Object.keys(state.synapseLevels).length} synapses découvertes). Pose-moi une question ou demande un sujet.` }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [history]);

    const handleQuery = (query: string, fromNodeId?: string) => {
        setHistory(prev => [...prev, { sender: 'USER', text: query }]);
        setInput("");
        playSFX('type');

        setTimeout(() => {
            const node = searchBrain(query);
            if (node) {
                if (fromNodeId) {
                    setState(prev => strengthenConnection(fromNodeId, node.id, prev));
                }

                if (state.synapseLevels[node.id] === undefined) {
                    setState(prev => ({...prev, synapseLevels: {...prev.synapseLevels, [node.id]: 0}}));
                }

                const hydrated = hydrateSynapse(node, state);
                
                setHistory(prev => [...prev, { 
                    sender: 'LUMI', 
                    text: hydrated.text,
                    nodeId: node.id,
                    interaction: hydrated.showInteraction ? node.interaction : undefined,
                    relatedSuggestions: hydrated.relatedNodes,
                    isPrimed: hydrated.isPrimed
                }]);
                playSFX('success');
            } else {
                setHistory(prev => [...prev, { 
                    sender: 'LUMI', 
                    text: "Synapse introuvable. Essaie : 'Atome', 'Vie', 'Temps', 'Dieu'..." 
                }]);
                playSFX('error');
            }
        }, 600);
    };

    const handleSend = () => {
        if (!input.trim()) return;
        handleQuery(input.trim());
    };

    const handleInteractionAnswer = (msgIndex: number, optionIndex: number) => {
        const msg = history[msgIndex];
        if (!msg.interaction || msg.isInteractionSolved) return;

        const isCorrect = optionIndex === msg.interaction.correctIndex;
        
        const newHistory = [...history];
        newHistory[msgIndex] = { ...msg, isInteractionSolved: true };
        
        if (isCorrect) {
            newHistory.push({ sender: 'LUMI', text: `✅ Correct ! ${msg.interaction.explanation} (Niveau Synaptique Augmenté)` });
            playSFX('success');
            if (msg.nodeId) {
                setState(prev => ({
                    ...prev,
                    synapseLevels: {
                        ...prev.synapseLevels,
                        [msg.nodeId!]: Math.min(2, (prev.synapseLevels[msg.nodeId!] || 0) + 1)
                    }
                }));
            }
        } else {
            newHistory.push({ sender: 'LUMI', text: `❌ Incorrect. ${msg.interaction.explanation}` });
            playSFX('error');
        }
        setHistory(newHistory);
    };

    // Calculate opacity based on weight decay for visual feedback
    const getSuggestionOpacity = (nodeId: string, parentId?: string) => {
        if (!parentId) return 1;
        const linkId = [parentId, nodeId].sort().join('-');
        const w = state.synapticWeights[linkId];
        if (!w) return 0.5; // New link
        // Decay logic: max weight is ~50. If weight is low, opacity drops slightly
        return Math.min(1, 0.6 + (w.weight / 20));
    };

    return (
        <div className="absolute inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-2xl h-[80vh] bg-slate-900 border border-cyan-500/50 rounded-xl flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden animate-scale-up">
                <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                        <h2 className="text-cyan-400 font-mono font-bold tracking-widest">NEURAL LINK v2.1 (Bio-Mimétique)</h2>
                    </div>
                    <button onClick={onClose} className="text-slate-500 hover:text-white">✕</button>
                </div>

                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050a15]">
                    {history.map((msg, i) => (
                        <div key={i} className={`flex flex-col ${msg.sender === 'USER' ? 'items-end' : 'items-start'}`}>
                            {msg.isPrimed && (
                                <div className="text-[10px] text-yellow-400 font-bold tracking-widest mb-1 animate-pulse">
                                    ⚡ AMORÇAGE COGNITIF
                                </div>
                            )}
                            <div className={`max-w-[85%] rounded-lg p-3 text-sm ${msg.sender === 'USER' ? 'bg-slate-800 text-white border border-slate-600' : 'bg-cyan-950/30 text-cyan-100 border border-cyan-900'}`}>
                                {Array.isArray(msg.text) ? (
                                    <div className="space-y-3">
                                        {msg.text.map((line, idx) => (
                                            <p key={idx} className={idx === 0 ? "font-bold text-white border-b border-white/10 pb-2" : "text-slate-300"}>{line}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{msg.text}</p>
                                )}

                                {msg.interaction && !msg.isInteractionSolved && (
                                    <div className="mt-3 pt-3 border-t border-cyan-900/50">
                                        <p className="font-bold text-yellow-400 mb-2">{msg.interaction.question}</p>
                                        <div className="grid gap-2">
                                            {msg.interaction.options.map((opt, optIdx) => (
                                                <button 
                                                    key={optIdx} 
                                                    onClick={() => handleInteractionAnswer(i, optIdx)}
                                                    className="text-left px-3 py-2 rounded bg-slate-900 hover:bg-cyan-900 border border-slate-700 hover:border-cyan-500 transition-colors text-xs"
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {msg.relatedSuggestions && msg.relatedSuggestions.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2 animate-fade-in pl-2">
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest pt-1">Connexions:</span>
                                    {msg.relatedSuggestions.map(sug => (
                                        <button 
                                            key={sug.id}
                                            onClick={() => handleQuery(sug.title, msg.nodeId)}
                                            style={{ opacity: getSuggestionOpacity(sug.id, msg.nodeId) }}
                                            className="px-3 py-1 rounded-full bg-slate-800 border border-cyan-900/50 text-cyan-400 text-xs hover:bg-cyan-900 hover:text-white transition-all flex items-center gap-1"
                                            title="Plus l'opacité est forte, plus le lien est renforcé"
                                        >
                                            <span>🔗</span> {sug.title}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-slate-950 border-t border-slate-800 flex gap-2">
                    <input 
                        type="text" 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        onKeyDown={e => e.key === 'Enter' && handleSend()}
                        placeholder="Interroger L.U.M.I..." 
                        className="flex-1 bg-slate-900 border border-slate-700 rounded px-4 py-2 text-white focus:border-cyan-500 outline-none font-mono"
                        autoFocus
                    />
                    <button onClick={handleSend} className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-2 rounded font-bold transition-colors">
                        ENVOYER
                    </button>
                </div>
            </div>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in { animation: fadeIn 0.3s ease-out; }`}</style>
        </div>
    );
};

export default LumiChat;
