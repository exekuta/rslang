import React, { MouseEventHandler } from 'react';
import { SchemaNameValue } from 'src/types/Schema.type';
import Loader from '../Loader';
import * as S from './style';
import { Size, Variant } from './types';

interface Props {
  size?: Size;
  variant?: Variant;
  fullWidth?: boolean;
  schema?: SchemaNameValue;
  isLoading?: boolean;
  isDisabled?: boolean;
  minWidth?: number;
  onClick?: MouseEventHandler;
}

const Button: React.FC<Props> = ({
  size = 'medium',
  variant = 'contained',
  schema = 'primary',
  isLoading = false,
  isDisabled = false,
  minWidth,
  fullWidth,
  children,
  onClick,
}) => {
  return (
    <S.Button
      size={size}
      variant={variant}
      schema={schema}
      fullWidth={fullWidth}
      isLoading={isLoading}
      isDisabled={isDisabled}
      minWidth={minWidth}
      disabled={isLoading || isDisabled}
      onClick={onClick}
    >
      <S.Text>{children}</S.Text>
      <S.Loader>
        <Loader size={3} isText />
      </S.Loader>
    </S.Button>
  );
};

export default Button;
