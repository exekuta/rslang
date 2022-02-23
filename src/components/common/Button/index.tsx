import React, { MouseEventHandler } from 'react';
import { SchemaNameValue } from 'src/types/Schema.type';
import Loader from '../Loader';
import * as S from './style';
import { Size, Variant } from './types';

interface Props {
  fullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  maxWidth?: number;
  minWidth?: number;
  onClick?: MouseEventHandler;
  schema?: SchemaNameValue;
  size?: Size;
  variant?: Variant;
}

const Button: React.FC<Props> = ({
  children,
  fullWidth = false,
  isDisabled = false,
  isLoading = false,
  maxWidth,
  minWidth,
  onClick,
  schema = 'primary',
  size = 'medium',
  variant = 'contained',
}) => {
  return (
    <S.Button
      disabled={isLoading || isDisabled}
      fullWidth={fullWidth}
      isDisabled={isDisabled}
      isLoading={isLoading}
      minWidth={minWidth}
      maxWidth={maxWidth}
      onClick={onClick}
      schema={schema}
      size={size}
      variant={variant}
    >
      <S.Text>{children}</S.Text>
      <S.Loader>
        <Loader size={3} isText />
      </S.Loader>
    </S.Button>
  );
};

export default Button;
