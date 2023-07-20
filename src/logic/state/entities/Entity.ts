import { Board } from '../board/Board';
import { Pos } from '../board/Pos';
import { EntityState } from '../../types/enums/EntityState';

export class Entity {
  protected id: number;
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
    if (baseHealth <= 0) throw new Error('Base health must be positive');

    this.id = id;
    this.baseHealth = baseHealth;
    this.health = baseHealth;
    this.movementSpeed = movementSpeed;
    this.baseMovementSpeed = movementSpeed;
    this.state = EntityState.Alive;
    this.baseDomage = domage;
    this.domage = domage;
  }

  /**
   * Verify if the entity can go to a new position
   * @param board - The board
   * @param currentPos - The current position of the entity
   * @param newPos - The new position of the entity
   * @returns If the entity can go to the new position
   */
  public canGoTo(board: Board, currentPos: Pos, newPos: Pos): boolean {
    const rowDiff = Math.abs(currentPos.row - newPos.row);
    const colDiff = Math.abs(currentPos.col - newPos.col);

    return (
      colDiff + rowDiff <= this.movementSpeed &&
      board.getCell(newPos).isEmpty() === null &&
      newPos.row >= 0 &&
      newPos.row < board.getSize() &&
      newPos.col >= 0 &&
      newPos.col < board.getSize()
    );
  }

  /**
   * Give domages to this entity
   * @param domage - The domage to take
   */
  public takeDomages = (domage: number): void => {
    this.health -= domage;
    if (this.health <= 0) {
      this.state = EntityState.Dead;
    } else if (this.health < this.baseHealth / 3) this.state = EntityState.Week;
  };

  /**
   * Give domages to this entity
   * @param domage - The domage to take
   */
  public takeHeal = (heal: number): void => {
    this.health += heal;
    if (this.state === EntityState.Week && this.health >= this.baseHealth / 3) {
      this.state = EntityState.Alive;
    }
  };

  /**
   * Move the entity to a new position
   * @param board - The board
   * @param currentPos - The current position of the entity
   * @param newPos - The new position of the entity
   */
  public move = (board: Board, currentPos: Pos, newPos: Pos): void => {
    if (this.canGoTo(board, currentPos, newPos)) {
      board.moveEntity(currentPos, newPos);
    } else throw new Error('Entity cannot move to this position');
  };
}
