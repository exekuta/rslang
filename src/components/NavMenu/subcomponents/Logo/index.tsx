import React from 'react';
import { orangeBookEmojiImg } from 'src/assets/img';
import * as S from './style';

const Logo = () => {
  return (
    <S.Logo>
      <S.Title>RS Lang</S.Title>
      <S.Image src={orangeBookEmojiImg} />
    </S.Logo>
  );
};

export default Logo;
