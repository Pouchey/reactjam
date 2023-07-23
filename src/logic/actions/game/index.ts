import { COLS_SIZE, GLOBAL_PLAYERS, ROWS_SIZE } from '_logic/config';
import { TGameState } from '_types/game';
import { EGameStatus } from '_types/game/enum';
import { TPlayer } from '_types/player';
import { EPlayerRole, EPlayerStatus } from '_types/player/enum';
import { TPos } from '_types/pos';
import { shuffleArray } from '_utils/index';

export const startGame = (game: TGameState) => {
  initBots(game);
  initRoles(game);
  initPosition(game);
  randomizePlayer(game);
  initFirstRound(game);

  game.status = EGameStatus.PLAYING;
};

const randomizePlayer = (game: TGameState) => {
  game.players = shuffleArray<TPlayer>(game.players);
};

const randomizePosition = (): TPos => {
  return {
    col: Math.floor(Math.random() * COLS_SIZE),
    row: Math.floor(Math.random() * ROWS_SIZE),
  };
};

const initPosition = (game: TGameState) => {
  game.players.forEach((player) => {
    let pos: TPos = randomizePosition();
    while (game.board[pos.row][pos.col].hasPlayer) {
      pos = randomizePosition();
    }
    game.board[pos.row][pos.col].hasPlayer = true;
    game.board[pos.row][pos.col].playerId = player.id;
    player.currentPos = pos;
  });
};

const initBots = (game: TGameState) => {
  const nbBots = GLOBAL_PLAYERS - game.players.length;

  for (let i = 0; i < nbBots; i++) {
    game.players.push({
      id: `Bot ${i}`,
      status: EPlayerStatus.ALIVE,
      isBot: true,
      infoRole: {},
    });
  }
};

const initRoles = (game: TGameState) => {
  game.players.forEach((player) => {
    player.infoRole.role = EPlayerRole.NEIGHBOR;
    player.status = EPlayerStatus.ALIVE;
  });
};

const initFirstRound = (game: TGameState) => {
  game.roundInfo = {
    startedAt: Rune.gameTimeInSeconds(),
    currentPlayerId: game.players[0].id,
    actionUsed: false,
    moveUsed: false,
  };
};
