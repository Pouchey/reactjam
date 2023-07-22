import { cols, rows } from '@logic/config';
import { Cell, GameState } from '../type/GameState';

/**
 * Fonction de création du plateau de jeu (board)
 * @param cols 
 * @param rows 
 * @returns 
 */
export function createBoard(cols: number, rows: number): Cell[][] {
  const board: Cell[][] = [];

  for (let row = 0; row < rows; row++) {
    const rowCells: Cell[] = [];

    for (let col = 0; col < cols; col++) {
      const pos = row * cols + col;
      const cell: Cell = {
        pos,
        character: null,
      };
      rowCells.push(cell);
    }

    board.push(rowCells);
  }

  return board;
}

export const getBoard = (game: GameState) => {
  return game.board;
};

export const getColsBoardSize = (game: GameState) => {
  return game.cols;
};

export const getRowsBoardSize = (game: GameState) => {
  return game.rows;
};

export const getBoardSize = (game: GameState) => {
  return game.boardSize;
};

export function getCoordinatesForIndex(index: number) {
  const row = Math.floor(index / cols)
  const col = index % cols
  return { row, col }
}

export function areCellsNeighbors(index1: number, index2: number) {
  const colDelta = Math.abs(index1 - index2)
  return (
    ((colDelta === 1 &&
      Math.floor(index1 / cols) === Math.floor(index2 / cols)) ||
      (colDelta === cols && index1 % cols === index2 % cols)) &&
    Math.min(index1, index2) >= 0 &&
    Math.max(index1, index2) < cols * rows
  )
}

export const areCoordinatesValid = (row: number, col: number) =>
  row >= 0 && row < rows && col >= 0 && col < cols
