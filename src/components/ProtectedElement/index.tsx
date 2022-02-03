import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from 'src/config';
import { useAuth } from 'src/hooks/useAuth';
import { RouteAccess } from 'src/types/Route.type';

export const ProtectedElement: React.FC<{
  access: RouteAccess;
  children: ReactElement;
}> = ({ access, children }) => {
  const { isAuthorized } = useAuth();

  if (isAuthorized && access === RouteAccess.NOT_AUTH) {
    return <Navigate to={routes.home.fullPath} />;
  }

  if (!isAuthorized && access === RouteAccess.AUTH) {
    return <Navigate to={routes.login.fullPath} />;
  }

  return children;
};
