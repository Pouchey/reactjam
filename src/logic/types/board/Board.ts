import { Cell } from './Cell';
import { Pos } from './Pos';

export class Board {
  private cells: Cell[][];
  private size: number;

  /**
   * Creates a new board with an empty cell matrix
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

  /**
   * @param pos - The position of the cell
   * @returns The cell at the given position
   */
  public getCell = (pos: Pos): Cell => {
    if (
      pos.row < 0 ||
      pos.row >= this.size ||
      pos.col < 0 ||
      pos.col >= this.size
    )
      throw new Error('Out of bounds');
    return this.cells[pos.row][pos.col];
  };

  /**
   * Initialize the board with entities
   */
  public initialize = (): void => {
    // TODO generate entities on the board
  };

  /**
   * @returns The size of the board
   */
  public getSize = (): number => {
    return this.size;
  };

  /**
   * Move an entity from a cell to another
   * @param currentPos - The position of the entity to move
   * @param newPos - The position of the cell to move the entity to
   */
  public moveEntity = (currentPos: Pos, newPos: Pos): void => {
    const entity = this.cells[currentPos.row][currentPos.col].getEntity();
    if (entity !== null) {
      this.cells[currentPos.row][currentPos.col].setEntity(null);
      this.cells[newPos.row][newPos.col].setEntity(entity);
    } else {
      throw new Error('No entity to move');
    }
  };
}
