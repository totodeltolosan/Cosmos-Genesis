import React, { useRef, useEffect } from 'react';
import { LogEntry } from '../types';

interface LogPanelProps {
  logs: LogEntry[];
}

const LogPanel: React.FC<LogPanelProps> = ({ logs }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2 h-48 bg-black/60 backdrop-blur-sm border-t border-slate-700 rounded-t-xl overflow-hidden flex flex-col pointer-events-none">
       <div className="bg-slate-900/90 px-4 py-2 text-xs font-mono text-cyan-500 border-b border-slate-800 uppercase tracking-widest">
         Journal Cosmique
       </div>
       <div className="flex-1 overflow-y-auto p-4 space-y-2 pointer-events-auto">
         {logs.length === 0 && <p className="text-slate-600 italic text-sm text-center">En attente du commencement...</p>}
         {logs.map((log) => (
           <div key={log.id} className={`text-sm animate-pulse-slow ${
             log.type === 'milestone' ? 'text-yellow-400 font-bold' : 
             log.type === 'discovery' ? 'text-cyan-300' : 'text-slate-300'
           }`}>
             <span className="opacity-50 text-xs mr-2">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
             {log.text}
           </div>
         ))}
         <div ref={endRef} />
       </div>
    </div>
  );
};

export default LogPanel;