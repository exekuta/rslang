import { useEffect, useMemo } from 'react';
import { average } from 'src/helpers';
import { useAuth } from 'src/hooks';
import { useLazyGetStatisticsQuery } from 'src/services/api/statistics.api';
import { ChartDataItem, GameStats } from 'src/types/Statistics.type';

const defaultGameStatsWordData = {
  accuracy: null,
  inARow: 0,
  newWords: 0,
};

export const useStatistics = () => {
  const { auth } = useAuth();
  const [getStatistics, { data }] = useLazyGetStatisticsQuery();

  useEffect(() => {
    if (!auth) return;
    getStatistics({ userId: auth.userId });
  }, [auth, getStatistics]);

  const gameResults = useMemo(
    () => Array.from(data?.optional?.gameResults || []),
    [data?.optional?.gameResults],
  );

  const rawCharData = useMemo(
    () => gameResults
      .sort((r1, r2) => r1.timestamp - r2.timestamp)
      .reduce((acc, {
        accuracy, learnedWords, newWords, timestamp,
      }) => {
        const date = new Date(timestamp).toLocaleString('en-us', {
          day: 'numeric',
          month: 'short',
        });
        const created = acc.find((r) => r.date === date);
        if (created) {
          created.accuracy += accuracy;
          created.learnedWords += learnedWords;
          created.newWords += newWords;
        }
        return created
          ? acc
          : acc.concat({
            date,
            accuracy,
            learnedWords,
            newWords,
          });
      }, [] as ChartDataItem[])
      .slice(0, 5),
    [gameResults],
  );

  const gameStats: GameStats = useMemo(
    () => gameResults
      .filter(({ timestamp }) => Date.now() - timestamp < 24 * 60 * 60 * 1000)
      .reduce(
        (acc, {
          accuracy, newWords, gameName, correctAnswers,
        }) => {
          const currentGameStat = acc[gameName];
          const totalAccuracy =
              currentGameStat.accuracy !== null
                ? average(currentGameStat.accuracy, accuracy)
                : accuracy;
          const totalNewWords = currentGameStat.newWords + newWords;
          const maxInARow = Math.max(correctAnswers, currentGameStat.inARow);

          return {
            ...acc,
            [gameName]: {
              accuracy: totalAccuracy,
              inARow: maxInARow,
              newWords: totalNewWords,
            },
          };
        },
        {
          audioChallenge: defaultGameStatsWordData,
          sprint: defaultGameStatsWordData,
        },
      ),
    [gameResults],
  );

  return {
    rawCharData,
    gameStats,
  };
};
