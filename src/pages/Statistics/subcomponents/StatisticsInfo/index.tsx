/* eslint-disable jsx-quotes */
import React, { useMemo } from 'react';
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
import { data } from 'src/pages/GameInfo/data';
import { useStatistics } from '../../helpers/useStatistics';
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

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        font: {
          family: 'Gilroy',
          size: 14,
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          family: 'Gilroy',
          size: 14,
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          family: 'Gilroy',
          size: 16,
        },
      },
    },
  },
};

const StatisticsInfo = () => {
  const { rawCharData, gameStats } = useStatistics();

  const labels = rawCharData.map(({ date }) => date);

  const chartData = useMemo(
    () => ({
      type: 'bar',
      labels,
      datasets: !data
        ? []
        : [
          {
            type: 'bar' as const,
            label: 'Words learned',
            data: rawCharData.map(({ learnedWords }) => learnedWords),
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgb(255, 99, 132)'],
            borderWidth: 1,
          },
          {
            type: 'bar' as const,
            label: 'New words',
            data: rawCharData.map(({ newWords }) => newWords),
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 1,
          },
          {
            type: 'line' as const,
            label: 'Accuracy in %',
            // backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            fill: false,
            capBezierPoints: true,
            data: rawCharData.map(({ accuracy }) => accuracy),
          },
        ],
    }),
    [labels, rawCharData],
  );

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
          <Chart type='bar' data={chartData} options={options} />
        </S.WordsStatContainer>
      </Flex>
    </>
  );
};

export default StatisticsInfo;
