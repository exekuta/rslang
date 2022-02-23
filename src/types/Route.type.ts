import { IconType } from 'react-icons';

export enum RouteName {
  HOME = 'home',
  TEXTBOOK = 'textbook',
  GAMES = 'games',
  GAMES_FOR_DICTIONARY = 'gamesForDictionary',
  LOGIN = 'login',
  REGISTER = 'register',
  STATISTICS = 'statistics',
  SPRINT_INFO = 'sprintInfo',
  SPRINT_INFO_FOR_DICTIONARY = 'sprintInfoForDictionary',
  AUDIO_CHALLENGE_INFO = 'audioChallengeInfo',
  AUDIO_CHALLENGE_INFO_FOR_DICTIONARY = 'audioChallengeInfoForDictionary',
  SPRINT_GAME = 'sprintGame',
  AUDIO_CHALLENGE_GAME = 'audioChallengeGame',
  NOT_FOUND = 'notFound'
}

export interface IRoute {
  path: string;
  fullPath: string;
  access: RouteAccess;
  element:JSX.Element;
}

export type Routes = {
  [key in RouteName]: IRoute;
};

export interface IMenuRoute {
  title: string;
  path: string;
  access: RouteAccess;
  Icon: IconType;
}

export enum RouteAccess {
  NOT_AUTH = 'notAuth',
  AUTH = 'auth',
  ANY = 'any',
}
