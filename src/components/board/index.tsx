import { useGameContext } from '@hooks/useGameContext';

import { getBoardSize } from '@logic/state';

import styles from './style.module.scss';

const Board = () => {
  const game = useGameContext();

  return (
    <div
      className={styles.board}
      style={{
        gridTemplateColumns: `repeat(${getBoardSize(game)}, min-content)`,
        gridTemplateRows: `repeat(${getBoardSize(game)}, min-content)`,
      }}
    >
      {game.board.map((row, y) =>
        row.map((_, x) => <div key={`${x}-${y}`} className={styles.cell}></div>)
      )}
    </div>
  );
};

export default Board;
