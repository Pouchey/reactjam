import { createPlayer } from '_logic/config/player';
import { TGameState } from '_types/game';

export const addNewPlayer = (game: TGameState, playerId: string) => {
  game.players.push(createPlayer(playerId));
};

export const removePlayer = (game: TGameState, playerId: string) => {
  game.players = game.players.filter((player) => player.id !== playerId);
};
