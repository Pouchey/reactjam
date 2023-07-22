import { useEffect, useState } from 'react';

import Board from './components/board';
import { GameContext } from './hooks/useGameContext';
import Rune from './logic';
import { GameState } from './type/GameState';

const App = () => {
  const [game, setGame] = useState<GameState>();

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
