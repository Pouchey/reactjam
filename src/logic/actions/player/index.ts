import { TGameState } from '_types/game';

export const selectRole = (
  game: TGameState,
  playerId: string,
  role: string
) => {
  game.players.push({
    id: playerId,
    role,
  });
};
