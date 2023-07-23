import { COLS_SIZE, MAX_PLAYERS, MIN_PLAYERS, ROWS_SIZE } from '_logic/config';
import { createBoard } from '_logic/config/board';
import { TGameState } from '_types/game';
import { EGameStatus } from '_types/game/enum';
import { EPlayerRole } from '_types/player/enum';

export const initGame = (): TGameState => {
  return {
    config: {
      minPlayers: MIN_PLAYERS,
      maxPlayers: MAX_PLAYERS,
    },
    status: EGameStatus.WAITING,
    board: createBoard(COLS_SIZE, ROWS_SIZE),
    players: [],
    roleInGame: [
      EPlayerRole.COP,
      EPlayerRole.CURIOUS,
      EPlayerRole.GOSSIP,
      EPlayerRole.NEIGHBOR,
      EPlayerRole.LITTLE_GIRL,
      EPlayerRole.LOVER,
      EPlayerRole.NEIGHBOR,
      EPlayerRole.NEIGHBOR,
      EPlayerRole.NEIGHBOR,
      EPlayerRole.OVERSEER,
    ]
  };
};
