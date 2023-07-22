import { TGameState } from '_types/game';
import { createContext, useContext } from 'react';

export const GameContext = createContext<TGameState | undefined>(undefined);

export const GameProvider = GameContext.Provider;

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};
