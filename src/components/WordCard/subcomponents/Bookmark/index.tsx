import React, { MouseEventHandler } from 'react';
import { DictionaryName } from 'src/types/Dictionary.type';
import * as S from './style';

interface Props {
  dictionaryName: DictionaryName;
  isDifficult: boolean;
  onClick: MouseEventHandler;
}

const Bookmark: React.FC<Props> = ({
  dictionaryName,
  isDifficult,
  onClick,
}) => {
  return (
    <S.Bookmark
      dictionaryName={dictionaryName}
      isActive={isDifficult}
      onClick={onClick}
    />
  );
};

export default Bookmark;
