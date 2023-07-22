import { CharacterType } from "./Enum/CharacterType";
import { EntityState } from "./Enum/EntityState";
import { Pos, GameState } from "./GameState";

export type Entity = {
    id: number,
    currentPos: Pos,
    state: EntityState
}

export type Capacity = {
    canGoTo: (game: GameState, character: Character, newPos: Pos) => boolean;
    getGoTo: (game: GameState, character: Character) => Pos[];
    moveTo: (game: GameState, character: Character, newPos: Pos) => void;
    capacity: (game: GameState, character: Character) => void;
}

export type Character = {
    characterType: CharacterType
    entity: Entity,
    capacity: Capacity
    pos: Pos
}

export type Player = {
    id: number;
    name: string;
    image: URL;
    character: Character
}