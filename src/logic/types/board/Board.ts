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
    this.cells = new Array(size);
    for (let i = 0; i < this.size; i++) {
      this.cells[i] = new Array(size);
      for (let j = 0; j < this.size; i++) {
        this.cells[i][j] = new Cell();
      }
    }
  }
}
