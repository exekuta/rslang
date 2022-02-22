import { DictionaryName } from 'src/types/Dictionary.type';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { random } from 'src/helpers';
import { MAX_ROUNDS_AMOUNT } from 'src/constants/games/sprint';
import { IGuessedWord } from 'src/types/games/AudioChallenge.type';
import { getStaticFilePath } from 'src/helpers/getStaticFilePath';
import { getAllDictionaryWords } from 'src/services/axios/words';
import { IWord } from 'src/types/schemas';
import { shuffle } from 'src/helpers/shuffle';

interface UseGuessedWordsParams {
  dictionaryName: DictionaryName;
}

export const useGuessedWords = ({ dictionaryName }: UseGuessedWordsParams) => {
  const [words, setWords] = useState<IWord[] | null>(null);

  const loadWords = useCallback(async () => {
    const newWords = await getAllDictionaryWords({
      dictionaryName,
    });
    setWords(newWords);
  }, [dictionaryName]);

  useEffect(() => {
    loadWords();
  }, [loadWords]);

  const correctWords = useMemo(
    () => (!words
      ? null
      : random.sample({
        arr: words,
        amount: MAX_ROUNDS_AMOUNT,
      })),
    [words],
  );

  const guessedWords = useMemo<IGuessedWord[] | null>(
    () => (!correctWords || !words
      ? null
      : correctWords.map((correctWord) => {
        const potentiallyIncorrectWords = words.filter(
          (word) => word !== correctWord,
        );

        const incorrectVariants = random.sample({
          arr: potentiallyIncorrectWords,
          amount: 4,
        }).map(({ wordTranslate }) => wordTranslate);

        const audio = getStaticFilePath(correctWord.audio);

        const answer = correctWord.wordTranslate;

        const options = shuffle([...incorrectVariants, answer]);

        const { isLearned, isPlayed } = correctWord.userWord?.optional || {};

        return {
          audio,
          answer,
          options,
          isLearned: !!isLearned,
          isPlayed: !!isPlayed,
        };
      })),
    [correctWords, words],
  );

  return guessedWords;
};
