export interface IUserWord {
  difficulty: Difficulty;
  optional?: unknown;
}

export type Difficulty = 'difficult' | 'default';
