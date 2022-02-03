import { useCallback, useEffect, useState } from 'react';

export const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    return () => {
      audio.removeEventListener('ended', () => {
        setIsPlaying(false);
      });
    };
  }, [audio]);

  const play = useCallback(() => {
    audio.play();
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
  }, [audio]);

  const toggle = isPlaying ? pause : play;

  return {
    isPlaying,
    play,
    pause,
    toggle,
  };
};
