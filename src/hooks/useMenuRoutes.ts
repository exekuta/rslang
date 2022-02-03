import { menuRoutes } from 'src/config';
import { RouteAccess } from 'src/types/Route.type';
import { useAuth } from './useAuth';

export const useMenuRoutes = () => {
  const { isAuthorized } = useAuth();

  return menuRoutes.filter(({ access }) => {
    return access === RouteAccess.ANY
        || (isAuthorized && access === RouteAccess.AUTH)
        || (!isAuthorized && access === RouteAccess.NOT_AUTH);
  });
};
