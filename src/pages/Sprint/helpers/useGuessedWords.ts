import { useMemo } from 'react';
import { PAGES_COUNT } from 'src/constants/dictionary';
import { MAX_ROUNDS_AMOUNT } from 'src/constants/games/sprint';
import { random } from 'src/helpers';
import { useGetWordsQuery } from 'src/services/api/words.api';
import { DictionaryName } from 'src/types/Dictionary.type';
import { IGuessedWord } from 'src/types/games/Sprint.type';

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

        const incorrectWord = random.pick({
          arr: potentiallyIncorrectWords,
        });

        const isCorrect = random.bool();

        const { word } = correctWord;

        const translation = (isCorrect ? correctWord : incorrectWord)
          .wordTranslate;

        return {
          word,
          translation,
          isCorrect,
        };
      })),
    [correctWords, data],
  );

  return guessedWords;
};
