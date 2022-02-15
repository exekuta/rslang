import { DictionaryName } from 'src/types/Dictionary.type';
import { useMemo } from 'react';
import { PAGES_COUNT } from 'src/constants/dictionary';
import { random } from 'src/helpers';
import { MAX_ROUNDS_AMOUNT } from 'src/constants/games/sprint';
import { useGetWordsQuery } from 'src/services/api/words.api';
import { IGuessedWord } from 'src/types/games/AudioChallenge.type';
import { getStaticFilePath } from 'src/helpers/getStaticFilePath';

const shuffle = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

interface UseGuessedWordsParams {
  dictionaryName: DictionaryName;
}

export const useGuessedWords = ({ dictionaryName }: UseGuessedWordsParams) => {
  const page = useMemo(() => random.range({ max: PAGES_COUNT }), []);

  const { data } = useGetWordsQuery({ group: dictionaryName, page });

  const correctWords = useMemo(
    () => (!data
      ? null
      : random.sample({
        arr: data.words,
        amount: MAX_ROUNDS_AMOUNT,
      })),
    [data],
  );

  const guessedWords = useMemo<IGuessedWord[] | null>(
    () => (!correctWords || !data
      ? null
      : correctWords.map((correctWord) => {
        const potentiallyIncorrectWords = data.words.filter(
          (word) => word !== correctWord,
        );

        const incorrectVariants = random.sample({
          arr: potentiallyIncorrectWords,
          amount: 4,
        }).map(({ word }) => word);

        const audio = getStaticFilePath(correctWord.audio);

        const answer = correctWord.word;

        const options = shuffle([...incorrectVariants, answer]);

        return {
          audio,
          answer,
          options,
        };
      })),
    [correctWords, data],
  );

  return guessedWords;
};
