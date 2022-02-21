import React from 'react';
import { Flex, Page } from 'src/components/core';
import { useGetWordList } from './helpers/useWordList';
import DictionarySelect from './subcomponents/DictionarySelect';
import WordList from './subcomponents/WordList';

const Textbook = () => {
  const { data, isLoading } = useGetWordList();

  return (
    <Page.Page>
      <Page.Title isMargin>Textbook</Page.Title>
      <Flex column gap={2}>
        <DictionarySelect />
        <WordList data={data} isLoading={isLoading} />
      </Flex>
    </Page.Page>
  );
};

export default Textbook;
