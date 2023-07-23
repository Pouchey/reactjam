import { TGameState } from '_types/game';
import { EGameStatus } from '_types/game/enum';
import { TMeetingAction } from '_types/meeting';
import { TPlayer } from '_types/player';


const nextVote = (game: TGameState, prevPlayer: TPlayer) => {
  const indexSuivant = game.players.indexOf(prevPlayer) + 1;
  if (indexSuivant >= game.players.length) {
    game.status = EGameStatus.PLAYING
  } else {
    const nextPlayer = game.players[indexSuivant]
    game.roundMeetingInfo = {
      currentPlayerId: nextPlayer.id,
      startedAt: Rune.gameTimeInSeconds(),
    }
  }
}

export const playMeeting = (
  game: TGameState,
  playerId: string,
  action: TMeetingAction
) => {
  const targetPlayer: TPlayer | undefined = game.players.find(player => player.id === action.payload.targetId);
  const player: TPlayer | undefined = game.players.find(player => player.id === playerId);
  if (player !== undefined) {
    if (targetPlayer !== undefined) {
      targetPlayer.vote = + 1;
      nextVote(game, player);
    } else {
      throw new Error("player choose not exist");
    }
  } else {
    throw new Error("player not exist");
  }
};
