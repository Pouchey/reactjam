import { TCell } from '_types/cell';

export const createBoard = (
  cols_size: number,
  rows_size: number
): TCell[][] => {
  const board = Array.from({ length: rows_size }, (_, x) =>
    Array.from({ length: cols_size }, (_, y) => ({
      id: x * cols_size + y,
      hasPlayer: false,
    }))
  );
  return board;
};
