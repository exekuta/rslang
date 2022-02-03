/* eslint-disable react/no-children-prop */
import React, { SetStateAction, useState } from 'react';
import { Icon } from 'src/config';
import { Flex } from '../core';
import * as S from './style';

interface Props {
  amount: number;
  current: number;
  setCurrent: (index: number) => void;
}

const Pagination: React.FC<Props> = ({ amount, current, setCurrent }) => {
  const setPage = (newVal: number) => () => {
    setCurrent(newVal);
  };

  return (
    <Flex gap={2} jcc>
      <S.ArrowButton disabled={current <= 0} onClick={setPage(current - 1)}>
        <Icon.ArrowLeft />
      </S.ArrowButton>
      {current > 0 && <S.NumberButton onClick={setPage(0)} children="1" />}
      {current > 2 && <S.Ellipsis children="..." />}
      {current > 1 && (
        <S.NumberButton onClick={setPage(current - 1)} children={current} />
      )}
      <S.NumberButton children={current + 1} isActive />
      {current <= amount - 3 && (
        <S.NumberButton onClick={setPage(current + 1)} children={current + 2} />
      )}
      {current <= amount - 4 && <S.Ellipsis children="..." />}
      {current <= amount - 2 && (
        <S.NumberButton onClick={setPage(amount - 1)} children={amount} />
      )}
      <S.ArrowButton
        disabled={current >= amount - 1}
        onClick={setPage(current + 1)}
      >
        <Icon.ArrowRight />
      </S.ArrowButton>
    </Flex>
  );
};

export default Pagination;
