import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from 'src/components/NavMenu';
import Footer from 'src/components/Footer';
import * as S from './style';

const MainLayout = () => {
  return (
    <S.Layout>
      <NavMenu />
      <S.Container>
        <Outlet />
      </S.Container>
      <Footer />
    </S.Layout>
  );
};

export default MainLayout;
