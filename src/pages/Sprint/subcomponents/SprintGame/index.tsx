import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import { Game } from 'src/components/core';
import GameProgress from 'src/components/GameProgress';
import { formatTime } from 'src/helpers';
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
    onFalseClick,
    onTrueClick,
    score,
    timeLeft,
    timeTotal,
  } = useSprint({
    dictionaryName,
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
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
          <Button fullWidth onClick={onTrueClick}>
            True
          </Button>
          <Button fullWidth onClick={onFalseClick}>
            False
          </Button>
        </S.Buttons>
      </S.Container>
    </Game.Page>
  );
};

export default SprintGame;
