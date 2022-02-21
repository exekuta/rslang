import React from 'react';
import { Icon } from 'src/config';
import * as S from './style';

interface Props {
  link: string;
  username: string;
}

const GitHubLink: React.FC<Props> = ({ link, username }) => {
  return (
    <S.Link href={link}>
      <S.Icon>
        <Icon.Github />
      </S.Icon>
      <S.Username>
        {username}
      </S.Username>
    </S.Link>
  );
};

export default GitHubLink;
