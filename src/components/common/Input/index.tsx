import React, { forwardRef } from 'react';
import { Flex } from 'src/components/core';
import { SchemaName } from 'src/types/Schema.type';
import * as S from './style';

interface Props {
  error?: boolean | string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, label, ...params }, ref) => {
    const schema = error ? SchemaName.ERROR : SchemaName.PRIMARY;
    return (
      <Flex column gap={1}>
        <S.InputBlock>
          <S.Input
            placeholder="placeholder"
            schema={schema}
            ref={ref}
            {...params}
          />
          <S.Label>{label}</S.Label>
        </S.InputBlock>
        {typeof error === 'string' && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </Flex>
    );
  },
);

export default Input;
