import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'src/components/core';
import {
  DictionaryNameValue,
  dictionaryNameValues,
} from 'src/types/Dictionary.type';

const Sprint = () => {
  const { dictionaryName } = useParams<{
    dictionaryName: DictionaryNameValue;
  }>();

  if (!dictionaryNameValues.includes(Number(dictionaryName))) {
    return (
      <Page.Page center>
        <Page.NotFoundMessage>No such dictionary</Page.NotFoundMessage>
      </Page.Page>
    );
  }

  return (
    <Page.Page center>
      <Page.Title>
        Sprint #
        {dictionaryName}
      </Page.Title>
    </Page.Page>
  );
};

export default Sprint;
