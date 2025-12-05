
import React, { useState, useEffect } from 'react';
import { GameState, PlayerProfile, GameMode, ResourceType } from './types';
import { INITIAL_STATE } from './constants';
import { useSaveLoad } from './hooks/useSaveLoad';
import { useGameEngine } from './hooks/useGameEngine';
import { COSMIC_COURSE } from './data/courseData';
import { DIPLOMAS } from './data/diplomaData';

// Components
import GameLayout from './components/Layout/GameLayout';
import CharacterCreator from './components/Modals/CharacterCreator';
import CharacterSelection from './components/CharacterSelection';
import CosmicGuide from './components/Overlays/CosmicGuide';
import IntroSequence from './components/Overlays/IntroSequence';
import QuizModal from './components/Modals/QuizModal';
import DiplomaModal from './components/Modals/DiplomaModal';
import GameLauncher from './components/Modals/GameLauncher';
import NotificationToast from './components/Overlays/NotificationToast';
import LumiChat from './components/Overlays/LumiChat'; 

// Views
import CockpitView from './components/Views/CockpitView';
import ExplorationView from './components/Views/ExplorationView';
import CodexView from './components/Views/CodexView';
import SettingsView from './components/Views/SettingsView';
import CourseView from './components/Views/CourseView';
import ProgressView from './components/Views/ProgressView';
import MuseumView from './components/Views/MuseumView';

type AppState = 'LAUNCHER' | 'CHAR_SELECT' | 'INTRO' | 'CREATOR' | 'GAME';

const App: React.FC = () => {
  // @ts-ignore
  const { loadedState, saveGame } = useSaveLoad(INITIAL_STATE);
  const [appState, setAppState] = useState<AppState>('LAUNCHER');
  
  const [selectedCharId, setSelectedCharId] = useState<string | null>(null);
  const [preselectedMode, setPreselectedMode] = useState<GameMode | null>(null);
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [activeDiplomaId, setActiveDiplomaId] = useState<string | null>(null);

  const isPaused = appState !== 'GAME' || !!activeQuizId || !!activeDiplomaId;
  const engine = useGameEngine(loadedState || INITIAL_STATE, isPaused);
  const { state, setState, clickEffects, handleManualClick, handleBuyUpgrade, resolveDilemma, notify } = engine;

  useEffect(() => {
      if (loadedState && appState === 'LAUNCHER') {
          setState(prev => ({ 
              ...prev, 
              ...loadedState,
              // Ensure audioSettings exists if loading old save
              audioSettings: loadedState.audioSettings || INITIAL_STATE.audioSettings
          }));
          if (loadedState.playerProfile) setAppState('GAME');
      }
  }, [loadedState, appState, setState]);

  useEffect(() => {
      if (appState === 'GAME') {
          const timer = setInterval(() => saveGame(state), 30000);
          return () => clearInterval(timer);
      }
  }, [state, appState, saveGame]);

  const handleCreateProfile = (profile: PlayerProfile, lumiId: string, mode: GameMode) => {
      const finalMode = preselectedMode || mode;
      setState(prev => ({ 
          ...prev, playerProfile: profile, characterId: selectedCharId || 'archivist', 
          lumiStyleId: lumiId, gameMode: finalMode, currentView: finalMode === 'ACADEMY' ? 'COURSE' : 'COCKPIT'
      }));
      setAppState('GAME');
  };

  const handleLabReward = (res: ResourceType, amount: number) => {
      notify("Percée Scientifique", `Gain: ${amount} ${res}`, 'success');
      setState(prev => ({ ...prev, resources: { ...prev.resources, [res]: prev.resources[res] + amount } }));
  };

  const handleSettingsUpdate = (newSettings: any) => {
      setState(prev => ({ ...prev, audioSettings: newSettings }));
  };

  if (!loadedState) return <div className="bg-black text-cyan-500 h-screen flex items-center justify-center font-mono">CHARGEMENT...</div>;
  if (appState === 'LAUNCHER') return <GameLauncher onSelectOption={(opt) => { if(opt === 'SCHOOL') { setPreselectedMode('ACADEMY'); setSelectedCharId('archivist'); setAppState('CREATOR'); } else setAppState('CHAR_SELECT'); }} />;
  if (appState === 'CHAR_SELECT') return <CharacterSelection onSelect={(id) => { setSelectedCharId(id); setAppState('INTRO'); }} />;
  if (appState === 'INTRO') return <IntroSequence onComplete={() => setAppState('CREATOR')} />;
  if (appState === 'CREATOR') return <CharacterCreator onCreate={handleCreateProfile} />;

  const activeLesson = activeQuizId ? COSMIC_COURSE.find(l => l.id === activeQuizId) : null;
  const diplomaToShow = activeDiplomaId ? DIPLOMAS.find(d => d.id === activeDiplomaId) : null;

  return (
    <GameLayout currentView={state.currentView} onNavigate={(v) => setState(p => ({...p, currentView: v}))} state={state}>
        <NotificationToast notifications={state.notifications} />
        <CosmicGuide state={state} onResolveDilemma={resolveDilemma} />

        {state.currentView === 'COCKPIT' && <CockpitView state={state} onBuyUpgrade={handleBuyUpgrade} onManualClick={handleManualClick} clickEffects={clickEffects} onLabReward={handleLabReward} />}
        {state.currentView === 'EXPLORATION' && <ExplorationView state={state} setState={setState} />}
        {state.currentView === 'CODEX' && <CodexView state={state} />}
        
        {/* Pass update handler to settings */}
        {state.currentView === 'SETTINGS' && <SettingsView state={state} onUpdateSettings={handleSettingsUpdate} onPrestige={() => { /* TODO */ }} onReset={() => { localStorage.clear(); window.location.reload(); }} />}
        
        {state.currentView === 'COURSE' && <CourseView state={state} onStartQuiz={setActiveQuizId} onShowDiploma={setActiveDiplomaId} />}
        {state.currentView === 'PROGRESS' && <ProgressView state={state} />}
        {state.currentView === 'MUSEUM' && <MuseumView state={state} />}
        
        {state.currentView === 'LUMI_CHAT' && <LumiChat state={state} onClose={() => setState(p => ({...p, currentView: 'COCKPIT'}))} setState={setState} />}
        
        {activeLesson && <QuizModal title={activeLesson.title} pages={activeLesson.pages} questions={activeLesson.questionPool} onComplete={(score) => { setActiveQuizId(null); }} onClose={() => setActiveQuizId(null)} isTimed={state.playerProfile?.knowledgeLevel === 'EXPERT'} />}
        {diplomaToShow && <DiplomaModal diploma={diplomaToShow} playerName={state.playerProfile?.name || ''} onClose={() => setActiveDiplomaId(null)} />}
    </GameLayout>
  );
};
export default App;
