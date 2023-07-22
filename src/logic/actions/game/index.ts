import { TGameState } from '_types/game';
import { EGameStatus } from '_types/game/enum';
import { EPlayerRole, EPlayerStatus } from '_types/player/enum';

export const startGame = (game: TGameState) => {
  initBots(game);
  initRoles(game);
  initFirstRound(game);

  game.status = EGameStatus.PLAYING;
};

const initBots = (game: TGameState) => {
  const nbBots = 7 - game.players.length;

  for (let i = 0; i < nbBots; i++) {
    game.players.push({
      id: `Bot ${i}`,
      status: EPlayerStatus.ALIVE,
      isBot: true,
    });
  }
};

const initRoles = (game: TGameState) => {
  game.players.forEach((player) => {
    player.role = EPlayerRole.NEIGHBOR;
    player.status = EPlayerStatus.ALIVE;
  });
};

const initFirstRound = (game: TGameState) => {
  game.roundStartedAt = Rune.gameTimeInSeconds();
  game.currentPlayerId = getRandomPlayerId(game);
};

const getRandomPlayerId = (game: TGameState) => {
  const alivePlayers = game.players.filter(
    (player) => player.status === EPlayerStatus.ALIVE
  );
  const randomIndex = Math.floor(Math.random() * alivePlayers.length);
  return alivePlayers[randomIndex].id;
};
