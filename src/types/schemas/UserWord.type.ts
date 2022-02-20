export interface IUserWordOptional {
  guessedTimes?: number;
  notGuessedTimes?: number;
  isLearned?: boolean;
  guessedInARowTimes?: number;
}

export interface IUserWord {
  difficulty: Difficulty;
  optional?: IUserWordOptional;
}

export type Difficulty = 'difficult' | 'default';
