import { TGameState } from '_types/game';
import { TMeetingAction } from '_types/meeting';
import { TPlayer } from '_types/player';

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
      player.voteUse = true;
    } else {
      throw new Error("player choose not exist");
    }
  } else {
    throw new Error("player not exist");
  }
};


