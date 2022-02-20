export interface IGuessedWord {
  word: string;
  wordId: string;
  translation: string;
  correctTranslation: string;
  isCorrect: boolean;
}

export interface ISprintRoundResult {
  word: string;
  translation: string;
  correctTranslation: string;
  isGuessed: boolean;
  score: number;
}

export enum RoundResult {
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  NONE = 'none',
}

export enum GameState {
  INACTIVE = 'inactive',
  PLAYING = 'playing',
  ENDED = 'ended',
}

export enum SprintScreen {
  GAME = 'game',
  END = 'end',
  DETAILS = 'details',
}
