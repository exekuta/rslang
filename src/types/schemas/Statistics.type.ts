import { GameResult } from '../games/common';

export interface IStatisticsOptional {
  score?: number;
  gameResults?: ArrayLike<GameResult>;
}

export interface IStatistics {
  id?: string;
  learnedWords?: number;
  optional?: IStatisticsOptional;
}
