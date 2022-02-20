import { getStaticFilePath } from 'src/helpers/getStaticFilePath';
import { playAudio } from 'src/helpers/playAudio';
import { useAuth } from 'src/hooks';
import {
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
} from 'src/services/api/user-word.api';
import { IWord } from 'src/types/schemas';

export const useWordCard = ({
  audio,
  audioExample,
  audioMeaning,
  id,
  userWord,
}: IWord) => {
  const { difficulty, optional } = userWord || {};
  const { guessedTimes, isLearned, notGuessedTimes } = optional || {};

  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();
  const { isAuthorized } = useAuth();

  const isDifficult = difficulty === 'difficult';

  const playWordAudio = () => {
    playAudio(
      getStaticFilePath(audio),
      getStaticFilePath(audioMeaning),
      getStaticFilePath(audioExample),
    );
  };

  const toggleDifficulty = () => {
    if (!isAuthorized) return;
    const newDifficulty = isDifficult ? 'default' : 'difficult';
    const newIsLearned = newDifficulty !== 'difficult';
    const mutation = userWord ? updateUserWord : createUserWord;

    mutation({
      wordId: id,
      difficulty: newDifficulty,
      optional: {
        ...optional,
        isLearned: newIsLearned,
      },
    });
  };

  const toggleIsLearned = () => {
    if (!isAuthorized) return;
    const mutation = userWord ? updateUserWord : createUserWord;
    const newIsLearned = !isLearned;
    const newDifficulty =
      newIsLearned || !isDifficult ? 'default' : 'difficult';

    mutation({
      wordId: id,
      difficulty: newDifficulty,
      optional: {
        ...optional,
        isLearned: newIsLearned,
      },
    });
  };

  return {
    toggleDifficulty,
    guessedTimes,
    isLearned,
    notGuessedTimes,
    playAudio: playWordAudio,
    isAuthorized,
    isDifficult,
    toggleIsLearned,
  };
};
