import { TPos } from '_types/pos';

import { EPlayerRole, EPlayerStatus } from './enum';


export type TInfoRole = {
  role?: EPlayerRole;
  actionIsPassif?: boolean;
  actionCount?: number;
  loverId?: string
}

export type TPlayer = {
  id: string;
  status: EPlayerStatus;
  currentPos?: TPos;
  isBot?: boolean;
  infoRole: TInfoRole;
};
