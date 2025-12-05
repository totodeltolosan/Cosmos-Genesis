
import React from 'react';
import { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
  isUnlocked: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, isUnlocked }) => {
  return (
    <div className={`group p-3 rounded-lg border flex items-center gap-4 transition-all duration-500 ${
      isUnlocked 
        ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.05)] hover:border-yellow-500/60' 
        : 'bg-slate-950/40 border-slate-800/50'
    }`}>
      <div className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl shrink-0 transition-transform duration-500 ${
        isUnlocked 
          ? 'bg-slate-950 text-white shadow-inner scale-100 group-hover:scale-110 group-hover:rotate-12' 
          : 'bg-slate-900 text-slate-700 scale-90'
      }`}>
        {isUnlocked ? achievement.icon : '🔒'}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className={`font-bold text-sm truncate ${isUnlocked ? 'text-yellow-400' : 'text-slate-600'}`}>
          {achievement.name}
        </div>
        <div className={`text-xs leading-tight ${isUnlocked ? 'text-slate-400' : 'text-slate-700 blur-[0.5px]'}`}>
          {isUnlocked ? achievement.description : '??? Condition mystère ???'}
        </div>
      </div>
      
      {isUnlocked && <div className="text-yellow-500/20 text-xl animate-pulse">★</div>}
    </div>
  );
};

export default AchievementCard;
