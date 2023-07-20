import { GameState } from '../types/game';

export const createBoard = (size: number) =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => 0));

export const getBoard = (game: GameState) => {
  return game.board;
};

export const getBoardSize = (game: GameState) => {
  return game.boardSize;
};
