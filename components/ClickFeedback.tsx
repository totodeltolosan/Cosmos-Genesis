import React from 'react';

interface ClickFeedbackProps {
  clicks: { id: number; x: number; y: number; value: string }[];
}

const ClickFeedback: React.FC<ClickFeedbackProps> = ({ clicks }) => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-cyan-300 font-bold text-xl animate-float-up drop-shadow-md"
          style={{ left: click.x, top: click.y }}
        >
          +{click.value}
        </div>
      ))}
      <style>{`
        @keyframes float-up {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-80px) scale(1.5); }
        }
        .animate-float-up {
          animation: float-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ClickFeedback;