import React from 'react';
import { Game } from '../core';
import * as S from './style';

interface Props {
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

const GameFooter: React.FC<Props> = ({ isCorrect, isIncorrect, children }) => {
  return (
    <S.Footer isCorrect={isCorrect} isIncorrect={isIncorrect}>
      <Game.Container>
        <S.Container>{children}</S.Container>
      </Game.Container>
    </S.Footer>
  );
};

export default GameFooter;
