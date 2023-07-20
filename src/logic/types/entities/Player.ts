import { EntityType } from '../enums/EntityType';
import { Entity } from './Entity';

export class Player extends Entity {
  constructor(id: number, baseHealth: number, domage: number) {
    super(id, baseHealth, 1, domage);
    this.type = EntityType.Player;
  }
}
