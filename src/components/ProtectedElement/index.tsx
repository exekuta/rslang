import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from 'src/config';
import { useAuth } from 'src/hooks';
import { RouteAccess } from 'src/types/Route.type';

interface Props {
  access: RouteAccess;
  children: ReactElement;
}

export const ProtectedElement: React.FC<Props> = ({ access, children }) => {
  const { isAuthorized } = useAuth();

  if (isAuthorized && access === RouteAccess.NOT_AUTH) {
    return <Navigate to={routes.home.fullPath} />;
  }

  if (!isAuthorized && access === RouteAccess.AUTH) {
    return <Navigate to={routes.login.fullPath} />;
  }

  return children;
};
