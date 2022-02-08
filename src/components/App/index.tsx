import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { routes } from '../../config';
import MainLayout from '../../layouts/MainLayout';
import { RouteName } from '../../types/Route.type';
import { renderRoute } from './helpers/renderRoute.helper';

const App = () => {
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
