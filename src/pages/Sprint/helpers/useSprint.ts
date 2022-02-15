import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  CHECKS_NEEDED_FOR_NEW_MULTIPLIER,
  GAME_DURATION,
  MAX_ROUNDS_AMOUNT,
  MULTIPLIER_UNIT,
  ROUND_TIMEOUT,
} from 'src/constants/games/sprint';
import { DictionaryName } from 'src/types/Dictionary.type';
import { GameState, RoundResult } from 'src/types/games/Sprint.type';
import { useGuessedWords } from './useGuessedWords';

interface UseSprintParams {
  dictionaryName: DictionaryName;
}

interface IResultRecord {
  word: string;
  translation: string;
  isGuessed: boolean;
  scoreAdded: number;
}

export const useSprint = ({ dictionaryName }: UseSprintParams) => {
  const guessedWords = useGuessedWords({ dictionaryName });
  const [roundNumber, setRoundNumber] = useState(0);
  const [multiplierFactor, setMultiplierFactor] = useState(1);
  const multiplier = useMemo(
    () => multiplierFactor * MULTIPLIER_UNIT,
    [multiplierFactor],
  );
  const [checkedChecksCount, setCheckedChecksCount] = useState(0);
  const [score, setScore] = useState(0);
  const [roundResult, setRoundResult] = useState<RoundResult>(RoundResult.NONE);
  const [results, setResults] = useState<IResultRecord[]>([]);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameState, setGameState] = useState<GameState>(GameState.INACTIVE);
  const isPlaying = useMemo(() => gameState === GameState.ACTIVE, [gameState]);

  useEffect(() => {
    setGameState(GameState.ACTIVE);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0 && isPlaying) {
        setTimeLeft((state) => state - 1000);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, timeLeft]);

  const currentWord = useMemo(
    () => guessedWords && guessedWords[roundNumber],
    [guessedWords, roundNumber],
  );

  const addScore = useCallback(() => {
    setScore((state) => state + multiplier);
  }, [multiplier]);

  const checkMultiplier = useCallback(() => {
    if (checkedChecksCount < CHECKS_NEEDED_FOR_NEW_MULTIPLIER) {
      setCheckedChecksCount((state) => state + 1);
    } else {
      setMultiplierFactor((state) => state + 1);
      setCheckedChecksCount(1);
    }
  }, [checkedChecksCount]);

  const handleGuess = useCallback(
    (guess: boolean) => () => {
      if (!currentWord || roundResult !== RoundResult.NONE || !isPlaying) {
        return;
      }
      const isGuessed = currentWord.isCorrect === guess;
      if (isGuessed) {
        checkMultiplier();
        addScore();
      }
      setResults((state) => state.concat({
        word: currentWord.word,
        translation: currentWord.translation,
        isGuessed,
        scoreAdded: multiplier,
      }));
      const newRoundResult = isGuessed
        ? RoundResult.CORRECT
        : RoundResult.INCORRECT;
      setRoundResult(newRoundResult);
    },
    // eslint-disable-next-line max-len
    [currentWord, roundResult, isPlaying, checkMultiplier, addScore, multiplier],
  );

  const setNextWord = useCallback(() => {
    if (roundNumber >= MAX_ROUNDS_AMOUNT || !isPlaying) return;
    setRoundResult(RoundResult.NONE);
    setRoundNumber((state) => state + 1);
  }, [isPlaying, roundNumber]);

  useEffect(() => {
    if (roundResult === RoundResult.NONE || !isPlaying) return undefined;
    const timeoutId = setTimeout(() => {
      setNextWord();
    }, ROUND_TIMEOUT);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, roundResult, setNextWord]);

  return {
    currentWord,
    onTrueClick: handleGuess(true),
    onFalseClick: handleGuess(false),
    roundResult,
    score,
    multiplier,
    checksCount: CHECKS_NEEDED_FOR_NEW_MULTIPLIER,
    checkedChecksCount,
    timeLeft,
    timeTotal: GAME_DURATION,
  };
};
