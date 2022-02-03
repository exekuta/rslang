import { IMenuRoute, RouteName } from 'src/types/Route.type';
import { Icon } from './Icon';
import { routes } from './routes';

export const menuRoutes: IMenuRoute[] = [
  {
    path: routes[RouteName.HOME].fullPath,
    access: routes[RouteName.HOME].access,
    title: 'Home',
    Icon: Icon.Home,
  },
  {
    path: routes[RouteName.TEXTBOOK].fullPath,
    access: routes[RouteName.TEXTBOOK].access,
    title: 'Textbook',
    Icon: Icon.Book,
  },
  {
    path: routes[RouteName.GAMES].fullPath,
    access: routes[RouteName.GAMES].access,
    title: 'Games',
    Icon: Icon.Joystick,
  },
  {
    path: routes[RouteName.STATISTICS].fullPath,
    access: routes[RouteName.STATISTICS].access,
    title: 'Statistics',
    Icon: Icon.Chart,
  },
  {
    path: routes[RouteName.LOGIN].fullPath,
    access: routes[RouteName.LOGIN].access,
    title: 'Log in',
    Icon: Icon.LogIn,
  },
];
