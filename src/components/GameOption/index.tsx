import React, { useCallback, useEffect } from 'react';
import * as S from './style';

interface Props {
  kbd: number;
  title: string;
  selectThis?: () => void;
  isActive?: boolean;
}

const GameOption: React.FC<Props> = ({
  kbd,
  title,
  isActive,
  selectThis,
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
    <S.Button isActive={!!isActive} {...props}>
      <S.Kbd isActive={!!isActive}>{kbd}</S.Kbd>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
};

export default GameOption;
