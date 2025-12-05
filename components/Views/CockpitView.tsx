
import React from 'react';
import { GameState, ResourceType } from '../../types';
import UniverseCanvas from '../UniverseCanvas';
import ControlPanel from '../ControlPanel';
import StatsHeader from '../StatsHeader';
import LogPanel from '../LogPanel';
import ClickFeedback from '../ClickFeedback';
import ActiveEventsPanel from '../ActiveEventsPanel';
import ResearchLab from '../Cockpit/ResearchLab';

interface CockpitViewProps {
  state: GameState;
  onBuyUpgrade: (id: string) => void;
  onManualClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clickEffects: any[];
  onLabReward: (res: ResourceType, amount: number) => void;
}

const CockpitView: React.FC<CockpitViewProps> = ({ state, onBuyUpgrade, onManualClick, clickEffects, onLabReward }) => {
  return (
    <div className="relative w-full h-full flex flex-row overflow-hidden">
        {/* Visual Layer */}
        <UniverseCanvas 
            era={state.era} 
            entropy={state.resources[ResourceType.ENTROPY]} 
            matter={state.resources[ResourceType.MATTER]} 
            universeAge={state.universeAge}
        />
        
        {/* Overlay UI */}
        <ClickFeedback clicks={clickEffects} />
        <ActiveEventsPanel events={state.activeEvents} />
        <StatsHeader state={state} />
        
        {/* Controls */}
        <div className="z-20 h-full flex-shrink-0 pt-16 flex flex-col"> 
            <ControlPanel state={state} onBuyUpgrade={onBuyUpgrade} onManualClick={onManualClick}/>
            {/* Lab embedded below Control Panel on Desktop or absolute on mobile if needed */}
            <div className="w-96 hidden md:block px-4 pb-4">
                <ResearchLab state={state} onReward={onLabReward} />
            </div>
        </div>
        
        {/* Bottom Panel */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 flex justify-center">
            <div className="pointer-events-auto w-full max-w-3xl">
                <LogPanel logs={state.logs} />
            </div>
        </div>
    </div>
  );
};

export default CockpitView;
