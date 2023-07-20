import { useEffect, useState } from 'react';
import { GameState } from './logic/logic';

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

  return <div>App</div>;
};

export default App;
