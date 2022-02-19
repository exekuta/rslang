import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { crocodileImg, giraffeImg } from 'src/assets/img';
import { Button } from 'src/components/common';
import { Flex, Game } from 'src/components/core';
import GameFooter from 'src/components/GameFooter';
import { routes } from 'src/config';
import { GameName } from 'src/types/Game.types';
import { IGameResult } from 'src/types/games/common';
import * as S from './style';
import DetailsItem from './subcomponents/DetailsItem';

type Props = IGameResult & {
  openDetails: MouseEventHandler;
};

const GameEndScreen: React.FC<Props> = ({
  gameName,
  score,
  correctAnswers,
  incorrectAnswers,
  openDetails,
}) => {
  const navigate = useNavigate();

  const thumbnailImg = gameName === GameName.SPRINT ? giraffeImg : crocodileImg;

  const goToGames = () => {
    navigate(routes.games.fullPath, {
      replace: true,
    });
  };

  return (
    <Game.Page>
      <Game.Container isMain center>
        <Flex column gap={4} pic>
          <S.Image src={thumbnailImg} alt="game thumbnail" />
          <Flex column gap={2} aic>
            <S.DetailsTitle>Well Done !</S.DetailsTitle>
            <DetailsItem name="Score" value={score} />
            <DetailsItem name="Correct words" value={correctAnswers} />
            <DetailsItem name="Incorrect words" value={incorrectAnswers} />
          </Flex>
        </Flex>
      </Game.Container>
      <GameFooter>
        <Button
          variant="outlined"
          maxWidth={200}
          fullWidth
          onClick={openDetails}
        >
          Game details
        </Button>
        <Button maxWidth={200} fullWidth onClick={goToGames}>
          End
        </Button>
      </GameFooter>
    </Game.Page>
  );
};

export default GameEndScreen;
