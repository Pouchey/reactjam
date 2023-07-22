import { TGameState } from '_types/game';
import { useEffect, useState } from 'react';

import Board from './components/board';
import { GameContext } from './hooks/useGameContext';
import Rune from './logic';

const App = () => {
  const [game, setGame] = useState<TGameState>();

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
