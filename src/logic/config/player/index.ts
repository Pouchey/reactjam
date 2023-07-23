import { TPlayer } from '_types/player';
import { EPlayerStatus } from '_types/player/enum';

export const createPlayer = (id: string): TPlayer => {
  return {
    id,
    status: EPlayerStatus.IDLE,
    isBot: false,
    infoRole: {},
  };
};
