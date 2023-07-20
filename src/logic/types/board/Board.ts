import { Cell } from './Cell';

export interface Board {
  cells: Cell[][];
  size: number;
}

export class Board {
  /**
   * Creates a new board with an empty cell matrix
   *
   * @param size - The size of the board
   */
  constructor(size: number) {
    this.size = size;
    this.cells = 
    Array.from({ length: size }, () => Array.from({ length: size }, () => new Cell()));
}
}