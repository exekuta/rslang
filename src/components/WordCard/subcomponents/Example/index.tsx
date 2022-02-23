import React from 'react';
import { Icon } from 'src/config';
import parse from 'html-react-parser';
import * as S from './style';

interface Props {
  sentence: string;
  translation: string;
}

const Example: React.FC<Props> = ({ sentence, translation }) => {
  return (
    <S.Wrapper>
      <S.Sentence>{parse(sentence)}</S.Sentence>
      <S.Translation>
        <Icon.ChevronsRight />
        {translation}
      </S.Translation>
    </S.Wrapper>
  );
};

export default Example;
