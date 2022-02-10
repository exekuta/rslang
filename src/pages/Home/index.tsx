import React from 'react';
import { Flex, Page } from 'src/components/core';
import AboutButton from 'src/components/HomeButtons/AboutButton';
import MainText from 'src/components/MainText';
import * as S from './style';

const Home = () => {
  return (
    <S.Layout>
      <AboutButton />
      <MainText />
    </S.Layout>
  );
};

export default Home;
