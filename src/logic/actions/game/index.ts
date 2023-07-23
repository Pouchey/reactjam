import { GLOBAL_PLAYERS } from '_logic/config';
import { initRoles } from '_logic/config/roles';
import { TGameState } from '_types/game';
import { EGameStatus } from '_types/game/enum';
import { TPlayer } from '_types/player';
import { EPlayerRole, EPlayerStatus } from '_types/player/enum';
import { TPos } from '_types/pos';
import { randomizePosition, shuffleArray } from '_utils/index';
import { getPlayerAlive } from '../player';

export const startGame = (game: TGameState) => {
  initBots(game);
  initRoles(game);
  initPosition(game);
  randomizePlayer(game);
  initFirstRound(game);

  game.status = EGameStatus.PLAYING;
};

export const endRound = (game: TGameState) => {
  clearBoard(game);
  gameOver(game);
}

const randomizePlayer = (game: TGameState) => {
  game.players = shuffleArray<TPlayer>(game.players);
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
      ready: true,
      vote: 0
    });
  }
};

const initFirstRound = (game: TGameState) => {
  game.roundInfo = {
    startedAt: Rune.gameTimeInSeconds(),
    currentPlayerId: game.players[0].id,
    actionUsed: false,
    moveUsed: false,
  };
};
function gameOver(game: TGameState) {
  const playerAlive = getPlayerAlive(game);
  if (playerAlive.length == 2) {
    const murder = playerAlive.find(player => player.infoRole.role === EPlayerRole.MURDER)
    if (murder !== undefined) {
      Rune.gameOver({
        players: {
          [murder.id]: 'WON'
        }
      })
    }
    game.status = EGameStatus.FINISHED
  } else if (!playerAlive.some(player => player.infoRole.role === EPlayerRole.MURDER)) {
    let players: {
      [playerId: string]: number | "WON" | "LOST";
    } = {}

    playerAlive.forEach(player => {
      players[player.id] = "WON";
    });

    Rune.gameOver({
      players:
        players
    })
    game.status = EGameStatus.FINISHED
  }
}

function clearBoard(game: TGameState) {
  game.players.forEach(player => {
    if (player.status !== EPlayerStatus.ALIVE && player.currentPos !== undefined) {
      game.board[player.currentPos.row][player.currentPos.col].hasPlayer = false;
      game.board[player.currentPos.row][player.currentPos.col].playerId = undefined;

      player.currentPos = undefined;
      player.vote = 0;
      player.ready = true;
    }
  })
}

