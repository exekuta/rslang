import React from 'react';
import { Flex } from 'src/components/core';
import { Icon } from 'src/config';
import * as S from './style';

interface Props {
  score: number;
  checksCount: number;
  checkedChecksCount: number;
  multiplier: number;
}

const DetailsBar: React.FC<Props> = ({
  checksCount,
  checkedChecksCount,
  multiplier,
  score,
}) => {
  return (
    <S.Wrapper>
      <S.Score>{score}</S.Score>
      <Flex gap={1} aic>
        {[...Array(checksCount)].map((_el, idx) => {
          const isChecked = idx < checkedChecksCount;
          return (
            <S.Tick isChecked={isChecked} key={String(idx)}>
              {isChecked && <Icon.Check />}
            </S.Tick>
          );
        })}
      </Flex>
      <S.Multiplier>
        ×
        {multiplier}
      </S.Multiplier>
    </S.Wrapper>
  );
};

export default DetailsBar;
