import React from 'react';
import { useAuth } from 'src/hooks';
import { AdditionalGroupName, DictionaryName } from 'src/types/Dictionary.type';
import { Flex } from '../core';
import DictionaryButton from './subcomponents/DictionaryButton';

const DictionarySelect = () => {
  const { isAuthorized } = useAuth();

  return (
    <Flex gap={2}>
      <DictionaryButton groupName={DictionaryName.LEVEL_1} />
      <DictionaryButton groupName={DictionaryName.LEVEL_2} />
      <DictionaryButton groupName={DictionaryName.LEVEL_3} />
      <DictionaryButton groupName={DictionaryName.LEVEL_4} />
      <DictionaryButton groupName={DictionaryName.LEVEL_5} />
      <DictionaryButton groupName={DictionaryName.LEVEL_6} />
      {isAuthorized && (
        <DictionaryButton groupName={AdditionalGroupName.DIFFICULT_WORDS} />
      )}
    </Flex>
  );
};

export default DictionarySelect;
