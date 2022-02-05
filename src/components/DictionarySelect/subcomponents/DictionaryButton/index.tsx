import React from 'react';
import { Icon } from 'src/config';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { selectGroup, selectTextbook } from 'src/store/reducers/textbook';
import { GroupName } from 'src/types/Dictionary.type';
import * as S from './style';

interface Props {
  groupName: GroupName;
}

const DictionaryButton: React.FC<Props> = ({
  groupName,
}) => {
  const dispatch = useTypedDispatch();
  const { group } = useTypedSelector(selectTextbook);

  const isSelected = group === groupName;

  const handleClick = () => {
    if (!isSelected) {
      dispatch(selectGroup(groupName));
    } else {
      console.log('PLAY');
    }
  };

  return (
    <S.Button
      groupName={groupName}
      onClick={handleClick}
      isSelected={isSelected}
    >
      {isSelected ? <Icon.Joystick /> : <Icon.Book />}
    </S.Button>
  );
};

export default DictionaryButton;
