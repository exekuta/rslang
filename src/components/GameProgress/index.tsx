import React, { MouseEventHandler } from 'react';
import { Icon } from 'src/config';
import IconButton from '../common/IconButton';
import * as S from './style';

interface Props {
  progress: number;
  details?: string;
  onClose?: MouseEventHandler;
}

const GameProgress: React.FC<Props> = ({ progress, details, onClose }) => {
  return (
    <S.Container>
      {onClose && (
        <IconButton onClick={onClose}>
          <Icon.Close />
        </IconButton>
      )}
      <S.Progress>
        <S.ProgressInner progress={progress} />
      </S.Progress>
      {details && <S.Details>{details}</S.Details>}
    </S.Container>
  );
};

export default GameProgress;
