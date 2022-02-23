import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'src/components/core';
import {
  DictionaryNameValue,
  isDictionaryNameValue,
} from 'src/types/Dictionary.type';
import SprintGame from './subcomponents/SprintGame';

const Sprint = () => {
  const { dictionaryName } = useParams<{
    dictionaryName: DictionaryNameValue;
  }>();

  return isDictionaryNameValue(dictionaryName) ? (
    <SprintGame dictionaryName={dictionaryName} />
  ) : (
    <Page.Page center>
      <Page.NotFoundMessage>No such dictionary</Page.NotFoundMessage>
    </Page.Page>
  );
};

export default Sprint;
