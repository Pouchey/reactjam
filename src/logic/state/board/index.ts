import { TGameState } from '_types/game';
import { EPlayerStatus } from '_types/player/enum';

export const getBoard = (game: TGameState) => {
  return game.board;
};


export const clearBoard = (game: TGameState) => {
  game.players.forEach(player => {
    if (player.status !== EPlayerStatus.ALIVE && player.currentPos !== undefined) {
      game.board[player.currentPos.row][player.currentPos.col].hasPlayer = false;
      game.board[player.currentPos.row][player.currentPos.col].playerId = undefined;

      player.currentPos = undefined;
      player.vote = 0;
      player.ready = true;
    }
  })
};