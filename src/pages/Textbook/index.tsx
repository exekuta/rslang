import React from 'react';
import { Flex, Page } from 'src/components/core';
import DictionarySelect from 'src/components/DictionarySelect';
import WordList from './subcomponents/WordList';

const Textbook = () => {
  return (
    <Page.Page>
      <Page.Title isMargin>Textbook</Page.Title>
      <Flex column gap={2}>
        <DictionarySelect />
        <WordList />
      </Flex>
    </Page.Page>
  );
};

export default Textbook;
