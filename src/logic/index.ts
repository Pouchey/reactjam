import { RuneClient } from 'rune-games-sdk/multiplayer';

export interface GameState {
  board: number[][];
  boardSize: number;
  turn: number;
}

type GameActions = {};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

export const getBoard = (game: GameState) => {
  return game.board;
};

export const getBoardSize = (game: GameState) => {
  return game.boardSize;
};

export const createBoard = (size: number) =>
  new Array(size).fill(0).map(() => new Array(size).fill(0));

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
