import { COLS_SIZE, MAX_PLAYERS, MIN_PLAYERS, ROWS_SIZE } from '_logic/config';
import { createBoard } from '_logic/state/board';
import { TGameState } from '_types/game';

import { createPlayer } from './player';

export const initGame = (playersIds: string[]): TGameState => {
  return {
    config: {
      minPlayers: MIN_PLAYERS,
      maxPlayers: MAX_PLAYERS,
    },
    status: 'WAITING',
    board: createBoard(COLS_SIZE, ROWS_SIZE),
    players: playersIds.map((id) => createPlayer(id)),
    lastPlayerId: 0,
  };
};
