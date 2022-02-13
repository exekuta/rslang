import React from 'react';
import { Game } from '../core';
import * as S from './style';

const GameFooter: React.FC = ({ children }) => {
  return (
    <S.Footer>
      <Game.Container>
        <S.Container>{children}</S.Container>
      </Game.Container>
    </S.Footer>
  );
};

export default GameFooter;
