import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedElement } from 'src/components/ProtectedElement';
import { routes } from 'src/config';
import { RouteName } from 'src/types/Route.type';

export const renderRoute = (routeName: RouteName) => {
  const { path, access, element } = routes[routeName];

  return (
    <Route
      path={path}
      element={(
        <ProtectedElement access={access}>
          {element}
        </ProtectedElement>
      )}
    />
  );
};
