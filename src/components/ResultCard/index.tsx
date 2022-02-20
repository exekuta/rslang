import React from 'react';
import { RoundResult } from 'src/types/games/common';
import * as S from './style';

const ResultCard: React.FC<RoundResult> = ({
  isGuessed,
  correctTranslation,
  score,
  translation,
  word,
}) => {
  return (
    <S.Wrapper isGuessed={isGuessed}>
      <S.Statement>
        <S.StatementTitle>Word: </S.StatementTitle>
        <S.StatementValue>{word}</S.StatementValue>
      </S.Statement>
      <S.Statement>
        <S.StatementTitle>Translation: </S.StatementTitle>
        <S.StatementValue>{translation}</S.StatementValue>
      </S.Statement>
      {!isGuessed && (
      <S.Statement>
        <S.StatementTitle>Correct translation: </S.StatementTitle>
        <S.StatementValue>{correctTranslation}</S.StatementValue>
      </S.Statement>
      )}
      <S.Score>{score}</S.Score>
    </S.Wrapper>
  );
};

export default ResultCard;
