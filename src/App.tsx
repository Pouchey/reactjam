import { createContext, useEffect, useState } from 'react';
import Rune from './logic';

import { GameState } from './logic/types/game';
import Board from './components/board';

export const GameContext = createContext<GameState | undefined>(undefined);

const App = () => {
  const [game, setGame] = useState<GameState>();

  // create context for game state

  useEffect(() => {
    Rune.initClient({
      onChange: ({ newGame }) => {
        setGame(newGame);
      },
    });
  }, []);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <GameContext.Provider value={game}>
      <Board />
    </GameContext.Provider>
  );
};

export default App;
