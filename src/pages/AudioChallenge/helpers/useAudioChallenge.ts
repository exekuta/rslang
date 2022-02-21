import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  ROUNDS_AMOUNT,
  SCORE_PER_WORD,
} from 'src/constants/games/audioChallenge';
import { DictionaryName } from 'src/types/Dictionary.type';
import {
  AudioChallengeScreen,
  GameState,
  IAudioChallengeRoundResult,
} from 'src/types/games/AudioChallenge.type';
import { useGameSound, useSaveGameResult } from 'src/hooks';
import { GameName } from 'src/types/Game.types';
import { useGuessedWords } from './useGuessedWords';

interface useAudioChallengeParams {
  dictionaryName: DictionaryName;
}

export const useAudioChallenge = ({
  dictionaryName,
}: useAudioChallengeParams) => {
  const guessedWords = useGuessedWords({ dictionaryName });
  const [lastSelectedWord, setLastSelectedWord] = useState<string | null>(null);
  const [roundResults, setRoundResults] = useState<
    IAudioChallengeRoundResult[]
  >([]);
  const [gameState, setGameState] = useState<GameState>(GameState.INACTIVE);
  const [roundNumber, setRoundNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState<AudioChallengeScreen>(
    AudioChallengeScreen.GAME,
  );
  const { playCorrectSound, playIncorrectSound, playWinSound } = useGameSound();

  const { gameResult, saveGameResult } = useSaveGameResult({
    gameName: GameName.AUDIO_CHALLENGE,
    roundResults,
    score,
  });

  const isCorrect = gameState === GameState.CORRECT;
  const isIncorrect = gameState === GameState.INCORRECT;
  const isPlaying = gameState === GameState.PLAYING;
  const isActive = isCorrect || isIncorrect || isPlaying;

  const isGameScreen = screen === AudioChallengeScreen.GAME;
  const isEndScreen = screen === AudioChallengeScreen.END;
  const isDetailsScreen = screen === AudioChallengeScreen.DETAILS;

  const currentWord = useMemo(
    () => guessedWords && guessedWords[roundNumber],
    [roundNumber, guessedWords],
  );

  const playAudio = useCallback(() => {
    if (!currentWord) return;
    const currentAudio = new Audio(currentWord.audio);
    currentAudio.play();
  }, [currentWord]);

  const openDetails = () => {
    setScreen(AudioChallengeScreen.DETAILS);
  };

  const handlePlayAudio = () => {
    playAudio();
  };

  const endGame = () => {
    setScreen(AudioChallengeScreen.END);
    setGameState(GameState.ENDED);
    saveGameResult();
    playWinSound();
  };

  const updateScore = (isGuessed: boolean) => {
    if (!isGuessed) return;
    setScore((state) => state + SCORE_PER_WORD);
  };

  const playRoundSound = useCallback(
    (isGuessed: boolean) => {
      const playSound = isGuessed ? playCorrectSound : playIncorrectSound;
      playSound();
    },
    [playCorrectSound, playIncorrectSound],
  );

  const updateGameState = (isGuessed: boolean) => {
    const newGameState = isGuessed ? GameState.CORRECT : GameState.INCORRECT;
    setGameState(newGameState);
  };

  const handleAnswer = (selectedOption: string) => {
    if (!currentWord) return;
    const isGuessed = selectedOption === currentWord.answer;

    setLastSelectedWord(selectedOption);
    updateGameState(isGuessed);
    playRoundSound(isGuessed);
    updateScore(isGuessed);

    setRoundResults((state) => state.concat({
      answer: selectedOption,
      audio: currentWord.audio,
      correctAnswer: currentWord.answer,
      isLearned: !currentWord.isLearned && isGuessed,
      isPlayed: !currentWord.isPlayed,
      isGuessed,
      score: SCORE_PER_WORD,
    }));
  };

  const handleNext = () => {
    if (roundNumber + 1 < ROUNDS_AMOUNT) {
      setGameState(GameState.PLAYING);
      setRoundNumber((state) => state + 1);
    } else {
      endGame();
    }
  };

  const handleSkip = () => {
    handleAnswer('');
  };

  useEffect(() => {
    if (!guessedWords) return;
    setGameState(GameState.PLAYING);
  }, [guessedWords]);

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
    isDetailsScreen,
    isEndScreen,
    isGameScreen,
    gameResult,
    openDetails,
    correctAnswer: currentWord?.answer,
    lastSelectedWord,
  };
};
