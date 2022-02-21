export interface IGuessedWord {
  audio: string;
  answer: string;
  options: string[];
}

export interface IAudioChallengeRoundResult {
  audio: string;
  answer: string;
  correctAnswer: string;
  isLearned: boolean;
  isPlayed: boolean;
  isGuessed: boolean;
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

export enum AudioChallengeScreen {
  GAME = 'game',
  END = 'end',
  DETAILS = 'details',
}
