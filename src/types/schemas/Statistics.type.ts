import { IGameResult } from '../games/common';

export interface IStatisticsOptional {
  score?: number;
  gameResults?: ArrayLike<IGameResult>;
}

export interface IStatistics {
  id?: string;
  learnedWords?: number;
  optional?: IStatisticsOptional;
}
