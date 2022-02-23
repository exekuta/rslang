import React, { useCallback, useEffect } from 'react';
import * as S from './style';

interface Props {
  kbd: number;
  title: string;
  selectThis?: () => void;
  isCorrect: boolean;
  isIncorrect: boolean;
  isActive?: boolean;
  isHoverable: boolean;
}

const GameOption: React.FC<Props> = ({
  kbd,
  title,
  isActive,
  selectThis,
  isCorrect,
  isIncorrect,
  isHoverable,
  ...props
}) => {
  const handleKeydown = useCallback(
    ({ key }) => {
      if (key !== String(kbd)) return;
      selectThis?.();
    },
    [kbd, selectThis],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <S.Button
      isCorrect={isCorrect}
      isIncorrect={isIncorrect}
      isHoverable={isHoverable}
      isActive={!!isActive}
      {...props}
    >
      <S.Kbd>{kbd}</S.Kbd>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
};

export default GameOption;
