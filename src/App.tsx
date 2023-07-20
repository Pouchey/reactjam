import { useEffect, useState } from 'react';
import { GameState, getBoardSize } from './logic';
import Rune from './logic';

import styles from './App.module.scss';

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
    <>
      <div
        className={styles.board}
        style={{
          gridTemplateColumns: `repeat(${getBoardSize(game)}, min-content)`,
          gridTemplateRows: `repeat(${getBoardSize(game)}, min-content)`,
        }}
      >
        {game.board.map((row, y) =>
          row.map((_, x) => (
            <div key={`${x}-${y}`} className={styles.cell}></div>
          )),
        )}
      </div>
    </>
  );
};

export default App;
