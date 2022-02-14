import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';

interface Props {
  setShowFeatures: Dispatch<SetStateAction<boolean>>
}

const AboutButton:React.FC<Props> = ({ setShowFeatures }) => {
  const toggleFeatures = () => setShowFeatures((showFeatures) => !showFeatures);

  return (
    <S.Button onClick={toggleFeatures}>
      Преимущества
    </S.Button>
  );
};

export default AboutButton;
