export interface IUserWordOptional {
  guessedTimes?: number;
  notGuessedTimes?: number;
  isLearned?: boolean;
  guessedInARowTimes?: number;
  isPlayed?: boolean;
}

export interface IUserWord {
  difficulty: Difficulty;
  optional?: IUserWordOptional;
}

export type Difficulty = 'difficult' | 'default';
