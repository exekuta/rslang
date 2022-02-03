import React, { HTMLAttributes } from 'react';
import * as S from './style';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
}

const IconButton: React.FC<Props> = ({
  children,
  isDisabled = false,
  isLoading = false,
  ...attrs
}) => {
  return (
    <S.Button
      disabled={isDisabled}
      isLoading={isLoading}
      isDisabled={isDisabled}
      {...attrs}
    >
      {children}
    </S.Button>
  );
};

IconButton.defaultProps = {
  isLoading: false,
  isDisabled: false,
};

export default IconButton;
