import { TGameState } from '_types/game';
import { EPlayerStatus } from '_types/player/enum';

export const getRandomPlayerId = (game: TGameState) => {
  const alivePlayers = game.players.filter(
    (player) => player.status === EPlayerStatus.ALIVE
  );
  const randomIndex = Math.floor(Math.random() * alivePlayers.length);
  return alivePlayers[randomIndex].id;
};
