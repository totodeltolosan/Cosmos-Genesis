
import { GameState } from '../types';
import { MISSIONS } from '../data/missionsData';

export const checkMissions = (state: GameState): { newActive: string[], newCompleted: string[], completedNow: string[] } => {
  let active = [...state.activeMissions];
  let completed = [...state.completedMissions];
  let justCompleted: string[] = [];

  // Check completion of active missions
  active.forEach(missionId => {
    const mission = MISSIONS.find(m => m.id === missionId);
    if (mission && mission.completionCondition(state)) {
      if (!completed.includes(missionId)) {
        completed.push(missionId);
        justCompleted.push(missionId);
      }
    }
  });

  // Remove completed from active list
  active = active.filter(id => !completed.includes(id));

  // Check triggers for new missions
  MISSIONS.forEach(mission => {
    if (!active.includes(mission.id) && !completed.includes(mission.id)) {
      if (mission.triggerCondition({ ...state, completedMissions: completed })) {
        active.push(mission.id);
      }
    }
  });

  return { newActive: active, newCompleted: completed, completedNow: justCompleted };
};
