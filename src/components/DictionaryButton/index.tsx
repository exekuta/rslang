import React, { MouseEventHandler } from 'react';
import { Icon } from 'src/config';
import { DictionaryName } from 'src/types/Dictionary.type';
import * as S from './style';

interface Props {
  dictionaryName: DictionaryName;
  onClick?: MouseEventHandler;
  isActive?: boolean;
}

const DictionaryButton: React.FC<Props> = ({
  dictionaryName,
  onClick,
  isActive = false,
}) => {
  return (
    <S.Button
      dictionaryName={dictionaryName}
      isActive={isActive}
      onClick={onClick}
    >
      <Icon.BookAlt />
    </S.Button>
  );
};

export default DictionaryButton;
