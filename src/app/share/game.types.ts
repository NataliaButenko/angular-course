export enum Holder {
  Player = 'player',
  Computer = 'computer',
  Sistem = 'sistem',
}

export interface ICell {
  id: string;
  holder: Holder;
  isActive: boolean;
}

export interface GameStatus {
  playerScore: number;
  computerScore: number;
  gameInProgress: boolean;
  isOver: boolean;
}
