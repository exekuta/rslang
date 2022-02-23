import React from 'react';
import { Icon } from 'src/config';
import { GroupName, isDictionaryNameValue } from 'src/types/Dictionary.type';
import * as S from './style';

interface Props {
  groupName: GroupName;
  isActive?: boolean;
}

const DictionaryButton: React.FC<Props> = ({
  groupName,
  isActive,
  ...props
}) => {
  return (
    <S.Button groupName={groupName} isActive={!!isActive} {...props}>
      {isActive && isDictionaryNameValue(groupName) ? (
        <Icon.Joystick />
      ) : (
        <Icon.Book />
      )}
    </S.Button>
  );
};

export default DictionaryButton;
