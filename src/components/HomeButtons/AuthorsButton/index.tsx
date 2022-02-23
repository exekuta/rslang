import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

const AuthorsButton:React.FC<Props> = ({ setShowModal }) => {
  const toggle = () => setShowModal((showModal) => !showModal);

  return (
    <S.Button onClick={toggle}>
      Разработчики
    </S.Button>
  );
};

export default AuthorsButton;
