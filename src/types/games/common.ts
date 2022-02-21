import { GameName } from '../Game.types';
import { ISprintRoundResult } from './Sprint.type';

interface IGameResultScheme {
  gameName: GameName;
  timestamp: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracy: number;
  answersAmount: number;
  learnedWords: number;
  newWords: number;
  score: number,
  rounds: unknown[];
}

export interface ISprintGameResult extends IGameResultScheme {
  gameName: GameName.SPRINT;
  rounds: ISprintRoundResult[];
}

export type GameResult = ISprintGameResult;
export type RoundResult = ISprintRoundResult;
