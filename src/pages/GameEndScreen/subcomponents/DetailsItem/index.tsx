import React from 'react';
import * as S from './style';

interface Props {
  name: string;
  value: string | number;
}

const DetailsItem: React.FC<Props> = ({ name, value }) => {
  return (
    <S.Wrapper>
      <S.Title>
        {name}
        :
      </S.Title>
      <S.Value>{value}</S.Value>
    </S.Wrapper>
  );
};

export default DetailsItem;
