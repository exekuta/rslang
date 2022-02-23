import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'src/components/core';
import {
  DictionaryNameValue,
  isDictionaryNameValue,
} from 'src/types/Dictionary.type';
import AudioChallengeGame from './subcomponents/AudioChallengeGame';

const AudioChallenge = () => {
  const { dictionaryName } = useParams<{
    dictionaryName: DictionaryNameValue;
  }>();

  return isDictionaryNameValue(dictionaryName) ? (
    <AudioChallengeGame dictionaryName={dictionaryName} />
  ) : (
    <Page.Page center>
      <Page.NotFoundMessage>No such dictionary</Page.NotFoundMessage>
    </Page.Page>
  );
};
export default AudioChallenge;
