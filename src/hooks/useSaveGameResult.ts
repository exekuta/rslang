import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { arrayToArrayLike } from 'src/helpers';
import { useAuth } from 'src/hooks';
import {
  useLazyGetStatisticsQuery,
  useUpdateStatisticsMutation,
} from 'src/services/api/statistics.api';
import { GameName } from 'src/types/Game.types';
import { IGameResult, RoundResult } from 'src/types/games/common';
import { ISprintRoundResult } from 'src/types/games/Sprint.type';

interface UseSaveGameResultParams {
  roundResults: RoundResult[];
  gameName: GameName;
  score: number;
}

export const useSaveGameResult = ({
  gameName,
  roundResults,
  score,
}: UseSaveGameResultParams) => {
  const [shouldSave, setShouldSave] = useState(false);
  const [updateStatistics] = useUpdateStatisticsMutation();
  const [getStatistics, { data: initialStatistics, isError: isNotCreated }] =
    useLazyGetStatisticsQuery();
  const { auth } = useAuth();

  const correctAnswers = roundResults.filter(
    ({ isGuessed }) => isGuessed,
  ).length;
  const incorrectAnswers = roundResults.filter(
    ({ isGuessed }) => !isGuessed,
  ).length;

  const gameResult = useMemo<IGameResult | null>(
    () => (!shouldSave
      ? null
      : {
        gameName,
        incorrectAnswers,
        correctAnswers,
        score,
        timestamp: Date.now(),
        rounds: roundResults,
        // learnedWords,
        // newWords,
      }),
    [
      shouldSave,
      gameName,
      incorrectAnswers,
      correctAnswers,
      score,
      roundResults,
    ],
  );

  useEffect(() => {
    if (!auth) return;

    getStatistics({
      userId: auth.userId,
    });
  }, [auth, getStatistics]);

  useEffect(() => {
    if (!gameResult || !auth) return;

    const statistics = { ...initialStatistics };

    delete statistics.id;

    statistics.optional = { ...statistics.optional };

    const totalScore = (statistics.optional.score || 0) + gameResult.score;

    statistics.optional.score = totalScore;

    const gameResults = Array.from(statistics.optional.gameResults || []);
    gameResults.push(gameResult);

    statistics.optional.gameResults = arrayToArrayLike(gameResults);

    updateStatistics({
      userId: auth.userId,
      learnedWords: 0,
      ...statistics,
    });
  }, [auth, gameResult, initialStatistics, isNotCreated, updateStatistics]);

  const saveGameResult = useCallback(() => {
    if (shouldSave) return;
    setShouldSave(true);
  }, [shouldSave]);

  return { gameResult, saveGameResult };
};
