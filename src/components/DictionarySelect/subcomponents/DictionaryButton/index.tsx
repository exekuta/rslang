import React from 'react';
import { Icon } from 'src/config';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { selectGroup, selectTextbook } from 'src/store/reducers/textbook';
import { DictionaryName } from 'src/types/Dictionary.type';
import * as S from './style';

interface Props {
  dictionaryName: DictionaryName;
}

const DictionaryButton: React.FC<Props> = ({
  dictionaryName,
}) => {
  const dispatch = useTypedDispatch();
  const { group } = useTypedSelector(selectTextbook);

  const isSelected = group === dictionaryName;

  const handleClick = () => {
    if (!isSelected) {
      dispatch(selectGroup(dictionaryName));
    } else {
      console.log('PLAY');
    }
  };

  return (
    <S.Button
      dictionaryName={dictionaryName}
      onClick={handleClick}
      isSelected={isSelected}
    >
      {isSelected ? <Icon.Joystick /> : <Icon.Book />}
    </S.Button>
  );
};

export default DictionaryButton;
