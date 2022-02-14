import React from 'react';
import githubSign from 'src/assets/img/github-sign.svg';
import RSSchool from 'src/assets/img/rs-school.svg';
import * as S from './style';

const Footer = () => {
  return (
    <S.Container>
      {/* <S.Flex> */}
      <div>
        <a href="https://rs.school/js/">
          <S.GithubSign src={RSSchool} alt="RSSchool" />
        </a>
      </div>
      <div>
        <S.GithubContainer>
          <S.GithubSign src={githubSign} alt="github-sign" />
          <a href="https://github.com/exekuta/">
            <h2>Андрей</h2>
          </a>
          <a href="https://github.com/KUSTIKs/">
            <h2>Артём</h2>
          </a>
        </S.GithubContainer>
      </div>
      <div>
        <h2>&copy; 2022</h2>
      </div>
      {/* </S.Flex> */}
    </S.Container>
  );
};

export default Footer;
