import { IconType } from 'react-icons';

export enum RouteName {
  HOME = 'home',
  TEXTBOOK = 'textbook',
  GAMES = 'games',
  LOGIN = 'login',
  REGISTER = 'register',
  STATISTICS = 'statistics',
}

export interface IRoute {
  path: string;
  fullPath: string;
  access: RouteAccess;
  Element: () => JSX.Element;
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
  'NOT_AUTH' = 'notAuth',
  'AUTH' = 'auth',
  'ANY' = 'any',
}
