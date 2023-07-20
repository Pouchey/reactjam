import { GameState } from '../types/game';

export const createBoard = (size: number) =>
  new Array(size).fill(0).map(() => new Array(size).fill(0));

export const getBoard = (game: GameState) => {
  return game.board;
};

export const getBoardSize = (game: GameState) => {
  return game.boardSize;
};
