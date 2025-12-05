
import { useEffect, useState } from 'react';
import { GameState } from '../types';
import { INITIAL_STATE } from '../constants';

const SAVE_KEY = 'cosmos_genesis_save_v2_4';

export const useSaveLoad = (initialState: GameState) => {
  const [loadedState, setLoadedState] = useState<GameState | null>(null);

  // Load on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SAVE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with initial state to ensure new fields (like new subjects) are present
        const merged = { 
            ...INITIAL_STATE, 
            ...parsed,
            // Ensure resources/production objects have all keys
            resources: { ...INITIAL_STATE.resources, ...parsed.resources },
            production: { ...INITIAL_STATE.production, ...parsed.production },
            // Ensure exploration state exists
            exploration: { ...INITIAL_STATE.exploration, ...(parsed.exploration || {}) }
        };
        setLoadedState(merged);
        console.log("Game loaded successfully.");
      } else {
        setLoadedState(initialState);
      }
    } catch (e) {
      console.error("Failed to load save:", e);
      setLoadedState(initialState);
    }
  }, []);

  // Save function (curried)
  const saveGame = (state: GameState) => {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Save failed (quota exceeded?)", e);
    }
  };

  return { loadedState, saveGame };
};
