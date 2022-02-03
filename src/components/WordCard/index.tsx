import React from 'react';
import { Icon } from 'src/config';
import { getStaticFilePath } from 'src/helpers/getStaticFilePath';
import { useAudio, useAuth } from 'src/hooks';
import { IWord } from 'src/types/schemas';
import IconButton from '../common/IconButton';
import * as S from './style';
import Example from './subcomponents/Example';

const WordCard: React.FC<IWord> = ({
  word,
  wordTranslate,
  transcription,
  textExample,
  textExampleTranslate,
  textMeaning,
  textMeaningTranslate,
  image,
  audio,
}) => {
  const { isAuthorized } = useAuth();
  const { play: playAudio } = useAudio(
    getStaticFilePath(audio),
  );

  return (
    <S.Wrapper>
      {isAuthorized && <S.Bookmark />}
      <S.Image src={getStaticFilePath(image)} alt={word} />
      <S.Container>
        <div>
          <S.Heading>
            <S.Word>
              {word}
              <S.Transcription>{transcription}</S.Transcription>
            </S.Word>
            <IconButton onClick={playAudio}>
              <Icon.VolumeFull />
            </IconButton>
          </S.Heading>
          <S.Translation>{wordTranslate}</S.Translation>
        </div>
        <S.Separator />
        <S.Examples>
          <Example sentence={textMeaning} translation={textMeaningTranslate} />
          <Example sentence={textExample} translation={textExampleTranslate} />
        </S.Examples>
      </S.Container>
    </S.Wrapper>
  );
};

export default WordCard;
