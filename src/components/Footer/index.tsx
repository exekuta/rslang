import React from 'react';
import { RsSchoolLogoComponent } from 'src/assets/img';
import { Flex } from '../core';
import * as S from './style';
import GitHubLink from './subcomponents/GitHubLink';

const Footer = () => {
  return (
    <S.Container>
      <S.RsSchoolLink href="https://rs.school/js/">
        <RsSchoolLogoComponent />
      </S.RsSchoolLink>
      <Flex gap={4} aic>
        <Flex gap={3} aic>
          <GitHubLink link="https://github.com/exekuta" username="Андрей" />
          <GitHubLink link="https://github.com/KUSTIKs/" username="Артём" />
        </Flex>
        <S.CopyText>&copy; 2022</S.CopyText>
      </Flex>
    </S.Container>
  );
};

export default Footer;
