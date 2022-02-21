import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import { Game, Page } from 'src/components/core';
import GameFooter from 'src/components/GameFooter';
import ResultCard from 'src/components/ResultCard';
import { routes } from 'src/config';
import { IGameResult } from 'src/types/games/common';
import * as S from './style';

const GameDetails: React.FC<IGameResult> = ({ rounds, gameName }) => {
  const navigate = useNavigate();
  const goToGames = () => {
    navigate(routes.games.fullPath);
  };

  return (
    <Game.Page>
      <Game.Container isMain>
        <Page.Title isMargin>Game Details</Page.Title>
        <S.CardsWrapper>
          {rounds.map((roundData, idx) => (
            <ResultCard key={String(idx)} gameName={gameName} {...roundData} />
          ))}
        </S.CardsWrapper>
      </Game.Container>
      <GameFooter>
        <Button maxWidth={200} fullWidth onClick={goToGames}>
          End
        </Button>
      </GameFooter>
    </Game.Page>
  );
};

export default GameDetails;
