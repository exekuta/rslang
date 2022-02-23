import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from 'src/components/NavMenu';
import Footer from 'src/components/Footer';
import MobileHeader from 'src/components/MobileHeader';
import * as S from './style';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen((state) => !state);
  };

  const handleContainerClick = () => {
    if (!isMenuOpen) return;
    toggleIsMenuOpen();
  };

  return (
    <S.Layout isMenuOpen={isMenuOpen}>
      <NavMenu />
      <S.Container onClick={handleContainerClick}>
        <MobileHeader onMenuButtonClick={toggleIsMenuOpen} />
        <Outlet />
        <Footer />
      </S.Container>
    </S.Layout>
  );
};

export default MainLayout;
