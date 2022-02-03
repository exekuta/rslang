import React from 'react';
import { Flex, Page } from 'src/components/core';
import MainScreen from 'src/components/MainScreen';

const Home = () => {
  return (
    <Page.Page>
      <Page.Title>Home</Page.Title>
      <MainScreen />
    </Page.Page>
  );
};

export default Home;
