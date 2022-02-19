import React from 'react';
import { Icon } from 'src/config';
import { GameName } from 'src/types/Game.types';
import {
  IAudioChallengeRoundResult,
} from 'src/types/games/AudioChallenge.type';
import { RoundResult } from 'src/types/games/common';
import { ISprintRoundResult } from 'src/types/games/Sprint.type';
import { Flex } from '../core';
import * as S from './style';
import Statement from './subcomponents/Statement';

type Props = RoundResult & {
  gameName: GameName;
};

const ResultCard: React.FC<Props> = ({ gameName, ...props }) => {
  if (gameName === GameName.SPRINT) {
    const {
      isGuessed, score, correctTranslation, translation, word,
    } =
      props as ISprintRoundResult;
    return (
      <S.Wrapper isGuessed={isGuessed}>
        <Flex jcsb>
          <Flex column>
            <Statement title="Word" value={word} />
            <Statement title="Translation" value={translation} />
            {!isGuessed && (
              <Statement
                title="Correct translation"
                value={correctTranslation}
              />
            )}
          </Flex>
          <S.Score>{score}</S.Score>
        </Flex>
      </S.Wrapper>
    );
  }

  const {
    answer, audio, correctAnswer, isGuessed, score,
  } =
    props as IAudioChallengeRoundResult;

  const playAudio = () => {
    new Audio(audio).play();
  };

  return (
    <S.Wrapper isGuessed={isGuessed}>
      <Flex aic gap={2}>
        <S.AudioButton onClick={playAudio}>
          <Icon.VolumeFull />
        </S.AudioButton>
        <Flex column>
          <S.Title>What did you hear?</S.Title>
          <Statement title="Your answer" value={answer} />
          {!isGuessed && (
            <Statement title="Correct answer" value={correctAnswer} />
          )}
        </Flex>
      </Flex>
      <S.Score>{score}</S.Score>
    </S.Wrapper>
  );
};

export default ResultCard;
