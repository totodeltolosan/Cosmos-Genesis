
import React, { useRef } from 'react';
import { Era } from '../types';
import { useCanvasAnimation } from '../hooks/useCanvasAnimation';

interface UniverseCanvasProps { 
    era: Era; 
    entropy: number; 
    matter: number; 
    universeAge: number; 
}

const UniverseCanvas: React.FC<UniverseCanvasProps> = ({ era }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // All animation logic is now delegated to this hook
  useCanvasAnimation(canvasRef, era);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none" 
    />
  );
};

export default UniverseCanvas;
