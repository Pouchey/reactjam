// TODO: Move to utils folder
// Replace function to const function

import { ROWS_SIZE, COLS_SIZE } from "_logic/config";
import { TGameState } from "_types/game";
import { TPos } from "_types/pos";

export function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const cellInBoard = (game: TGameState, pos: TPos) => {
    return pos.row >= 0 && pos.row <= ROWS_SIZE && pos.col >= 0 && pos.col <= COLS_SIZE
}

export const hasPlayer = (game: TGameState, pos: TPos) => {
    return game.board[pos.row][pos.col].hasPlayer
}

export const verifCell = (game: TGameState, pos: TPos) => {
    return cellInBoard(game, pos) && !hasPlayer(game, pos)
}