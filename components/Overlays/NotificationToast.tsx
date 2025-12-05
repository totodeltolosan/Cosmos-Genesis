
import React from 'react';
import { Notification } from '../../types';

interface Props { notifications: Notification[]; }

const NotificationToast: React.FC<Props> = ({ notifications }) => {
  if (notifications.length === 0) return null;

  return (
    <div className="absolute top-20 right-4 z-[90] flex flex-col gap-3 w-80 pointer-events-none">
        {notifications.map(notif => (
            <div key={notif.id} className={`pointer-events-auto p-4 rounded-lg backdrop-blur-md shadow-2xl border-l-4 animate-slide-in flex gap-3 ${
                notif.type === 'success' ? 'bg-green-900/80 border-green-400 text-green-100' :
                notif.type === 'warning' ? 'bg-amber-900/80 border-amber-400 text-amber-100' :
                notif.type === 'error' ? 'bg-red-900/80 border-red-400 text-red-100' :
                'bg-blue-900/80 border-cyan-400 text-cyan-100'
            }`}>
                <div className="text-2xl shrink-0">
                    {notif.type === 'success' ? '🎉' : notif.type === 'warning' ? '⚠️' : notif.type === 'error' ? '🚨' : 'ℹ️'}
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide mb-1">{notif.title}</h4>
                    <p className="text-xs opacity-90 leading-tight">{notif.message}</p>
                </div>
            </div>
        ))}
        <style>{`
            @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            .animate-slide-in { animation: slideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        `}</style>
    </div>
  );
};
export default NotificationToast;
