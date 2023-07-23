import { TPos } from '_types/pos';
import { ERoundActionType } from './enum';
import { EPlayerRole } from '_types/player/enum';

export type TPayloadMoveNeighbour = {
  cellId: number;
};

export type TPayloadMoveFlic = {
  cellId: number;
};

export type TPayloadActionNeighbour = {
  cellId: number;
};

export type TPayloadActionFlic = {
  cellId: number;
};

export type TGestionRole = {
  roles: EPlayerRole[]
}

export type TRoundAction =
  | {
    type: ERoundActionType.MOVE;
    newPos: TPos;
  }
  | {
    type: ERoundActionType.ACTION;
    payload: TPayloadActionNeighbour | TPayloadActionFlic;
  }
  | {
    type: ERoundActionType.SKIP;
  };
