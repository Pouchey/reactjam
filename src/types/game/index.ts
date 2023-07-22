import { TCell } from '_types/cell';
import { RuneClient } from 'rune-games-sdk/multiplayer';

import { TPlayer } from '../player';

export type IGameConfig = {
  minPlayers: number;
  maxPlayers: number;
};

export type TGameStatus = 'WAITING' | 'PLAYING' | 'MEETING' | 'FINISHED';

export type TGameState = {
  config: IGameConfig;
  status: TGameStatus;
  board: TCell[][];
  players: TPlayer[];
  lastPlayerId: number;
};

export type TGameActions = {
  startGame: () => void;
  selectRole: (role: string) => void;
  playTurn: (action: any) => void;
  playMeeting: (action: any) => void;
};

declare global {
  const Rune: RuneClient<TGameState, TGameActions>;
}
