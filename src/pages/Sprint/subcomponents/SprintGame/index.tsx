import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import { Game } from 'src/components/core';
import GameProgress from 'src/components/GameProgress';
import { Icon } from 'src/config';
import { formatTime } from 'src/helpers';
import GameDetails from 'src/pages/GameDetails';
import GameEndScreen from 'src/pages/GameEndScreen';
import { DictionaryName } from 'src/types/Dictionary.type';
import { useSprint } from '../../helpers/useSprint';
import DetailsBar from '../DetailsBar';
import GuessedWord from '../WordWrapper';
import * as S from './style';

interface Props {
  dictionaryName: DictionaryName;
}

const SprintGame: React.FC<Props> = ({ dictionaryName }) => {
  const navigate = useNavigate();
  const {
    checkedChecksCount,
    checksCount,
    currentWord,
    roundResult,
    multiplier,
    score,
    timeLeft,
    timeTotal,
    gameResult,
    isGameScreen,
    isEndScreen,
    openDetails,
    handleFalseGuess,
    handleTrueGuess,
  } = useSprint({
    dictionaryName,
  });

  const goBack = () => {
    navigate(-1);
  };


  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'ArrowRight') {
      handleFalseGuess();
    } else if (key === 'ArrowLeft') {
      handleTrueGuess();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return isGameScreen || !gameResult ? (
    <Game.Page>
      <Game.Container>
        <GameProgress
          onClose={goBack}
          progress={1 - timeLeft / timeTotal}
          details={formatTime(timeLeft / 1000)}
        />
      </Game.Container>
      <S.Container>
        <DetailsBar
          checksCount={checksCount}
          checkedChecksCount={checkedChecksCount}
          multiplier={multiplier}
          score={score}
        />
        <GuessedWord
          word={currentWord?.word}
          translation={currentWord?.translation}
          roundResult={roundResult}
        />
        <S.Buttons>
          <Button fullWidth onClick={handleTrueGuess}>
            <Icon.ArrowLeft />
            True
          </Button>
          <Button fullWidth onClick={handleFalseGuess}>
            False
            <Icon.ArrowRight />
          </Button>
        </S.Buttons>
      </S.Container>
    </Game.Page>
  ) : isEndScreen ? (
    <GameEndScreen openDetails={openDetails} {...gameResult} />
  ) : (
    <GameDetails {...gameResult} />
  );
};

export default SprintGame;
