import { GLOBAL_PLAYERS } from '..';
import { TGameState } from '_types/game';
import { TInfoRole } from '_types/player';
import { EPlayerRole } from '_types/player/enum';
import { shuffleArray } from '_utils/index';

const getInfoRole = (role: EPlayerRole): TInfoRole => {
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

export const initInfoRole = (game: TGameState) => {
  const murderPlayer = Math.floor(Math.random() * GLOBAL_PLAYERS);
  const roleArray = shuffleArray<EPlayerRole>(
    Object.values(EPlayerRole).filter(
      (r): r is EPlayerRole => r !== EPlayerRole.MURDER
    )
  );
  game.players.forEach((player, i) => {
    const roleNumber = Math.floor(Math.random() * GLOBAL_PLAYERS);
    if (i === murderPlayer) {
      player.infoRole = getInfoRole(EPlayerRole.MURDER);
    } else {
      player.infoRole = getInfoRole(roleArray[roleNumber]);
    }
    roleArray.splice(roleNumber, 1);
  });
};
