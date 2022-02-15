export interface IGuessedWord {
  audio: string;
  answer: string; // 1
  options: string[]; // 1, 2, 3
}

export interface IRoundResult {
  audio: string;
  selectedOption: string;
  answer: string;
  isCorrect: boolean;
  score: number;
}

export enum RoundResult {
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  NONE = 'none',
}

export enum GameState {
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  INACTIVE = 'inactive',
  PLAYING = 'playing',
  ENDED = 'ended',
}
