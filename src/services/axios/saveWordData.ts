import {
  CORRECT_ANSWERS_IN_A_ROW_TO_LEARN,
  CORRECT_ANSWERS_IN_A_ROW_TO_LEARN_DIFFICULT,
} from 'src/constants/games/common';
import { updateUserWord } from './userWords';

interface SaveWorDataParams {
  isGuessed: boolean;
  wordId?: string;
  userId?: string;
  token?: string;
}

export const saveWordData = ({
  isGuessed,
  wordId,
  userId,
  token,
}: SaveWorDataParams) => {
  if (!wordId || !userId || !token) return;
  updateUserWord({
    wordId,
    userId,
    token,
    modifyCallback(initialState) {
      const { optional, difficulty } = initialState;
      const {
        guessedInARowTimes, guessedTimes, isLearned, notGuessedTimes,
      } =
        optional || {};

      const isDifficult = difficulty === 'difficult';

      const newGuessedTimes = (guessedTimes || 0) + (isGuessed ? 1 : 0);
      const newNotGuessedTimes = (notGuessedTimes || 0) + (!isGuessed ? 1 : 0);
      const newGuessedInARowTimes = isGuessed
        ? (guessedInARowTimes || 0) + 1
        : 0;

      const newIsLearned =
        !!isLearned ||
        newGuessedInARowTimes >=
          (isDifficult
            ? CORRECT_ANSWERS_IN_A_ROW_TO_LEARN_DIFFICULT
            : CORRECT_ANSWERS_IN_A_ROW_TO_LEARN);

      return {
        ...initialState,
        difficulty: isDifficult && !newIsLearned ? 'difficult' : 'default',
        optional: {
          ...optional,
          isLearned: newIsLearned,
          guessedInARowTimes: newGuessedInARowTimes,
          guessedTimes: newGuessedTimes,
          notGuessedTimes: newNotGuessedTimes,
          isPlayed: true,
        },
      };
    },
  });
};
