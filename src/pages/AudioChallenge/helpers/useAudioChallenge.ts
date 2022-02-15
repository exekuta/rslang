import { useEffect, useMemo, useState } from 'react';
import { ROUNDS_AMOUNT } from 'src/constants/games/audioChallenge';
import { DictionaryName } from 'src/types/Dictionary.type';
import { GameState, IRoundResult } from 'src/types/games/AudioChallenge.type';
import { useGuessedWords } from './useGuessedWords';

interface useAudioChallengeParams {
  dictionaryName: DictionaryName;
}

interface IResultRecord {
  word: string;
  translation: string;
  isGuessed: boolean;
  scoreAdded: number;
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

  const handleAnswer = (selectedOption: string) => {
    if (!currentWord) return;
    const isCorrectOption = selectedOption === currentWord.answer;

    const newGameState = isCorrectOption
      ? GameState.CORRECT
      : GameState.INCORRECT;

    setGameState(newGameState);

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
    roundsAmount: ROUNDS_AMOUNT,
  };
};
