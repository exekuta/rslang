import React, { useEffect } from 'react';
import { useTypedDispatch } from 'src/hooks';
import { useAuth } from 'src/hooks/useAuth';
import { useMenuRoutes } from 'src/hooks/useMenuRoutes';
import { useLazyGetUserQuery } from 'src/services/api/users.api';
import { logout } from 'src/store/reducers/auth';
import { Flex } from '../core';
import * as S from './style';
import Logo from './subcomponents/Logo';
import MenuLink from './subcomponents/MenuLink';
import UserInfo from './subcomponents/UserInfo';

const NavMenu = () => {
  const routes = useMenuRoutes();
  const { isAuthorized, auth } = useAuth();
  const [getUser, { data: userInfo }] = useLazyGetUserQuery();
  const dispatch = useTypedDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!auth) return;
    getUser();
  }, [auth, getUser]);

  return (
    <S.Menu>
      <S.Container>
        <Logo />
        <Flex column gap={6}>
          {routes.map((route) => (
            <MenuLink key={route.path} {...route} />
          ))}
        </Flex>
      </S.Container>
      {isAuthorized && userInfo && (
        <UserInfo {...userInfo} handleLogOut={handleLogOut} />
      )}
    </S.Menu>
  );
};

export default NavMenu;
