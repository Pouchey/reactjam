import { TGameState } from '_types/game';
import { EGameStatus } from '_types/game/enum';
import { EPlayerRole, EPlayerStatus } from '_types/player/enum';

export const startGame = (game: TGameState) => {
  initBots(game);
  initRoles(game);
  initPosition(game);
  // TODO : Randomize players order
  initFirstRound(game);

  game.status = EGameStatus.PLAYING;
};

const initPosition = (game: TGameState) => {
  let end = false;
  let tabPlayer = [...game.players];

  // IDEE POUR OPTIMISER : On pourrait itérer sur les joueurs et leur donner une position aléatoire
  // Si la position est déjà prise, on reprend une position aléatoire
  // Permettrait de ne pas avoir à itérer sur toutes les cases du plateau
  // Permettrait de ne pas faire d'opérations de tableaux supplémentaires

  // REMARQUE : Position en 2D pour le joueur mais le plateau est en 1D
  // Il faudrait harmoniser les deux

  while (!end) {
    game.board.forEach((row, i) =>
      row.forEach((cell, j) => {
        if (!cell.hasPlayer && Math.floor(Math.random() * 100) < 50 && !end) {
          cell.hasPlayer = true;
          cell.playerId = tabPlayer.pop()?.id;

          const playerToUpdate = game.players.find(
            (player) => player.id === cell.playerId
          );
          if (playerToUpdate) {
            playerToUpdate.currentPos = { col: j, row: i };
          }
        }
      })
    );
    end = tabPlayer.length === 0;
  }
};

const initBots = (game: TGameState) => {
  const nbBots = 7 - game.players.length;

  for (let i = 0; i < nbBots; i++) {
    game.players.push({
      id: `Bot ${i}`,
      status: EPlayerStatus.ALIVE,
      isBot: true,
    });
  }
};

const initRoles = (game: TGameState) => {
  game.players.forEach((player) => {
    player.role = EPlayerRole.NEIGHBOR;
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
