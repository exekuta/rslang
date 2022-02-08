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
      {/* <S.AboutSection>
        <MainScreen />
      </S.AboutSection>
      <S.AuthorsSection>
        <h2>Авторы:</h2>
      </S.AuthorsSection> */}
      {/* <Page.Page>
          <Page.Title>Home</Page.Title>
        </Page.Page> */}
    </S.Layout>
  );
};

export default Home;
