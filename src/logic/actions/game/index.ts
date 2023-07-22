import { TGameState } from '_types/game';
import { EGameStatus } from '_types/game/enum';
import { EPlayerRole, EPlayerStatus } from '_types/player/enum';

import { getRandomPlayerId } from '../player';

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
  game.roundInfo = {
    startedAt: Rune.gameTimeInSeconds(),
    currentPlayerId: getRandomPlayerId(game),
    actionUsed: false,
    moveUsed: false,
  };
};
