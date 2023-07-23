import { TGameState } from "_types/game";
import { TPlayer } from "_types/player";
import { EPlayerRole } from "_types/player/enum";

const actionCop = (game: TGameState, player: TPlayer) => {
    game;
    player;
}

export const playAction = (game: TGameState, player: TPlayer) => {
    //TODO definir les actions en fonction du doc libre a toi de faire comme tu veux
    if (player !== undefined)
        switch (player.infoRole.role) {
            case EPlayerRole.COP:
                actionCop(game, player)
                break;
            case EPlayerRole.CURIOUS:
                break;
            case EPlayerRole.GOSSIP:
                break;
            case EPlayerRole.LOVER:
                break;
            case EPlayerRole.OVERSEER:
                break;
            case EPlayerRole.MURDER:
                break;
            default:
                break;
        }
    else {
        throw new Error('player not exist');
    }
}