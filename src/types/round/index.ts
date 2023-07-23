import { ERoundActionType } from './enum';

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

export type TRoundAction =
  | {
      type: ERoundActionType.MOVE;
      payload: TPayloadMoveNeighbour | TPayloadMoveFlic;
    }
  | {
      type: ERoundActionType.ACTION;
      payload: TPayloadActionNeighbour | TPayloadActionFlic;
    }
  | {
      type: ERoundActionType.SKIP;
    };
