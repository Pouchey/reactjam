import { TGameState } from "_types/game";
import { TPlayer } from "_types/player";
import { EPlayerStatus } from "_types/player/enum";
import { shuffleArray } from "_utils/index";

export const getRandomPlayerId = (game: TGameState) => {
    const alivePlayers = game.players.filter(
        (player) => player.status === EPlayerStatus.ALIVE
    );
    const randomIndex = Math.floor(Math.random() * alivePlayers.length);
    return alivePlayers[randomIndex].id;
};

export const getPlayerAlive = (game: TGameState) => {
    return game.players.filter(player => player.status === EPlayerStatus.ALIVE);
}

export const arrestedPlayer = (game: TGameState) => {
    const playerArrested = game.players.sort((playerA, playerB) => playerB.vote - playerA.vote).at(0);
    if (playerArrested !== undefined) {
        playerArrested.status = EPlayerStatus.ARRESTED;
    } else {
        throw new Error("No player un game");
    }
};

export const randomizePlayer = (game: TGameState) => {
    game.players = shuffleArray<TPlayer>(game.players);
};

export const refreshPlayer = (game: TGameState) => {
    const playerAlive = getPlayerAlive(game)
    playerAlive.forEach(player => {
        if (!player.isBot) {
            player.ready = false;
            player.vote = 0;
            player.voteUse = false;
        }
    })
}