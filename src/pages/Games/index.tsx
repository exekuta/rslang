import React from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { crocodileImg, giraffeImg } from 'src/assets/img';
import { Flex, Page } from 'src/components/core';
import GameCard from 'src/components/GameCard';
import { routes } from 'src/config';
import { isDictionaryNameValue } from 'src/types/Dictionary.type';
import { RouteName } from 'src/types/Route.type';

const Games = () => {
  const navigate = useNavigate();
  const { dictionaryName } = useParams();
  const isDictionaryName = isDictionaryNameValue(dictionaryName);

  const navigateToAudioChallenge = () => {
    const routeName = isDictionaryName
      ? RouteName.AUDIO_CHALLENGE_INFO_FOR_DICTIONARY
      : RouteName.AUDIO_CHALLENGE_INFO;
    const { fullPath } = routes[routeName];
    const formattedPath = generatePath(fullPath, { dictionaryName });
    navigate(formattedPath);
  };

  const navigateToSprint = () => {
    const routeName = isDictionaryName
      ? RouteName.SPRINT_INFO_FOR_DICTIONARY
      : RouteName.SPRINT_INFO;
    const { fullPath } = routes[routeName];
    const formattedPath = generatePath(fullPath, { dictionaryName });
    navigate(formattedPath);
  };

  return (
    <Page.Page center>
      <Flex column gap={6} aic>
        <Page.Title>Select a game</Page.Title>
        <Flex gap={4} fwrap jcc>
          <GameCard
            title="Audio challenge"
            image={giraffeImg}
            onClick={navigateToAudioChallenge}
          />
          <GameCard
            title="Sprint"
            image={crocodileImg}
            onClick={navigateToSprint}
          />
        </Flex>
      </Flex>
    </Page.Page>
  );
};

export default Games;
