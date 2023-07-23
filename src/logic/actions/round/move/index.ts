import { TCell } from "_types/cell";
import { TGameState } from "_types/game";
import { TPlayer } from "_types/player";
import { EPlayerRole } from "_types/player/enum";
import { TPos } from "_types/pos";
import { TRoundAction } from "_types/round";
import { verifCell } from "_utils/index";

const moveAllDirection = (game: TGameState, player: TPlayer): TPos[] => {
    let pos: TPos[] = []
    if (player.currentPos !== undefined) {
        pos = pos.concat(move2D(game, player));
        pos = pos.concat(moveDiagonal(game, player))
    } else {
        throw new Error("player not have position");
    }
    return pos
}

const move2D = (game: TGameState, player: TPlayer): TPos[] => {
    let pos: TPos[] = []
    if (player.currentPos !== undefined) {
        //horizontal / vertical
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

const moveDiagonal = (game: TGameState, player: TPlayer): TPos[] => {
    let pos: TPos[] = []
    if (player.currentPos !== undefined) {
        //diagonale
        verifCell(game, { col: player.currentPos?.col - 1, row: player.currentPos?.row + 1 })
            && pos.push({ col: player.currentPos?.col - 1, row: player.currentPos?.row + 1 })
        verifCell(game, { col: player.currentPos?.col + 1, row: player.currentPos?.row + 1 })
            && pos.push({ col: player.currentPos?.col + 1, row: player.currentPos?.row + 1 })
        verifCell(game, { col: player.currentPos?.col - 1, row: player.currentPos?.row - 1 })
            && pos.push({ col: player.currentPos?.col - 1, row: player.currentPos?.row - 1 })
        verifCell(game, { col: player.currentPos?.col + 1, row: player.currentPos?.row - 1 })
            && pos.push({ col: player.currentPos?.col + 1, row: player.currentPos?.row - 1 })

    } else {
        throw new Error("player not have position");
    }
    return pos
}

const moveLover = (game: TGameState, player: TPlayer): TPos[] => {
    if (player.infoRole.loverId !== undefined) {
        const playerLover: TPlayer | undefined = game.players.find(player => player.id === player.infoRole.loverId);
        if (playerLover !== undefined)
            return moveAllDirection(game, playerLover);
        else
            throw new Error("player lover not found");

    } else {
        return moveAllDirection(game, player);
    }
}

export const getPossibleLocation = (
    game: TGameState,
    playerId: string,
    action: TRoundAction
): TPos[] => {
    const player: TPlayer | undefined = game.players.find(player => player.id === playerId);
    if (player !== undefined)
        switch (player.infoRole.role) {
            case EPlayerRole.MURDER:
                return moveAllDirection(game, player)
            case EPlayerRole.COP:
                return move2D(game, player)
            case EPlayerRole.CURIOUS:
                return moveDiagonal(game, player)
            case EPlayerRole.GOSSIP:
                return move2D(game, player)
            case EPlayerRole.LITTLE_GIRL:
                return moveAllDirection(game, player)
            case EPlayerRole.LOVER:
                return moveLover(game, player)
            case EPlayerRole.NEIGHBOR:
                return moveAllDirection(game, player)
            case EPlayerRole.OVERSEER:
                return moveDiagonal(game, player)
            default:
                throw new Error("ROLE undefine");

        }
    else {
        throw new Error("player not exist");
    }
}

export const moveToCell = (game: TGameState, player: TPlayer, newPos: TPos) => {
    if (verifCell(game, newPos)) {
        if (player.currentPos !== undefined) {
            const oldCell: TCell = game.board[player.currentPos?.row][player.currentPos?.col];
            const newCell: TCell = game.board[newPos.row][newPos.col];
            oldCell.hasPlayer = false;
            oldCell.playerId = undefined;
            newCell.hasPlayer = true;
            newCell.playerId = player.id;
        }
    } else
        throw new Error("new position not valid");

}

