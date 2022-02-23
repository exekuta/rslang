import { gameSound } from 'src/assets/audio';
import { useAudio } from './useAudio';

export const useGameSound = () => {
  return {
    playWinSound: useAudio(gameSound.win).play,
    playCorrectSound: useAudio(gameSound.correct).play,
    playIncorrectSound: useAudio(gameSound.incorrect).play,
    playLooseSound: useAudio(gameSound.loose).play,
    playSelectSound: useAudio(gameSound.select).play,
  };
};
