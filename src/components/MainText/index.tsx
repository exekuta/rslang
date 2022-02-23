import React from 'react';
import * as S from './style';

interface Props {
  showFeatures: boolean;
}

const MainText: React.FC<Props> = ({ showFeatures }) => {
  return (
    <S.Wrapper>
      <S.Features showFeature={showFeatures}>
        {!showFeatures ? (
          <>
            <S.Strong>Преимущества нашего приложения:</S.Strong>
            <br />
            <S.List>
              <li>- Полностью бесплатное!</li>
              <li>- Тысячи слов для изучения!</li>
              <li>- Транскрипция и произношение слов!</li>
              <li>- Игры для более лучшего освоения изученного!</li>
              <li>- Статистика обучения!</li>
            </S.List>
          </>
        ) : (
          <S.Video>
            <S.Strong>Презентация нашего приложения на Youtube:</S.Strong>
            <S.VideoContainer
              src="https://www.youtube.com/embed/JIraOR6E9sk?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.Video>
        )}
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
