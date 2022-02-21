import React from 'react';
import { Icon } from 'src/config';
import * as S from './style';

interface Props {
  isCorrect: boolean;
}

const ResultMessage: React.FC<Props> = ({ isCorrect }) => {
  return (
    <S.Wrapper isCorrect={isCorrect}>
      {isCorrect ? <Icon.CheckCircle /> : <Icon.CloseCircle />}
      {isCorrect ? 'Well done' : 'Better luck next time'}
    </S.Wrapper>
  );
};

export default ResultMessage;
