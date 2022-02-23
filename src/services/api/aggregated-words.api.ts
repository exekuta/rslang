import { objectToUrlParams } from 'src/helpers';
import {
  IGetAggregatedWordsQueryData,
  IGetAggregatedWordsResponse,
} from 'src/types/api/AggregatedWords.type';
import { IWordList } from 'src/types/api/WordList.type';
import { IWord } from 'src/types/schemas';
import { appApi } from '.';
import { getUserId } from './helpers/getUserId';

const userWordsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAggregatedWords: builder.query<
      IWordList | undefined,
      IGetAggregatedWordsQueryData | void
    >({
      query: (params) => ({
        url: `users/${getUserId()}/aggregatedWords?${objectToUrlParams({
          wordsPerPage: 20,
          ...params,
        } as IGetAggregatedWordsQueryData)}`,
      }),
      transformResponse: (
        returnValue: IGetAggregatedWordsResponse[] | undefined,
      ) => {
        const response = returnValue?.[0];
        if (!response) return undefined;
        const words = response.paginatedResults.map(({ _id, ...info }) => ({
          id: _id,
          ...info,
        }));
        const wordsCount = response.totalCount[0]?.count;
        const pagesCount = !wordsCount ? 0 : Math.ceil(wordsCount / 20);
        return {
          pagesCount,
          words,
        };
      },
      providesTags: ['USER_WORD', 'WORD'],
    }),
    getUserAggregatedWord: builder.query<IWord, Pick<IWord, 'id'>>({
      query: ({ id }) => ({
        url: `users/${getUserId()}/aggregatedWords/${id}`,
      }),
      providesTags: ['USER_WORD', 'WORD'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserAggregatedWordsQuery,
  useLazyGetUserAggregatedWordsQuery,
  useGetUserAggregatedWordQuery,
} = userWordsApi;
