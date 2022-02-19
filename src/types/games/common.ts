import { GameName } from '../Game.types';
import { IAudioChallengeRoundResult } from './AudioChallenge.type';
import { ISprintRoundResult } from './Sprint.type';

export interface IGameResult {
  gameName: GameName;
  timestamp: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number,
  rounds: RoundResult[];
}

export interface ISprintGameResult extends IGameResult {
  gameName: GameName.SPRINT;
  rounds: ISprintRoundResult[];
}

export interface IAudioChallengeGameResult extends IGameResult {
  gameName: GameName.AUDIO_CHALLENGE;
  rounds: IAudioChallengeRoundResult[];
}

export type GameResult = ISprintGameResult | IAudioChallengeGameResult;
export type RoundResult = ISprintRoundResult | IAudioChallengeRoundResult;
