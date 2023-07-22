import { TPlayer } from '_types/player';

export const createPlayer = (id: string): TPlayer => {
  return {
    id,
    status: 'IDLE',
    isBot: false,
  };
};
