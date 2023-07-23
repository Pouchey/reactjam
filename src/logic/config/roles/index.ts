import { TGameState } from "_types/game";
import { EPlayerRole } from "_types/player/enum";
import { GLOBAL_PLAYERS } from "..";
import { TInfoRole } from "_types/player";

function getInfoRole(role: EPlayerRole): TInfoRole {
    switch (role) {
        case EPlayerRole.MURDER:
            return {

            }
        case EPlayerRole.COP:
            return {

            }

        case EPlayerRole.CURIOUS:
            return {

            }
        case EPlayerRole.GOSSIP:
            return {

            }
        case EPlayerRole.LITTLE_GIRL:
            return {

            }
        case EPlayerRole.LOVER:
            return {

            }
        case EPlayerRole.NEIGHBOR:
            return {

            }
        case EPlayerRole.OVERSEER:
            return {

            }
        default:
            throw new Error("ROLE undefine");

    }
}

export const initInfoRole = (game: TGameState) => {
    let murderPlayer = Math.floor(Math.random() * GLOBAL_PLAYERS)
    let roleArray: EPlayerRole[] = shuffleArray(Object.values(EPlayerRole).filter(r => r != EPlayerRole.MURDER));
    game.players.forEach((player, i) => {
        let roleNumber = Math.floor(Math.random() * GLOBAL_PLAYERS)
        if (i === murderPlayer) {
            player.infoRole = getInfoRole(EPlayerRole.MURDER)
        } else {
            player.infoRole = getInfoRole(roleArray[roleNumber])
        }
        roleArray.splice(roleNumber, 1);
    })
}