import { EntityType } from '../enums/EntityType';
import { Entity } from './Entity';

export class Monster extends Entity {
  constructor(id: number, baseHealth: number, domage: number) {
    super(id, baseHealth, 2, domage);
    this.type = EntityType.Monster;
  }
}
