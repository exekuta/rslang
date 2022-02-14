import React from 'react';
import * as S from './style';

interface Props {
  showFeatures: boolean
}

const MainText: React.FC<Props> = ({ showFeatures }) => {
  return (
    <S.Wrapper>
      <S.Features showFeature={showFeatures}>
        <strong>Преимущества нашего приложения:</strong>
        <br />
        <br />
        <S.List>
          <li>- Полностью бесплатное!</li>
          <li>- Тысячи слов для изучения!</li>
          <li>- Транскрипция и произношение слов!</li>
          <li>- Игры для более лучшего освоения изученного!</li>
          <li>- Статистика обучения!</li>
        </S.List>
      </S.Features>
      <h2>
        Учите языки бесплатно,
        <br />
        весело и эффективно!
      </h2>
    </S.Wrapper>
  );
};

export default MainText;
