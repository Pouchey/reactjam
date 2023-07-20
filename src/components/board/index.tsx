import { useContext } from 'react';
import styles from './style.module.scss';
import { GameContext } from '../../App';
import { getBoardSize } from '../../logic/state';

const Board = () => {
  const game = useContext(GameContext)!;

  return (
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
  );
};

export default Board;
