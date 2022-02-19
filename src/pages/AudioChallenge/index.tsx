import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'src/components/common';
import { Flex, Game, Page } from 'src/components/core';
import GameFooter from 'src/components/GameFooter';
import GameOption from 'src/components/GameOption';
import GameProgress from 'src/components/GameProgress';
import { Icon } from 'src/config';
import { useSelect } from 'src/hooks/useSelect';
import {
  DictionaryNameValue,
  isDictionaryNameValue,
} from 'src/types/Dictionary.type';
import * as S from './style';

const AudioChallenge = () => {
  const navigate = useNavigate();
  const { isSelected, register } = useSelect<string>({ activeKey: 'isActive' });
  const { dictionaryName } = useParams<{
    dictionaryName: DictionaryNameValue;
  }>();

  if (!isDictionaryNameValue(dictionaryName)) {
    return (
      <Page.Page center>
        <Page.NotFoundMessage>No such dictionary</Page.NotFoundMessage>
      </Page.Page>
    );
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Game.Page>
      <Game.Container>
        <GameProgress progress={4 / 10} onClose={goBack} details="4/10" />
      </Game.Container>
      <Game.Container isMain center>
        <Flex column gap={4} pic>
          <Page.Title>
            AudioChallenge #
            {dictionaryName}
          </Page.Title>

          <S.AudioButton>
            <Icon.VolumeFull />
          </S.AudioButton>
          <Flex fwrap gap={2} jcc>
            <GameOption
              kbd={1}
              title="Katharine Moody"
              {...register('Katharine Moody')}
            />
            <GameOption
              kbd={2}
              title="Vernon Bishop"
              {...register('Vernon Bishop')}
            />
            <GameOption
              kbd={3}
              title="Rose Fields"
              {...register('Rose Fields')}
            />
            <GameOption
              kbd={4}
              title="Bernard Graham"
              {...register('Bernard Graham')}
            />
            <GameOption
              kbd={5}
              title="Frank Rodriquez"
              {...register('Frank Rodriquez')}
            />
            <GameOption
              kbd={6}
              title="Helen Cortez"
              {...register('Helen Cortez')}
            />
          </Flex>
        </Flex>
      </Game.Container>
      <GameFooter>
        <Button variant="outlined" size="large">
          Back
        </Button>
        <Button size="large" isDisabled={!isSelected}>
          Next
        </Button>
      </GameFooter>
    </Game.Page>
  );
};
export default AudioChallenge;
