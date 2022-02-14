import React from 'react';
import { useNavigate } from 'react-router-dom';
import { crocodileImg, giraffeImg } from 'src/assets/img';
import { Flex, Page } from 'src/components/core';
import GameCard from 'src/components/GameCard';
import { routes } from 'src/config';

const Games = () => {
  const navigate = useNavigate();

  const navigateToAudioChallenge = () => {
    navigate(routes.audioChallengeInfo.fullPath);
  };
  const navigateToSprint = () => {
    navigate(routes.sprintInfo.fullPath);
  };

  return (
    <Page.Page center>
      <Flex column gap={6} aic>
        <Page.Title>Select a game</Page.Title>
        <Flex gap={4}>
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
