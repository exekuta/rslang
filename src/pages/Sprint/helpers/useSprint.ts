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
import { useAuth, useSaveGameResult } from 'src/hooks';
import { useGameSound } from 'src/hooks/useGameSound';
import { saveWordData } from 'src/services/axios/saveWordData';
import { DictionaryName } from 'src/types/Dictionary.type';
import {
  GameState,
  ISprintRoundResult,
  RoundResult,
  SprintScreen,
} from 'src/types/games/Sprint.type';
import { GameName } from 'src/types/Game.types';
import { useGuessedWords } from './useGuessedWords';

interface UseSprintParams {
  dictionaryName: DictionaryName;
}

export const useSprint = ({ dictionaryName }: UseSprintParams) => {
  const [roundNumber, setRoundNumber] = useState(0);
  const [multiplierFactor, setMultiplierFactor] = useState(1);
  const [checkedChecksCount, setCheckedChecksCount] = useState(0);
  const [score, setScore] = useState(0);
  const [roundResult, setRoundResult] = useState<RoundResult>(RoundResult.NONE);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameState, setGameState] = useState<GameState>(GameState.INACTIVE);
  const [roundResults, setRoundResults] = useState<ISprintRoundResult[]>([]);
  const [screen, setScreen] = useState<SprintScreen>(SprintScreen.GAME);

  const isPlaying = gameState === GameState.PLAYING;
  const isInactive = gameState === GameState.INACTIVE;
  const isEnded = gameState === GameState.ENDED;

  const multiplier = multiplierFactor * MULTIPLIER_UNIT;

  const isGameScreen = screen === SprintScreen.GAME;
  const isDetailsScreen = screen === SprintScreen.DETAILS;
  const isEndScreen = screen === SprintScreen.END;

  const guessedWords = useGuessedWords({ dictionaryName });
  const { playCorrectSound, playIncorrectSound, playWinSound } = useGameSound();
  const { gameResult, saveGameResult } = useSaveGameResult({
    gameName: GameName.SPRINT,
    roundResults,
    score,
  });
  const { auth } = useAuth();

  const currentWord = useMemo(
    () => guessedWords && guessedWords[roundNumber],
    [guessedWords, roundNumber],
  );

  const endGame = useCallback(() => {
    setGameState(GameState.ENDED);
    setScreen(SprintScreen.END);
    saveGameResult();
    playWinSound();
  }, [playWinSound, saveGameResult]);

  useEffect(() => {
    if (!guessedWords) return;
    setGameState(GameState.PLAYING);
  }, [guessedWords]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0 && isPlaying) {
        setTimeLeft((state) => state - 1000);
      } else {
        if (isPlaying) {
          endGame();
        }
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [endGame, isInactive, isPlaying, timeLeft]);

  const addScore = useCallback(
    (isGuessed) => {
      if (!currentWord) return;

      const scoreAddition = isGuessed ? multiplier : 0;

      if (isGuessed) {
        setScore((state) => state + scoreAddition);
      }

      setRoundResults((state) => state.concat({
        word: currentWord.word,
        translation: currentWord.translation,
        correctTranslation: currentWord.correctTranslation,
        isLearned: !currentWord.isLearned && isGuessed,
        isPlayed: !currentWord.isPlayed,
        isGuessed,
        score: scoreAddition,
      }));
    },
    [currentWord, multiplier],
  );

  const checkMultiplier = useCallback(
    (isGuessed) => {
      if (!isGuessed) {
        setCheckedChecksCount(0);
        setMultiplierFactor(1);
      } else if (checkedChecksCount < CHECKS_NEEDED_FOR_NEW_MULTIPLIER) {
        setCheckedChecksCount((state) => state + 1);
      } else {
        setMultiplierFactor((state) => state + 1);
        setCheckedChecksCount(1);
      }
    },
    [checkedChecksCount],
  );

  const playRoundSound = useCallback(
    (isGuessed: boolean) => {
      const playSound = isGuessed ? playCorrectSound : playIncorrectSound;
      playSound();
    },
    [playCorrectSound, playIncorrectSound],
  );

  const handleGuess = useCallback(
    (guess: boolean) => () => {
      if (!currentWord || roundResult !== RoundResult.NONE || !isPlaying) {
        return;
      }

      const isGuessed = currentWord.isCorrect === guess;

      checkMultiplier(isGuessed);
      addScore(isGuessed);
      playRoundSound(isGuessed);
      saveWordData({
        isGuessed,
        token: auth?.token,
        userId: auth?.userId,
        wordId: currentWord.wordId,
      });

      const newRoundResult = isGuessed
        ? RoundResult.CORRECT
        : RoundResult.INCORRECT;

      setRoundResult(newRoundResult);
    },
    [
      addScore,
      auth,
      checkMultiplier,
      currentWord,
      isPlaying,
      playRoundSound,
      roundResult,
    ],
  );

  const setNextWord = useCallback(() => {
    if (!isPlaying) return;
    if (roundNumber >= MAX_ROUNDS_AMOUNT) {
      endGame();
    } else {
      setRoundResult(RoundResult.NONE);
      setRoundNumber((state) => state + 1);
    }
  }, [endGame, isPlaying, roundNumber]);

  const openDetails = () => {
    setScreen(SprintScreen.DETAILS);
  };

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
    handleTrueGuess: handleGuess(true),
    handleFalseGuess: handleGuess(false),
    roundResult,
    score,
    multiplier,
    checksCount: CHECKS_NEEDED_FOR_NEW_MULTIPLIER,
    checkedChecksCount,
    timeLeft,
    timeTotal: GAME_DURATION,
    isEnded,
    gameResult,
    openDetails,
    isGameScreen,
    isDetailsScreen,
    isEndScreen,
  };
};
