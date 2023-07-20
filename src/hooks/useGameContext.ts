import { createContext, useContext } from 'react';

import { GameState } from '../logic/types/game';

export const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider = GameContext.Provider;

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};
