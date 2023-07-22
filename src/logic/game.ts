import { RuneClient } from 'rune-games-sdk/multiplayer';
import { CharacterType } from '../type/Enum/CharacterType';
import { GameState, Pos } from '../type/GameState';
import { areCoordinatesValid, getCoordinatesForIndex } from './board';
import { Character } from '../type/Player';


declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

export function goTo(game: GameState, character: Character, newPos: Pos) {
  const coord = getCoordinatesForIndex(character.pos);
  const newCoord = getCoordinatesForIndex(newPos);
  if (areCoordinatesValid(newCoord.row, newCoord.col) && game.board[newCoord.col][newCoord.row].character === null) {
    throw new Error('INVALIDE POSITION');
  }
  game.board[newCoord.col][newCoord.row].character = character
  game.board[coord.col][coord.row].character = null
}

export function createPlayer(characterType: CharacterType) {
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type GameActions = {};
