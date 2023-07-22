import { TCell } from '_types/cell';
import { RuneClient } from 'rune-games-sdk/multiplayer';

import { TPlayer } from '../player';

import { EGameStatus } from './enum';

export type IGameConfig = {
  minPlayers: number;
  maxPlayers: number;
};

export type TGameState = {
  config: IGameConfig;
  status: EGameStatus;
  board: TCell[][];
  players: TPlayer[];
  roundInfo?: {
    currentPlayerId: string | null;
    startedAt: number;
    actionUsed: boolean;
    moveUsed: boolean;
  };
};

export type TGameActions = {
  startGame: () => void;
  playRound: (action: any) => void;
  playMeeting: (action: any) => void;
};

declare global {
  const Rune: RuneClient<TGameState, TGameActions>;
}
