import { useGameContext } from '@hooks/useGameContext';
import styles from './style.module.scss';
import { getColsBoardSize, getRowsBoardSize } from '@logic/board';

const Board = () => {
  const game = useGameContext();

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.board}
        style={{
          gridTemplateColumns: `repeat(${getColsBoardSize(game)}, min-content)`,
          gridTemplateRows: `repeat(${getRowsBoardSize(game)}, min-content)`,
        }}
      >
        {game.board.map((row, y) =>
          row.map((_, x) => (
            <div key={`${x}-${y}`} className={styles.cell}></div>
          )),
        )}
      </div>
    </div>
  );
};

export default Board;
