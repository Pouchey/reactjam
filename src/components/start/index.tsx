import { useGameContext } from '_hooks/useGameContext';

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
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default Roles;
