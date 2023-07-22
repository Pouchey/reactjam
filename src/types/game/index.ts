import { TCell } from '_types/cell';
import { TMeetingAction } from '_types/meeting';
import { TRoundAction } from '_types/round';
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
  playRound: (action: TRoundAction) => void;
  playMeeting: (action: TMeetingAction) => void;
};

declare global {
  const Rune: RuneClient<TGameState, TGameActions>;
}
