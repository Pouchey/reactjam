import { createPlayer } from '_logic/config/player';
import { TGameState } from '_types/game';

export const selectRole = (
  game: TGameState,
  playerId: string,
  role: string
) => {
  game.players.push(createPlayer(playerId, role));
};
