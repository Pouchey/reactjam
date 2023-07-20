import { Entity } from './Entity';

export class Object extends Entity {
  constructor(id: number, movementSpeed: number, domage: number) {
    super(id, 1, movementSpeed, domage);
  }
}
