import { EGameStatus } from '_types/game/enum';
import { TGameState } from '_types/game';
import { arrestedPlayer, getPlayerAlive } from '_logic/state/player';
import { endRound } from '_logic/actions/game';

export const update = ((gameContext: {game: TGameState}) => {
  const playerAlive = getPlayerAlive(gameContext.game)
  if (gameContext.game.status === EGameStatus.RESULT) {
    if (!playerAlive.some(player => !player.ready)) {
      gameContext.game.status = EGameStatus.PLAYING;
    }
  }
  if (gameContext.game.status === EGameStatus.MEETING) {
    if (!playerAlive.some(player => !player.voteUse)) {
      gameContext.game.status = EGameStatus.RESULT;
      arrestedPlayer(gameContext.game);
      endRound(gameContext.game);
    }
  }
})
