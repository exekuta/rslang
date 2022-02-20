import React from 'react';
import { Icon } from 'src/config';
import { getStaticFilePath } from 'src/helpers/getStaticFilePath';
import { IWord } from 'src/types/schemas';
import IconButton from '../common/IconButton';
import { Flex } from '../core';
import { useWordCard } from './helpers/useWordCard';
import * as S from './style';
import Bookmark from './subcomponents/Bookmark';
import Example from './subcomponents/Example';
import Stat from './subcomponents/Stat';

const WordCard: React.FC<IWord> = (props) => {
  const {
    group,
    image,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    word,
    wordTranslate,
  } = props;

  const {
    guessedTimes,
    isAuthorized,
    isLearned,
    notGuessedTimes,
    playAudio,
    toggleDifficulty,
    isDifficult,
    toggleIsLearned,
  } = useWordCard(props);

  return (
    <S.Wrapper dictionaryName={group}>
      {isAuthorized && (
        <Bookmark
          dictionaryName={group}
          isDifficult={isDifficult}
          onClick={toggleDifficulty}
        />
      )}
      <S.Image
        src={getStaticFilePath(image)}
        alt={word}
        dictionaryName={group}
      />
      <S.Container>
        <div>
          <S.Heading>
            <S.Word>
              {word}
              <S.Transcription>{transcription}</S.Transcription>
            </S.Word>
            <Flex gap={2}>
              <IconButton onClick={playAudio}>
                <Icon.VolumeFull />
              </IconButton>
              <IconButton
                onClick={toggleIsLearned}
                dictionaryName={isLearned ? group : undefined}
              >
                <Icon.GraduationCap />
              </IconButton>
            </Flex>
          </S.Heading>
          <S.Translation>{wordTranslate}</S.Translation>
        </div>
        <S.Separator />
        <Flex column gap={1}>
          <Example sentence={textMeaning} translation={textMeaningTranslate} />
          <Example sentence={textExample} translation={textExampleTranslate} />
        </Flex>
        {(guessedTimes || notGuessedTimes) && (
          <>
            <S.Separator />
            <Flex column gap={1}>
              {!!guessedTimes && <Stat title="Guessed times" value="1" />}
              {!!notGuessedTimes && (
                <Stat title="Not guessed times" value={notGuessedTimes} />
              )}
            </Flex>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default WordCard;
