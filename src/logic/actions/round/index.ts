import { TGameState } from '_types/game';
import { TRoundAction } from '_types/round';
import { ERoundActionType } from '_types/round/enum';
import { moveToCell } from './move';
import { TPlayer } from '_types/player';
import { EGameStatus } from '_types/game/enum';
import { playAction } from './action';
import { getPlayerAlive } from '../player';


const nextPlayer = (game: TGameState, prevPlayer: TPlayer) => {
  const playerAlive = getPlayerAlive(game)
  const indexSuivant = playerAlive.indexOf(prevPlayer) + 1;
  if (indexSuivant >= playerAlive.length) {
    game.status = EGameStatus.RESULT
  } else {
    const nextPlayer = game.players[indexSuivant]
    if (nextPlayer.infoRole.actionIsPassif !== undefined) {
      game.roundInfo = {
        actionUsed: nextPlayer.infoRole.actionIsPassif,
        currentPlayerId: nextPlayer.id,
        moveUsed: false,
        startedAt: Rune.gameTimeInSeconds(),
      }
    } else {
      throw new Error("Info role incomplet");
    }
  }
}

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
        if (game.roundInfo !== undefined) {
          game.roundInfo.moveUsed = true;
        }
        break;
      case ERoundActionType.ACTION:
        playAction(game, player)
        if (game.roundInfo !== undefined) {
          game.roundInfo.actionUsed = true;
        }
        break;
      case ERoundActionType.SKIP:
        nextPlayer(game, player);
        break;
      default:
        throw new Error("action unknown");
    }
    if (game.roundInfo?.moveUsed && game.roundInfo.actionUsed) {
      nextPlayer(game, player);
    }
  } else {
    throw new Error("player not exist");
  }
};
