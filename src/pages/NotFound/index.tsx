import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import { Flex, Page } from 'src/components/core';
import { routes } from 'src/config';
import * as S from './style';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(routes.home.fullPath);
  };

  return (
    <Page.Page center>
      <Flex column gap={4}>
        <Flex column aic>
          <S.Number>404</S.Number>
          <S.Description>Page not found</S.Description>
        </Flex>
        <Button onClick={goHome}>Go back to safety</Button>
      </Flex>
    </Page.Page>
  );
};

export default NotFound;
