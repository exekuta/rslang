import React from 'react';
import * as S from '../../style';

interface Props {
  title: string;
  value: string | number;
}

const Statement: React.FC<Props> = ({ title, value }) => {
  return (
    <S.Statement>
      <S.StatementTitle>
        {title}
        :
        {' '}
      </S.StatementTitle>
      <S.StatementValue>{value}</S.StatementValue>
    </S.Statement>
  );
};

export default Statement;
