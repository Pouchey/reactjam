import { Entity } from '../entities/Entity';

export class Cell {
  private entity: Entity | null;
  constructor() {
    this.entity = null;
  }

  /**
   * @returns true if the cell is empty
   */
  public isEmpty(): boolean {
    return Boolean(this.entity);
  }

  /**
   * @returns The entity in the cell
   */
  public getEntity(): Entity | null {
    return this.entity;
  }

  /**
   * @param entity - The entity to set
   */
  public setEntity(entity: Entity | null): void {
    this.entity = entity;
  }
}
