import React, { useState } from 'react';
import avatarAndrey from 'src/assets/img/avatar-andrey.jpg';
import avatarArtem from 'src/assets/img/avatar-artem.svg';
import * as S from './style';

const AboutButton = () => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);

  return (
    <>
      <S.Button onClick={toggle}>
        About us
      </S.Button>
      <S.ModalContainer showSlide={showModal}>
        <h2>About us:</h2>
        <S.ModalAbout>
          <div>
            <S.Avatar src={avatarAndrey} />
            <h2>
              Andrey
            </h2>
          </div>
          <div>
            <S.Avatar src={avatarArtem} />
            <h2>
              Artem
            </h2>
          </div>
        </S.ModalAbout>
      </S.ModalContainer>
    </>
  );
};

export default AboutButton;
