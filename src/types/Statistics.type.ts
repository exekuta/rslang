import { GameName } from './Game.types';

export interface ChartDataItem {
  date: string;
  learnedWords: number;
  newWords: number;
  accuracy: number;
}

export interface GameStatsWordData {
  inARow: number;
  accuracy: number | null;
  newWords: number;
}

export interface GameStats {
  [GameName.AUDIO_CHALLENGE]: GameStatsWordData;
  [GameName.SPRINT]: GameStatsWordData;
}
