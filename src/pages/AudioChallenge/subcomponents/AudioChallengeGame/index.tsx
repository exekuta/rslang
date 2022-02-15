/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import { Game, Flex } from 'src/components/core';
import GameFooter from 'src/components/GameFooter';
import GameOption from 'src/components/GameOption';
import GameProgress from 'src/components/GameProgress';
import { Icon } from 'src/config';
import { useSelect } from 'src/hooks/useSelect';
import { DictionaryName } from 'src/types/Dictionary.type';
import { useAudioChallenge } from '../../helpers/useAudioChallenge';
import ResultMessage from '../ResultMessage';
import * as S from './style';

interface Props {
  dictionaryName: DictionaryName;
}

const AudioChallengeGame: React.FC<Props> = ({ dictionaryName }) => {
  const {
    isSelected,
    register,
    selectedElement: selectedOption,
    selectElement,
  } = useSelect<string>({ activeKey: 'isActive' });
  const navigate = useNavigate();

  const {
    currentWord,
    handleAnswer,
    roundNumber,
    roundsAmount,
    handleNext,
    isCorrect,
    isIncorrect,
    isPlaying,
    handleSkip,
  } = useAudioChallenge({ dictionaryName });

  const handleClick = () => {
    if (isPlaying && selectedOption) {
      handleAnswer(selectedOption);
      selectElement(null);
    } else {
      handleNext();
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Game.Page>
      <Game.Container>
        <GameProgress
          progress={roundNumber / roundsAmount}
          onClose={goBack}
          details={`${roundNumber}/${roundsAmount}`}
        />
        <S.TitleCenter>Audio Challenge Game</S.TitleCenter>
        <S.TitleCenter>
          Diffuculty level:
          {' '}
          {dictionaryName}
        </S.TitleCenter>
      </Game.Container>
      <Game.Container isMain center>
        <Flex column gap={4} pic>
          <S.AudioButton>
            <Icon.VolumeFull />
          </S.AudioButton>

          <Flex fwrap gap={2} jcc>
            {currentWord &&
              currentWord.options.map((word, idx) => (
                <GameOption
                  key={String(idx)}
                  kbd={idx + 1}
                  title={word}
                  {...register(word)}
                />
              ))}
          </Flex>
        </Flex>
      </Game.Container>
      <GameFooter isCorrect={isCorrect} isIncorrect={isIncorrect}>
        {isCorrect || isIncorrect ? (
          <ResultMessage isCorrect={isCorrect} />
        ) : (
          <Button
            variant="outlined"
            size="large"
            fullWidth
            maxWidth={200}
            onClick={handleSkip}
          >
            Skip
          </Button>
        )}
        <Button
          size="large"
          isDisabled={!isSelected && isPlaying}
          onClick={handleClick}
          fullWidth
          maxWidth={200}
          schema={isCorrect ? 'success' : isIncorrect ? 'error' : 'primary'}
        >
          {isPlaying ? 'Submit' : 'Next'}
        </Button>
      </GameFooter>
    </Game.Page>
  );
};

export default AudioChallengeGame;
