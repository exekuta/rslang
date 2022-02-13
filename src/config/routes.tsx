import React from 'react';
import * as P from 'src/pages';
import { GameName, gameRouteNames } from 'src/types/Game.types';
import { RouteAccess, RouteName, Routes } from 'src/types/Route.type';

export const routes: Routes = {
  [RouteName.GAMES]: {
    element: <P.Games />,
    access: RouteAccess.ANY,
    fullPath: '/games',
    path: 'games',
  },
  [RouteName.HOME]: {
    element: <P.Home />,
    access: RouteAccess.ANY,
    fullPath: '/home',
    path: 'home',
  },
  [RouteName.LOGIN]: {
    element: <P.LogIn />,
    access: RouteAccess.NOT_AUTH,
    fullPath: '/login',
    path: 'login',
  },
  [RouteName.REGISTER]: {
    element: <P.Register />,
    access: RouteAccess.NOT_AUTH,
    fullPath: '/register',
    path: 'register',
  },
  [RouteName.TEXTBOOK]: {
    element: <P.Textbook />,
    access: RouteAccess.ANY,
    fullPath: '/textbook',
    path: 'textbook',
  },
  [RouteName.STATISTICS]: {
    element: <P.Statistics />,
    access: RouteAccess.AUTH,
    fullPath: '/statistics',
    path: 'statistics',
  },
  [RouteName.AUDIO_CHALLENGE_INFO]: {
    element: <P.GameInfo gameName={GameName.AUDIO_CHALLENGE} />,
    access: RouteAccess.ANY,
    fullPath: `/games/${gameRouteNames.audioChallenge}/info`,
    path: 'info',
  },
  [RouteName.SPRINT_INFO]: {
    element: <P.GameInfo gameName={GameName.SPRINT} />,
    access: RouteAccess.ANY,
    fullPath: `/games/${gameRouteNames.sprint}/info`,
    path: 'info',
  },
  [RouteName.AUDIO_CHALLENGE_GAME]: {
    element: <P.AudioChallenge />,
    access: RouteAccess.ANY,
    fullPath: `/games/${gameRouteNames.audioChallenge}/play/:dictionaryName`,
    path: `/games/${gameRouteNames.audioChallenge}/play/:dictionaryName`,
  },
  [RouteName.SPRINT_GAME]: {
    element: <P.Sprint />,
    access: RouteAccess.ANY,
    fullPath: `/games/${gameRouteNames.sprint}/play/:dictionaryName`,
    path: `/games/${gameRouteNames.sprint}/play/:dictionaryName`,
  },
};
