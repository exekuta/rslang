import React, { MouseEventHandler } from 'react';
import * as S from './style';

interface Props {
  title: string;
  image: string;
  onClick: MouseEventHandler
}

const GameCard: React.FC<Props> = ({ image, title, onClick }) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.ImageWrapper>
        <S.Image alt="game thumbnail" src={image} />
      </S.ImageWrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};

export default GameCard;
