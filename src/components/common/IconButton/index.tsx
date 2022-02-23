import React, { HTMLAttributes } from 'react';
import { DictionaryName } from 'src/types/Dictionary.type';
import * as S from './style';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  dictionaryName?: DictionaryName;
}

const IconButton: React.FC<Props> = ({
  children,
  isDisabled = false,
  isLoading = false,
  dictionaryName,
  ...attrs
}) => {
  return (
    <S.Button
      disabled={isDisabled}
      isLoading={isLoading}
      isDisabled={isDisabled}
      dictionaryName={dictionaryName}
      {...attrs}
    >
      {children}
    </S.Button>
  );
};

export default IconButton;
