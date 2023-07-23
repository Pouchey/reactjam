import { TGameState } from "_types/game";
import { EPlayerRole, EPlayerStatus } from "_types/player/enum";
import { GLOBAL_PLAYERS } from "..";
import { TInfoRole } from "_types/player";
import { shuffleArray } from "_utils/index";

const getInfoRole = (role: EPlayerRole): TInfoRole => {
    console.log(role);

    switch (role) {
        case EPlayerRole.MURDER:
            return {};
        case EPlayerRole.COP:
            return {};
        case EPlayerRole.CURIOUS:
            return {};
        case EPlayerRole.GOSSIP:
            return {};
        case EPlayerRole.LITTLE_GIRL:
            return {};
        case EPlayerRole.LOVER:
            return {};
        case EPlayerRole.NEIGHBOR:
            return {};
        case EPlayerRole.OVERSEER:
            return {};
        default:
            throw new Error('ROLE undefine');
    }
};

export const initRoles = (game: TGameState) => {
    const murderPlayer = Math.floor(Math.random() * GLOBAL_PLAYERS);
    const roleArray = shuffleArray<EPlayerRole>(
        Object.values(EPlayerRole).filter(
            (r): r is EPlayerRole => r !== EPlayerRole.MURDER
        )
    );
    game.players.forEach((player, i) => {
        player.status = EPlayerStatus.ALIVE;
        const roleNumber = Math.floor(Math.random() * GLOBAL_PLAYERS);
        if (i === murderPlayer) {
            player.infoRole = getInfoRole(EPlayerRole.MURDER);
        } else {
            player.infoRole = getInfoRole(roleArray[roleNumber]);
        }
        roleArray.splice(roleNumber, 1);
    });
};
