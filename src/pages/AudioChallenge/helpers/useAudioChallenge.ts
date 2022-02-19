import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { ROUNDS_AMOUNT } from 'src/constants/games/audioChallenge';
import { DictionaryName } from 'src/types/Dictionary.type';
import { GameState, IRoundResult } from 'src/types/games/AudioChallenge.type';
import correct from 'src/assets/audio/game/correct.mp3';
import incorrect from 'src/assets/audio/game/incorrect.mp3';
import { useGuessedWords } from './useGuessedWords';

interface useAudioChallengeParams {
  dictionaryName: DictionaryName;
}

export const useAudioChallenge = ({
  dictionaryName,
}: useAudioChallengeParams) => {
  const guessedWords = useGuessedWords({ dictionaryName });
  const [roundResults, setRoundResults] = useState<IRoundResult[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.INACTIVE);
  const [roundNumber, setRoundNumber] = useState(0);
  const [score, setScore] = useState(0);

  const isActive = gameState !== GameState.INACTIVE;
  const isCorrect = gameState === GameState.CORRECT;
  const isIncorrect = gameState === GameState.INCORRECT;
  const isPlaying = gameState === GameState.PLAYING;

  const currentWord = useMemo(
    () => guessedWords && guessedWords[roundNumber],
    [roundNumber, guessedWords],
  );

  const playAudio = useCallback(() => {
    if (!currentWord) return;
    const currentAudio = new Audio(currentWord.audio);
    currentAudio.play();
  }, [currentWord]);

  const handlePlayAudio = () => {
    playAudio();
  };

  const handleAnswer = (selectedOption: string) => {
    if (!currentWord) return;
    const isCorrectOption = selectedOption === currentWord.answer;

    const newGameState = isCorrectOption
      ? GameState.CORRECT
      : GameState.INCORRECT;
    setGameState(newGameState);

    const audioResultPlay =
      newGameState === GameState.CORRECT
        ? new Audio(correct).play()
        : new Audio(incorrect).play();

    setRoundResults((state) => state.concat({
      audio: currentWord.answer,
      answer: currentWord.answer,
      isCorrect: isCorrectOption,
      selectedOption,
      score: 0,
    }));
  };

  const handleNext = () => {
    setGameState(GameState.PLAYING);
    setRoundNumber((state) => state + 1);
  };

  const handleSkip = () => {
    handleAnswer('');
  };

  useEffect(() => {
    if (!guessedWords) return;
    setGameState(GameState.PLAYING);
  }, [guessedWords]);

  useEffect(() => {
    console.log({
      currentWord,
    });
  }, [currentWord]);

  useEffect(() => {
    playAudio();
  }, [playAudio]);

  return {
    currentWord,
    handleAnswer,
    roundNumber,
    isCorrect,
    isIncorrect,
    handleNext,
    isActive,
    isPlaying,
    handleSkip,
    handlePlayAudio,
    handleAudio: playAudio,
    roundsAmount: ROUNDS_AMOUNT,
  };
};
