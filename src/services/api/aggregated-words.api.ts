import { objectToUrlParams } from 'src/helpers';
import {
  IGetAggregatedWordsQueryData,
  IGetAggregatedWordsResponse,
} from 'src/types/api/AggregatedWords.type';
import { IWord } from 'src/types/schemas';
import { appApi } from '.';
import { getUserId } from './helpers/getUserId';

const userWordsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAggregatedWords: builder.query<
      IGetAggregatedWordsResponse,
      IGetAggregatedWordsQueryData | void
    >({
      query: (params) => ({
        url: `users/${getUserId()}/aggregatedWords?${objectToUrlParams({
          wordsPerPage: 20,
          ...params,
        } as IGetAggregatedWordsQueryData)}`,
      }),
    }),
    getUserAggregatedWord: builder.query<IWord, Pick<IWord, 'id'>>({
      query: ({ id }) => ({
        url: `users/${getUserId()}/aggregatedWords/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserAggregatedWordsQuery,
  useGetUserAggregatedWordQuery,
} = userWordsApi;
