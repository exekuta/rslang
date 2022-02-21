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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
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

const StatisticsInfo = () => {
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

  const labels = [
    'Date -4',
    'Date -3',
    'Date -2',
    'Date -1',
    'Today',
    '',
  ];

  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Words learned',
        data: [15, 19, 20, 10, 16],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
        ],
        borderWidth: 1,
      },
      {
        type: 'bar' as const,
        label: 'New words',
        data: [65, 59, 80, 5, 56],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [

          'rgb(255, 159, 64)',
        ],
        borderWidth: 1,
      },
      {
        type: 'line' as const,
        label: 'Accuracy in %',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        fill: false,
        capBezierPoints: true,
        data: [33, 12, 10, 3, 56],
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
      <Flex gap={1} aic jcc>
        <S.WordsStatContainer>
          <S.Text>Words statistics:</S.Text>
          <Chart type="bar" data={data} options={options} />
        </S.WordsStatContainer>
      </Flex>
    </>
  );
};

export default StatisticsInfo;
