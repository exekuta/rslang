import React from 'react';
import IconButton from 'src/components/common/IconButton';
import { Icon } from 'src/config';
import * as S from './style';

interface Props {
  name: string;
  email: string;
  handleLogOut: () => void;
}

const UserInfo: React.FC<Props> = ({ handleLogOut, email, name }) => {
  const firstLetter = name[0];
  return (
    <S.Wrapper>
      <S.Avatar>{firstLetter}</S.Avatar>
      <S.Info>
        <S.Name title={name}>{name}</S.Name>
        <S.Email title={email}>{email}</S.Email>
      </S.Info>
      <IconButton onClick={handleLogOut}>
        <Icon.LogOut />
      </IconButton>
    </S.Wrapper>
  );
};

export default UserInfo;
