import React from 'react';
import { DictionaryName } from 'src/types/Dictionary.type';
import { Flex } from '../core';
import DictionaryButton from './subcomponents/DictionaryButton';

const DictionarySelect = () => {
  return (
    <Flex gap={2}>
      <DictionaryButton
        dictionaryName={DictionaryName.LEVEL_1}
      />
      <DictionaryButton
        dictionaryName={DictionaryName.LEVEL_2}
      />
      <DictionaryButton
        dictionaryName={DictionaryName.LEVEL_3}
      />
      <DictionaryButton
        dictionaryName={DictionaryName.LEVEL_4}
      />
      <DictionaryButton
        dictionaryName={DictionaryName.LEVEL_5}
      />
      <DictionaryButton
        dictionaryName={DictionaryName.LEVEL_6}
      />

    </Flex>
  );
};

export default DictionarySelect;
