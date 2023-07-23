import { TGameState } from "_types/game";
import { TPlayer } from "_types/player";
import { EPlayerRole } from "_types/player/enum";
import { TPos } from "_types/pos";
import { TRoundAction } from "_types/round";
import { verifCell } from "_utils/index";

const moveAllDirection = (game: TGameState, player: TPlayer): TPos[] => {
    let pos: TPos[] = []
    if (player.currentPos !== undefined) {
        verifCell(game, { col: player.currentPos?.col - 1, row: player.currentPos?.row })
            && pos.push({ col: player.currentPos?.col - 1, row: player.currentPos?.row })
        verifCell(game, { col: player.currentPos?.col + 1, row: player.currentPos?.row })
            && pos.push({ col: player.currentPos?.col + 1, row: player.currentPos?.row })
        verifCell(game, { col: player.currentPos?.col, row: player.currentPos?.row - 1 })
            && pos.push({ col: player.currentPos?.col, row: player.currentPos?.row - 1 })
        verifCell(game, { col: player.currentPos?.col, row: player.currentPos?.row + 1 })
            && pos.push({ col: player.currentPos?.col, row: player.currentPos?.row + 1 })
    } else {
        throw new Error("player not have position");
    }
    return pos
}

export function getPossibleLocation(
    game: TGameState,
    playerId: string,
    action: TRoundAction
): TPos[] {
    const player: TPlayer | undefined = game.players.find(player => player.id === playerId);
    if (player !== undefined)
        switch (player.infoRole.role) {
            case EPlayerRole.MURDER:
                return moveAllDirection(game, player)
            case EPlayerRole.COP:
                return []
            case EPlayerRole.CURIOUS:
                return []
            case EPlayerRole.GOSSIP:
                return []
            case EPlayerRole.LITTLE_GIRL:
                return []
            case EPlayerRole.LOVER:
                return []
            case EPlayerRole.NEIGHBOR:
                return []
            case EPlayerRole.OVERSEER:
                return []
            default:
                throw new Error("ROLE undefine");

        }
    else {
        throw new Error("player not exist");
    }
}

