import React, { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { routes } from 'src/config';
import { useAuth, useTypedDispatch, useTypedSelector } from 'src/hooks';
import { useSelect } from 'src/hooks/useSelect';
import { selectTextbook, setGroup } from 'src/store/reducers/textbook';
import {
  AdditionalGroupName,
  DictionaryName,
  GroupName,
  isDictionaryNameValue,
} from 'src/types/Dictionary.type';
import DictionaryButton from '../DictionaryButton';
import * as S from './style';

const DictionarySelect = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { group } = useTypedSelector(selectTextbook);
  const { isAuthorized } = useAuth();
  const {
    selectedElement: selectedGroup,
    register,
    selectElement,
  } = useSelect<GroupName>({
    initialState: group,
    activeKey: 'isActive',
    onActiveClick: (val) => {
      if (!isDictionaryNameValue(val)) return;
      navigate(
        generatePath(routes.gamesForDictionary.fullPath, {
          dictionaryName: String(val),
        }),
      );
    },
  });

  useEffect(() => {
    if (selectedGroup === null) return;
    dispatch(setGroup(selectedGroup));
  }, [dispatch, selectedGroup]);

  useEffect(() => {
    selectElement(group);
  }, [group, selectElement]);

  return (
    <S.Wrapper>
      <DictionaryButton
        groupName={DictionaryName.LEVEL_1}
        {...register(DictionaryName.LEVEL_1)}
      />
      <DictionaryButton
        groupName={DictionaryName.LEVEL_2}
        {...register(DictionaryName.LEVEL_2)}
      />
      <DictionaryButton
        groupName={DictionaryName.LEVEL_3}
        {...register(DictionaryName.LEVEL_3)}
      />
      <DictionaryButton
        groupName={DictionaryName.LEVEL_4}
        {...register(DictionaryName.LEVEL_4)}
      />
      <DictionaryButton
        groupName={DictionaryName.LEVEL_5}
        {...register(DictionaryName.LEVEL_5)}
      />
      <DictionaryButton
        groupName={DictionaryName.LEVEL_6}
        {...register(DictionaryName.LEVEL_6)}
      />
      {isAuthorized && (
        <DictionaryButton
          groupName={AdditionalGroupName.DIFFICULT_WORDS}
          {...register(AdditionalGroupName.DIFFICULT_WORDS)}
        />
      )}
    </S.Wrapper>
  );
};

export default DictionarySelect;
