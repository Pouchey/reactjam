export type TPlayer = {
  id: string;
  status: 'ALIVE' | 'DEAD' | 'IDLE';
  role?: string;
  isBot: boolean;
};
