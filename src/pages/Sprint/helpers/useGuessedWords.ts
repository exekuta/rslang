import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { MAX_ROUNDS_AMOUNT } from 'src/constants/games/sprint';
import { random } from 'src/helpers';
import { getAllDictionaryWords } from 'src/services/axios/words';
import { DictionaryName } from 'src/types/Dictionary.type';
import { IGuessedWord } from 'src/types/games/Sprint.type';
import { IWord } from 'src/types/schemas';

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

        const incorrectWord = random.pick({
          arr: potentiallyIncorrectWords,
        });

        const isCorrect = random.bool();

        const { word, wordTranslate, userWord } = correctWord;
        const { isPlayed, isLearned } = userWord?.optional || {};

        const translation = (isCorrect ? correctWord : incorrectWord)
          .wordTranslate;

        return {
          word,
          translation,
          correctTranslation: wordTranslate,
          isCorrect,
          isPlayed: !!isPlayed,
          isLearned: !!isLearned,
        };
      })),
    [correctWords, words],
  );

  return guessedWords;
};
