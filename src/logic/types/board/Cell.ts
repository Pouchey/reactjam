import { Entity } from '../entities/Entity';

export interface Cell {
  entity: Entity | null;
}

export class Cell {
  constructor() {
    this.entity = null;
  }

  public isEmpty(): boolean {
    return Boolean(this.entity);
  }

  public setEntity(entity: Entity): void {
    this.entity = entity;
  }
}
