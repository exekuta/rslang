import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

export const useAudio = (url: string) => {
  const audio = useMemo(() => new Audio(url), [url]);
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
