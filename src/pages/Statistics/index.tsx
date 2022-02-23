import React from 'react';
import { Page } from 'src/components/core';
import StatisticsInfo from './subcomponents/StatisticsInfo';

const Statistics = () => {
  return (
    <Page.Page>
      <Page.Title>Statistics</Page.Title>
      <StatisticsInfo />
    </Page.Page>
  );
};

export default Statistics;
