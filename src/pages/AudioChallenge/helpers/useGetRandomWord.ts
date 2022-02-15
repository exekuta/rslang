import { useMemo } from 'react';
import { PAGES_COUNT } from 'src/constants/dictionary';
import { MAX_ROUNDS_AMOUNT } from 'src/constants/games/sprint';
import { random } from 'src/helpers';
import { useGetWordsQuery } from 'src/services/api/words.api';
import { DictionaryName } from 'src/types/Dictionary.type';
import { usePlayWord } from './usePlayWord';

interface Props {
  dictionaryName: DictionaryName;
}

export const useGetRandomWord = ({ dictionaryName }: Props) => {
  const page = useMemo(() => random.range({ max: PAGES_COUNT }), []);
  const { data } = useGetWordsQuery({ group: dictionaryName, page });

  const wordsArray = useMemo(
    () => (!data
      ? null
      : random.sample({
        arr: data.words,
        amount: MAX_ROUNDS_AMOUNT,
      })),
    [data],
  );

  const correctAnswer = useMemo(
    () => wordsArray && random.pick({ arr: wordsArray }),
    [wordsArray],
  );

  const incorrectAnswers = useMemo(
    () => wordsArray && wordsArray.map((item) => item.word),
    [wordsArray],
  );

  // const incorrectAnswers = useMemo(
  //   () => (!wordsArray || !data
  //     ? null
  //     : wordsArray.map((currentWord) => {
  //       const potentiallyIncorrectWords = data.words.filter(
  //         (word) => word !== currentWord,
  //       );

  //       const arr = potentiallyIncorrectWords.map((item) => item.word);

  //       return arr;
  //     })),
  //   [wordsArray, data],
  // );

  const { play } = usePlayWord(correctAnswer?.audio);

  return {
    wordsArray,
    correctAnswer,
    play,
    incorrectAnswers,
  };
};
