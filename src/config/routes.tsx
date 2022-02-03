import { RouteAccess, RouteName, Routes } from 'src/types/Route.type';
import * as P from 'src/pages';

export const routes: Routes = {
  [RouteName.GAMES]: {
    Element: P.Games,
    access: RouteAccess.ANY,
    fullPath: '/games',
    path: 'games',
  },
  [RouteName.HOME]: {
    Element: P.Home,
    access: RouteAccess.ANY,
    fullPath: '/home',
    path: 'home',
  },
  [RouteName.LOGIN]: {
    Element: P.LogIn,
    access: RouteAccess.NOT_AUTH,
    fullPath: '/login',
    path: 'login',
  },
  [RouteName.REGISTER]: {
    Element: P.Register,
    access: RouteAccess.NOT_AUTH,
    fullPath: '/register',
    path: 'register',
  },
  [RouteName.TEXTBOOK]: {
    Element: P.Textbook,
    access: RouteAccess.ANY,
    fullPath: '/textbook',
    path: 'textbook',
  },
  [RouteName.STATISTICS]: {
    Element: P.Statistics,
    access: RouteAccess.AUTH,
    fullPath: '/statistics',
    path: 'statistics',
  },
};
