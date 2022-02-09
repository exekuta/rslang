import { objectToUrlParams } from 'src/helpers';
import { IWordsQueryData } from 'src/types/api/Word.types';
import { IWordList } from 'src/types/api/WordList.type';
import { IWord } from 'src/types/schemas';
import { appApi } from '.';

const wordsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query<IWordList, IWordsQueryData | void>({
      query: (params) => ({
        url: `words?${objectToUrlParams(params)}`,
      }),
      transformResponse: (returnValue: IWord[]) => ({
        pagesCount: 30,
        words: returnValue,
      }),
      providesTags: ['WORD'],
    }),
    getWord: builder.query<IWord, { wordId: string } | void>({
      query: (params) => ({
        url: `words/${params?.wordId ?? ''}`,
      }),
      providesTags: ['WORD'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetWordsQuery, useLazyGetWordsQuery, useGetWordQuery } =
  wordsApi;
