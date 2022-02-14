import React from 'react';
import avatarAndrey from 'src/assets/img/avatar-andrey.jpg';
import avatarArtem from 'src/assets/img/avatar-artem.svg';
import githubSign from 'src/assets/img/github-sign.svg';
import * as S from './style';

interface Props {
  showModal: boolean
}

const MainModal:React.FC<Props> = ({ showModal }) => {
  return (
    <S.ModalContainer showSlide={showModal}>
      <S.Header>
        Наша команда:
      </S.Header>
      <S.ModalAbout>
        <div>
          <S.Avatar src={avatarAndrey} />
          <S.Header>
            Андрей
          </S.Header>
          <a href="https://github.com/exekuta/">
            <S.GithubSign src={githubSign} alt="github-sign" />
          </a>
          <S.List>
            <li>Team-Lead</li>
            <li>Главная страница</li>
            <li>Игра &quot;Аудиовызов&quot;</li>
            <li>и т.д.</li>
          </S.List>
        </div>
        <div>
          <S.Avatar src={avatarArtem} />
          <S.Header>
            Артём
          </S.Header>
          <a href="https://github.com/KUSTIKs/">
            <S.GithubSign src={githubSign} alt="github-sign" />
          </a>
          <S.List>
            <li>Дизайн приложения</li>
            <li>Авторизация</li>
            <li>Электронный учебник и список слов</li>
            <li>и т.д.</li>
          </S.List>
        </div>
      </S.ModalAbout>
    </S.ModalContainer>
  );
};

export default MainModal;
