import { Board } from '../board/Board';
import { Pos } from '../board/Pos';
import { EntityState } from '../enums/EntityState';
import { EntityType } from '../enums/EntityType';

export class Entity {
  protected id: number;
  protected type: EntityType | null;
  protected baseHealth: number;
  protected health: number;
  protected baseDomage: number;
  protected domage: number;
  protected movementSpeed: number;
  protected baseMovementSpeed: number;
  protected state: EntityState;

  constructor(
    id: number,
    baseHealth: number,
    movementSpeed: number,
    domage: number,
  ) {
    this.id = id;
    this.type = null;
    this.baseHealth = baseHealth;
    this.health = baseHealth;
    this.movementSpeed = movementSpeed;
    this.baseMovementSpeed = movementSpeed;
    this.state = EntityState.Alive;
    this.baseDomage = domage;
    this.domage = domage;
  }

  public canGoTo(board: Board, currentPos: Pos, newPos: Pos): boolean {
    const rowDiff = Math.abs(currentPos.row - newPos.row);
    const colDiff = Math.abs(currentPos.col - newPos.col);

    return (
      colDiff + rowDiff <= this.movementSpeed &&
      board.cells[newPos.row][newPos.col].entity === null &&
      newPos.row >= 0 &&
      newPos.row < board.size &&
      newPos.col >= 0 &&
      newPos.col < board.size
    );
  }

  public takeDomages = (domage: number): void => {
    this.health -= domage;
    if (this.health <= 0) {
      this.state = EntityState.Dead;
    } else {
      if (this.health < this.baseHealth / 3) this.state = EntityState.week;
    }
  };

  public move = (board: Board, currentPos: Pos, newPos: Pos): void => {
    if (this.canGoTo(board, currentPos, newPos)) {
      board.cells[currentPos.row][currentPos.col].entity = null;
      board.cells[newPos.row][newPos.col].entity = this;
    } else {
      throw new Error('Entity cannot move to this position');
    }
  };
}
