import { createBoard } from './state/board';
import { GameState } from './types/game';

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  setup: (): GameState => {
    return {
      board: createBoard(10),
      boardSize: 10,
      turn: 0,
    };
  },
  actions: {},
  events: {
    playerJoined: () => {
      // Handle player joined
    },
    playerLeft() {
      // Handle player left
    },
  },
});

export default Rune;
