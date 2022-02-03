import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from 'src/config';
import { RouteName } from 'src/types/Route.type';
import { ProtectedElement } from '../ProtectedElement';

const ProtectedRoute: React.FC<{ routeName: RouteName }> = ({ routeName }) => {
  const { path, access, Element } = routes[routeName];
  return (
    <Route
      path={path}
      element={(
        <ProtectedElement access={access}>
          <Element />
        </ProtectedElement>
      )}
    />
  );
};

export default ProtectedRoute;
