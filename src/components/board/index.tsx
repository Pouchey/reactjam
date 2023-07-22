import { useGameContext } from '_hooks/useGameContext';
import { COLS_SIZE, ROWS_SIZE } from '_logic/config';

import styles from './style.module.scss';

const Board = () => {
  const gameContext = useGameContext();

  return (
    <div
      className={styles.board}
      style={{
        gridTemplateColumns: `repeat(${COLS_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS_SIZE}, 1fr)`,
      }}
    >
      {gameContext.game.board.map((row, y) =>
        row.map((_, x) => (
          <div key={`${x}-${y}`} className={styles.cell}>
            {gameContext.game.board[y][x].id}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
