import { Character, Player } from "./Player";

export type Pos = number

export type Cell = {
    pos: Pos,
    character: Character | null
}

type GameConfig = {
    minPlayers: number;
    maxPlayers: number;
};

export interface GameState {
    gameConfig: GameConfig;
    players: Player[];
    board: Cell[][];
    boardSize: number;
    rows: number;
    cols: number;
    turn: number;
}