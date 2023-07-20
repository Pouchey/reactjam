import { Entity } from './Entity';
import { Board } from '../board/Board';
import { Pos } from '../board/Pos';

export class Build extends Entity {
  constructor(id: number, baseHealth: number) {
    super(id, baseHealth, 0, 0);
  }

  public canGoTo(board: Board, currentPos: Pos, newPos: Pos): boolean {
    return false;
  }
}
