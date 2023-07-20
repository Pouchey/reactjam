import { RuneClient } from 'rune-games-sdk/multiplayer';

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

export interface GameState {
  board: number[][];
  boardSize: number;
  turn: number;
}

export type GameActions = {};
