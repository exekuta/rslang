import React, { HTMLAttributes } from 'react';
import { SchemaNameValue } from 'src/types/Schema.type';
import Loader from '../Loader';
import * as S from './style';
import { Size, Variant } from './types';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  fullWidth?: boolean;
  schema?: SchemaNameValue;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button: React.FC<Props> = ({
  size = 'medium',
  variant = 'contained',
  schema = 'primary',
  isLoading = false,
  isDisabled = false,
  fullWidth,
  children,
  ...attrs
}) => {
  return (
    <S.Button
      size={size}
      variant={variant}
      schema={schema}
      fullWidth={fullWidth}
      isLoading={isLoading}
      isDisabled={isDisabled}
      disabled={isLoading || isDisabled}
      {...attrs}
    >
      <S.Text>{children}</S.Text>
      <S.Loader>
        <Loader size={3} isText />
      </S.Loader>
    </S.Button>
  );
};

Button.defaultProps = {
  size: 'medium',
  variant: 'contained',
  schema: 'primary',
  fullWidth: false,
  isLoading: false,
  isDisabled: false,
};

export default Button;
