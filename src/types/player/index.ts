import { TPos } from '_types/pos';

import { EPlayerRole, EPlayerStatus } from './enum';

export type TPlayer = {
  id: string;
  status: EPlayerStatus;
  role?: EPlayerRole;
  isBot?: boolean;
  currentPos?: TPos;
};
