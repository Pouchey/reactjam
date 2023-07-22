import { TGameState } from '_types/game';

export const startGame = (game: TGameState) => {
  game.status = 'PLAYING';
};
