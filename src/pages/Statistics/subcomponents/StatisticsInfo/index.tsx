import React from 'react';
import { Flex } from 'src/components/core';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  BarController,
  LineController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { GameName } from 'src/types/Game.types';
import { options, useStatistics } from '../../helpers/useStatistics';
import * as S from './style';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  BarController,
  LineController,
);

const StatisticsInfo = () => {
  const { chartData, gameStats } = useStatistics();

  return (
    <>
      <S.Text>Games statistics:</S.Text>
      <Flex gap={3} column>
        <Flex gap={3} aic jcc>
          <S.AudioStatContainer>
            <S.Text>Audio challenge:</S.Text>
            <S.Date>Today</S.Date>
            <S.StatDataContainer>
              <S.StatData>
                <span>{gameStats[GameName.AUDIO_CHALLENGE].newWords}</span>
                <span>
                  {Math.round(
                    (gameStats[GameName.AUDIO_CHALLENGE].accuracy || 0) * 100,
                  )}
                  %
                </span>
                <span>{gameStats[GameName.AUDIO_CHALLENGE].inARow}</span>
              </S.StatData>
              <S.StatDescription>
                <span>new words</span>
                <span>accuracy</span>
                <span>max right answers</span>
              </S.StatDescription>
            </S.StatDataContainer>
          </S.AudioStatContainer>
          <S.SprintStatContainer>
            <S.Text>Sprint:</S.Text>
            <S.Date>Today</S.Date>
            <S.StatDataContainer>
              <S.StatData>
                <span>{gameStats.sprint.newWords}</span>
                <span>
                  {
                    Math.round((gameStats.sprint.accuracy || 0) * 100)
                  }
                  %
                </span>
                <span>{gameStats.sprint.inARow}</span>
              </S.StatData>
              <S.StatDescription>
                <span>new words</span>
                <span>accuracy</span>
                <span>max right answers</span>
              </S.StatDescription>
            </S.StatDataContainer>
          </S.SprintStatContainer>
        </Flex>
        <S.WordsStatContainer>
          <S.Text>Words statistics:</S.Text>
          <Chart type="bar" data={chartData} options={options} />
        </S.WordsStatContainer>
      </Flex>
    </>
  );
};

export default StatisticsInfo;
