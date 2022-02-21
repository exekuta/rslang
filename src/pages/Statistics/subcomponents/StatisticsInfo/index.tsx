import React, { useEffect } from 'react';
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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useLazyGetStatisticsQuery } from 'src/services/api/statistics.api';
import { useAuth } from 'src/hooks';
import * as S from './style';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

const options = {
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
  const { auth } = useAuth();
  const [getStatistics, { data }] = useLazyGetStatisticsQuery();

  useEffect(() => {
    if (!auth) return;
    getStatistics({ userId: auth.userId });
  }, [auth, getStatistics]);

  type T = {
    date: string;
      learnedWords: number;
      newWords: number;
      accuracy: number;
  }

  const gameResults = Array.from(data?.optional?.gameResults || [])
    .sort((r1, r2) => r1.timestamp - r2.timestamp)
    .reduce(
      (acc, {
        accuracy, learnedWords, newWords, timestamp,
      }) => {
        const date = new Date(timestamp).toLocaleString('us', {
          day: 'numeric',
          month: 'short',
        });
        const created = acc.find((r) => r.date === date);
        if (created) {
          created.accuracy += accuracy;
          created.learnedWords += learnedWords;
          created.newWords += newWords;
        }
        return created ? acc : acc.concat({
          date,
          accuracy,
          learnedWords,
          newWords,
        });
      },
    [] as T[],
    );

  const labels = gameResults.map(({ date }) => date);

  const chartData = data && {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Words learned',
        data: gameResults.map(
          ({ learnedWords }) => learnedWords,
        ),
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgb(255, 99, 132)'],
        borderWidth: 1,
      },
      {
        type: 'bar' as const,
        label: 'New words',
        data: gameResults.map(
          ({ newWords }) => newWords,
        ),
        backgroundColor: ['rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgb(255, 159, 64)'],
        borderWidth: 1,
      },
      {
        type: 'line' as const,
        label: 'Accuracy in %',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        fill: false,
        capBezierPoints: true,
        data: gameResults.map(
          ({ accuracy }) => accuracy,
        ),
      },
    ],
  };

  return (
    <>
      <S.Text>Games statistics:</S.Text>
      <Flex gap={1} aic jcc>
        <S.AudioStatContainer>
          <S.Text>Audio challenge:</S.Text>
          <S.Date>Today</S.Date>
          <S.StatDataContainer>
            <S.StatData>
              <span>50</span>
              <span>15%</span>
              <span>5</span>
            </S.StatData>
            <S.StatDescription>
              <span>new words</span>
              <span>accuracy</span>
              <span>in a row</span>
            </S.StatDescription>
          </S.StatDataContainer>
        </S.AudioStatContainer>
        <S.SprintStatContainer>
          <S.Text>Sprint:</S.Text>
          <S.Date>Today</S.Date>
          <S.StatDataContainer>
            <S.StatData>
              <span>20</span>
              <span>35%</span>
              <span>4</span>
            </S.StatData>
            <S.StatDescription>
              <span>new words</span>
              <span>accuracy</span>
              <span>in a row</span>
            </S.StatDescription>
          </S.StatDataContainer>
        </S.SprintStatContainer>
      </Flex>
      <S.WordsStatContainer>
        <S.Text>Words statistics:</S.Text>
        {chartData && <Chart type="bar" data={chartData} options={options} />}
      </S.WordsStatContainer>
    </>
  );
};

export default StatisticsInfo;
