import { Entity } from './Entity';
import { EntityType } from '../enums/EntityType';

export class Build extends Entity {
  constructor(id: number, baseHealth: number) {
    super(id, baseHealth, 0, 0);
    this.type = EntityType.Building;
  }
}
