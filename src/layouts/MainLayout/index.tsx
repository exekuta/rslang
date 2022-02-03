import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from 'src/components/NavMenu';
import * as S from './style';

const MainLayout = () => {
  return (
    <S.Layout>
      <NavMenu />
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Layout>
  );
};

export default MainLayout;
