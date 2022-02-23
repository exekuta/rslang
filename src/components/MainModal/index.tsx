import React from 'react';
import { AndreyAvatarImg, ArtemAvatarImg, GitHubLogo } from 'src/assets/img';
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
          <S.Avatar src={AndreyAvatarImg} />
          <S.Header>
            Андрей
          </S.Header>
          <a href="https://github.com/exekuta/">
            <S.GithubSign src={GitHubLogo} alt="github-sign" />
          </a>
          <S.List>
            <li>Team-Lead</li>
            <li>Главная страница</li>
            <li>Игра &quot;Аудиовызов&quot;</li>
            <li>и т.д.</li>
          </S.List>
        </div>
        <div>
          <S.Avatar src={ArtemAvatarImg} />
          <S.Header>
            Артём
          </S.Header>
          <a href="https://github.com/KUSTIKs/">
            <S.GithubSign src={GitHubLogo} alt="github-sign" />
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
