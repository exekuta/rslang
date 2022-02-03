import { objectToUrlParams } from 'src/helpers';
import { IWordsQueryData } from 'src/types/api/Word.types';
import { IWord } from 'src/types/schemas';
import { appApi } from '.';

const wordsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query<IWord[], IWordsQueryData | void>({
      query: (params) => ({
        url: `words?${objectToUrlParams(params)}`,
      }),
    }),
    getWord: builder.query<IWord, { wordId: string } | void>({
      query: (params) => ({
        url: `words/${params ?? ''}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetWordsQuery,
  useGetWordQuery,
} = wordsApi;
