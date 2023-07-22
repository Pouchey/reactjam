import { TPlayer } from '_types/player';

export const createPlayer = (id: string, role: string): TPlayer => {
  return {
    id,
    status: 'ALIVE',
    role: 'crewmate',
  };
};
