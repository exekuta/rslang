import React, { useEffect } from 'react';
import { Flex } from 'src/components/core';
import { useAuth, useTypedDispatch, useTypedSelector } from 'src/hooks';
import { useSelect } from 'src/hooks/useSelect';
import { selectTextbook, setGroup } from 'src/store/reducers/textbook';
import {
  AdditionalGroupName,
  DictionaryName,
  GroupName,
} from 'src/types/Dictionary.type';
import DictionaryButton from '../DictionaryButton';

const DictionarySelect = () => {
  const dispatch = useTypedDispatch();
  const { group } = useTypedSelector(selectTextbook);
  const { isAuthorized } = useAuth();
  const {
    selectedElement: selectedGroup,
    register,
    selectElement,
  } = useSelect<GroupName>({
    initialState: group,
    activeKey: 'isActive',
    onActiveClick: (val) => console.log(`Play #${val}`),
  });

  useEffect(() => {
    if (selectedGroup === null) return;
    dispatch(setGroup(selectedGroup));
  }, [dispatch, selectedGroup]);

  useEffect(() => {
    selectElement(group);
  }, [group, selectElement]);

  return (
    <Flex gap={2}>
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
    </Flex>
  );
};

export default DictionarySelect;
