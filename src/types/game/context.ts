import { TGameState } from '.';
import { Players } from 'rune-games-sdk/multiplayer';

export type TGameContext = {
  game: TGameState;
  players: Players;
};
