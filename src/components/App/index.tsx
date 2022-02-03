import React, { useEffect } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { routes } from '../../config';
import { LocalStorageKeys } from '../../constants/localStorage';
import { useTypedDispatch, useTypedSelector } from '../../hooks';
import MainLayout from '../../layouts/MainLayout';
import { localStorageService } from '../../services/localStorage.service';
import { login, selectAuth } from '../../store/reducers/auth';
import { RouteName } from '../../types/Route.type';
import { renderRoute } from './helpers/renderRoute.helper';

const App = () => {
  const dispatch = useTypedDispatch();
  const { auth } = useTypedSelector(selectAuth);

  useEffect(() => {
    const storedUser = localStorageService.get(LocalStorageKeys.AUTH);
    if (storedUser) {
      dispatch(login(storedUser));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorageService.set(LocalStorageKeys.AUTH, auth);
  }, [auth]);

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
