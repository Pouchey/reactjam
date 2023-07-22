import { EPlayerRole, EPlayerStatus } from './enum';

export type TPlayer = {
  id: string;
  status: EPlayerStatus;
  role?: EPlayerRole;
  isBot?: boolean;
};
