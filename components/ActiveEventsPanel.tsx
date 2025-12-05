import React from 'react';
import { ActiveEvent } from '../types';
import { COSMIC_EVENTS } from '../data/eventsData';

interface ActiveEventsPanelProps {
  events: ActiveEvent[];
}

const ActiveEventsPanel: React.FC<ActiveEventsPanelProps> = ({ events }) => {
  if (events.length === 0) return null;

  return (
    <div className="absolute top-20 left-4 z-30 flex flex-col gap-2 w-64 pointer-events-none">
      {events.map(ev => {
        const def = COSMIC_EVENTS.find(d => d.id === ev.definitionId);
        if (!def) return null;

        const timeLeft = Math.max(0, (ev.endTime - Date.now()) / 1000);
        const progress = (timeLeft / def.duration) * 100;
        
        const colorClass = def.type === 'positive' ? 'border-green-500 bg-green-900/80 text-green-100' :
                           def.type === 'negative' ? 'border-red-500 bg-red-900/80 text-red-100' :
                           'border-purple-500 bg-purple-900/80 text-purple-100';

        return (
          <div key={ev.id} className={`relative p-3 rounded-lg border-l-4 backdrop-blur-md shadow-lg overflow-hidden animate-slide-in ${colorClass}`}>
             <div className="flex justify-between items-start mb-1 relative z-10">
                 <span className="font-bold text-sm uppercase">{def.name}</span>
                 <span className="font-mono text-xs">{timeLeft.toFixed(1)}s</span>
             </div>
             <div className="text-xs opacity-90 relative z-10">{def.description}</div>
             
             {/* Timer Bar */}
             <div className="absolute bottom-0 left-0 h-1 bg-white/30 z-10 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
          </div>
        );
      })}
      <style>{`
        @keyframes slide-in {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default ActiveEventsPanel;