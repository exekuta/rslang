import React from 'react';
import { RoundResult } from 'src/types/games/Sprint.type';
import * as S from './style';

interface Props {
  translation?: string;
  word?: string;
  roundResult: RoundResult;
}

const GuessedWord: React.FC<Props> = ({ translation, word, roundResult }) => {
  const isIncorrect = roundResult === RoundResult.INCORRECT;
  const isCorrect = roundResult === RoundResult.CORRECT;

  return (
    <S.Wrapper isIncorrect={isIncorrect} isCorrect={isCorrect}>
      <S.Word>{word}</S.Word>
      <S.Translation>{translation}</S.Translation>
    </S.Wrapper>
  );
};

export default GuessedWord;
