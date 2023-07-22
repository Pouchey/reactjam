import { ERole } from "_types/enum/ERole";
import { EStatutPlayer } from "_types/enum/EStatutPlayer";

export type TPlayer = {
  id: string;
  status: EStatutPlayer;
  role?: ERole;
};
