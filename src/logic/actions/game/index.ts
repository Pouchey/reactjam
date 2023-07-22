import { TGameState } from '_types/game';

export const startGame = (game: TGameState) => {
  initBots(game);
  initRoles(game);
  initFirstRound(game);

  game.status = 'PLAYING';
};

const initBots = (game: TGameState) => {
  const nbBots = 7 - game.players.length;

  for (let i = 0; i < nbBots; i++) {
    game.players.push({
      id: `Bot ${i}`,
      status: 'IDLE',
      isBot: true,
    });
  }
};

const initRoles = (game: TGameState) => {
  game.players.forEach((player) => {
    player.role = 'CITIZEN';
    player.status = 'ALIVE';
  });
};

const initFirstRound = (game: TGameState) => {
  game.roundStartedAt = Rune.gameTimeInSeconds();
  game.currentPlayerId = getRandomPlayerId(game);
};

const getRandomPlayerId = (game: TGameState) => {
  const alivePlayers = game.players.filter(
    (player) => player.status === 'ALIVE'
  );
  const randomIndex = Math.floor(Math.random() * alivePlayers.length);
  return alivePlayers[randomIndex].id;
};
