import { TGameState } from "_types/game";
import { EPlayerRole, EPlayerStatus } from "_types/player/enum";
import { GLOBAL_PLAYERS } from "..";
import { TInfoRole } from "_types/player";
import { shuffleArray } from "_utils/index";


const getInfoRole = (role: EPlayerRole): TInfoRole => {
    //TODO il faut definir les roles si néccessaire ajouter des attribut dans TInfoRole
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
    const roleArray = shuffleArray([...game.roleInGame])
    game.players.forEach((player, i) => {
        player.status = EPlayerStatus.ALIVE;
        const roleNumber = Math.floor(Math.random() * roleArray.length);
        if (i === murderPlayer) {
            player.infoRole = getInfoRole(EPlayerRole.MURDER);
        } else {
            player.infoRole = getInfoRole(roleArray[roleNumber]);
        }
        roleArray.splice(roleNumber, 1);
    });
};
