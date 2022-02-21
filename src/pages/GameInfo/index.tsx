import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'src/components/common';
import { Flex, Page } from 'src/components/core';
import DictionaryButton from 'src/components/DictionaryButton';
import { navigateToGame } from 'src/helpers';
import { useSelect } from 'src/hooks/useSelect';
import {
  DictionaryName, isDictionaryNameValue,
} from 'src/types/Dictionary.type';
import { GameName } from 'src/types/Game.types';
import { data } from './data';
import * as S from './style';

interface Props {
  gameName: GameName;
}

const GameInfo: React.FC<Props> = ({ gameName }) => {
  const navigate = useNavigate();
  const { dictionaryName } = useParams();
  const isDictionaryName = isDictionaryNameValue(dictionaryName);

  const {
    description, image, title, howtocontrol,
  } = data[gameName];
  const {
    register,
    selectedElement: selectedDictionary,
    isSelected,
  } = useSelect<DictionaryName>({
    activeKey: 'isActive',
  });

  const goBack = () => {
    navigate(-1);
  };

  const goToGame = () => {
    if (!isDictionaryName && selectedDictionary === null) return;

    navigateToGame({
      navigate,
      gameName,
      dictionaryName: isDictionaryName
        ? dictionaryName
        : (selectedDictionary as DictionaryName),
    });
  };

  return (
    <Page.Page center>
      <Flex column gap={12} aic>
        <Flex column gap={6} aic>
          <S.Image alt={`${gameName} thumbnail`} src={image} />
          <S.InfoPart>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.HelperText>{howtocontrol}</S.HelperText>
          </S.InfoPart>
          {!isDictionaryName && (
            <Flex gap={2} fwrap jcc>
              <DictionaryButton
                dictionaryName={DictionaryName.LEVEL_1}
                {...register(DictionaryName.LEVEL_1)}
              />
              <DictionaryButton
                dictionaryName={DictionaryName.LEVEL_2}
                {...register(DictionaryName.LEVEL_2)}
              />
              <DictionaryButton
                dictionaryName={DictionaryName.LEVEL_3}
                {...register(DictionaryName.LEVEL_3)}
              />
              <DictionaryButton
                dictionaryName={DictionaryName.LEVEL_4}
                {...register(DictionaryName.LEVEL_4)}
              />
              <DictionaryButton
                dictionaryName={DictionaryName.LEVEL_5}
                {...register(DictionaryName.LEVEL_5)}
              />
              <DictionaryButton
                dictionaryName={DictionaryName.LEVEL_6}
                {...register(DictionaryName.LEVEL_6)}
              />
            </Flex>
          )}
        </Flex>
        <Flex gap={4}>
          <Button variant="outlined" minWidth={120} onClick={goBack}>
            Back
          </Button>
          <Button
            isDisabled={!isDictionaryName && !isSelected}
            minWidth={120}
            onClick={goToGame}
          >
            Play
          </Button>
        </Flex>
      </Flex>
    </Page.Page>
  );
};

export default GameInfo;
