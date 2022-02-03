import React from 'react';
import LogoSrc from 'src/assets/img/orange-book-emoji.png';
import * as S from './style';

const Logo = () => {
  return (
    <S.Logo>
      <S.Title>RS Lang</S.Title>
      <S.Image src={LogoSrc} />
    </S.Logo>
  );
};

export default Logo;
