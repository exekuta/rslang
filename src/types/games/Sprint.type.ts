export interface IGuessedWord {
  word: string;
  translation: string;
  isCorrect: boolean;
}

export enum RoundResult {
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  NONE = 'none',
}

export enum GameState {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
