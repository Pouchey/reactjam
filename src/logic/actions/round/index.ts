import { TGameState } from '_types/game';
import { TRoundAction } from '_types/round';
import { ERoundActionType } from '_types/round/enum';
import { moveToCell } from './move';
import { TPlayer } from '_types/player';

export const playRound = (
  game: TGameState,
  playerId: string,
  action: TRoundAction
) => {
  const player: TPlayer | undefined = game.players.find(player => player.id === playerId);
  if (player !== undefined) {
    switch (action.type) {
      case ERoundActionType.MOVE:
        moveToCell(game, player, action.newPos)
        break;
      default:
        break;
    }
  }



  action;
  playerId;
  game;
};
