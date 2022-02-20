import React from 'react';
import * as S from './style';

const Stat: React.FC<{
  title: string;
  value: string | number;
}> = ({ title, value }) => {
  return (
    <S.Stat>
      <S.Title>
        {title}
        :
        {' '}
      </S.Title>
      <S.Value>{value}</S.Value>
    </S.Stat>
  );
};

export default Stat;
