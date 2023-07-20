import { useEffect, useState } from 'react';
import { GameState } from './logic';

const App = () => {
  const [game, setGame] = useState<GameState>();

  useEffect(() => {
    console.log('initClient');
    Rune.initClient({
      onChange: ({ newGame }) => {
        console.log('onChange', newGame);
        setGame(newGame);
        console.log('newGame', newGame);
      },
    });
  }, []);

  console.log('game', game);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Vite + Rune</h1>
      <div className="card">
        <button onClick={() => Rune.actions.increment({ amount: 1 })}>
          count is {game.count}
        </button>
      </div>
    </>
  );
};

export default App;
