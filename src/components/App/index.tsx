import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { routes } from 'src/config';
import { useInitialStateLoader } from 'src/hooks';
import MainLayout from 'src/layouts/MainLayout';
import { gameRouteNames } from 'src/types/Game.types';
import { RouteName } from 'src/types/Route.type';
import { renderRoute } from './helpers/renderRoute.helper';

const App = () => {
  useInitialStateLoader();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={routes.home.fullPath} />} />
          {renderRoute(RouteName.HOME)}
          {renderRoute(RouteName.GAMES)}
          {renderRoute(RouteName.LOGIN)}
          {renderRoute(RouteName.REGISTER)}
          {renderRoute(RouteName.STATISTICS)}
          {renderRoute(RouteName.TEXTBOOK)}
          <Route path="games">
            <Route path={gameRouteNames.audioChallenge}>
              {renderRoute(RouteName.AUDIO_CHALLENGE_INFO)}
            </Route>
            <Route path={gameRouteNames.sprint}>
              {renderRoute(RouteName.SPRINT_INFO)}
            </Route>
          </Route>
        </Route>
        {renderRoute(RouteName.AUDIO_CHALLENGE_GAME)}
        {renderRoute(RouteName.SPRINT_GAME)}
        <Route path="*" element={<Navigate to={routes.home.fullPath} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
