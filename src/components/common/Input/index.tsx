import React, { forwardRef, HTMLAttributes, useState } from 'react';
import { Flex } from 'src/components/core';
import { Icon } from 'src/config';
import { SchemaName } from 'src/types/Schema.type';
import * as S from './style';

interface Props extends HTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
  label: string;
  type?: 'password' | 'text';
  autoComplete?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({
    error, label, type = 'text', ...params
  }, ref) => {
    const schema = error ? SchemaName.ERROR : SchemaName.PRIMARY;
    const isPassword = type === 'password';
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordShown((state) => !state);
    };

    return (
      <Flex column gap={1}>
        <S.InputBlock>
          <S.Input
            placeholder={label}
            schema={schema}
            isPaddingRight={isPassword}
            type={!isPassword || isPasswordShown ? 'text' : 'password'}
            ref={ref}
            {...params}
          />
          <S.Label>{label}</S.Label>
          {isPassword && (
            <S.EyeButton onClick={togglePasswordVisibility}>
              {isPasswordShown ? <Icon.EyeClose /> : <Icon.Eye />}
            </S.EyeButton>
          )}
        </S.InputBlock>
        {typeof error === 'string' && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </Flex>
    );
  },
);

export default Input;
