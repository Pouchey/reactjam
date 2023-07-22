import { cols, maxPlayers, minPlayers, rows } from './config';
import { createBoard } from './board';
import { GameState } from '../type/GameState';

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  setup: (): GameState => {
    return {
      board: createBoard(cols, rows),
      cols: cols,
      rows: rows,
      players: [],
      gameConfig: {
        maxPlayers: maxPlayers,
        minPlayers: minPlayers
      },
      boardSize: cols * rows,
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
