import Button from '_components/button';
import { useGameContext } from '_hooks/useGameContext';

import styles from './style.module.scss';

const Roles = () => {
  const gameContext = useGameContext();

  const handleStartGame = () => {
    Rune.actions.startGame();
  };

  return (
    <div>
      <h1>Waiting for players</h1>
      <h2>Players: {Object.keys(gameContext.players).length}</h2>
      <div>
        {Object.values(gameContext.players).map((player) => (
          <div key={player.playerId}>
            <img src={player.avatarUrl} alt={player.displayName} />
            <p>{player.displayName}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonwrapper}>
        <Button onClick={handleStartGame}>START</Button>
      </div>
    </div>
  );
};

export default Roles;
