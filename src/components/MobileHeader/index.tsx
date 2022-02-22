import React, { MouseEventHandler } from 'react';
import { Icon } from 'src/config';
import IconButton from '../common/IconButton';
import { Flex } from '../core';
import Logo from '../NavMenu/subcomponents/Logo';
import * as S from './style';

interface Props {
  onMenuButtonClick: MouseEventHandler;
}

const MobileHeader: React.FC<Props> = ({ onMenuButtonClick }) => {
  return (
    <S.Wrapper>
      <Flex jcsb>
        <Logo />
        <IconButton onClick={onMenuButtonClick}>
          <Icon.Menu />
        </IconButton>
      </Flex>
    </S.Wrapper>
  );
};

export default MobileHeader;
