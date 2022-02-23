import { HttpMethod } from 'src/types/HttpMethod.type';
import { IStatistics } from 'src/types/schemas/Statistics.type';
import { appApi } from '.';

const statisticsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query<IStatistics, { userId: string }>({
      query: ({ userId }) => ({
        url: `users/${userId}/statistics`,
      }),
    }),
    updateStatistics: builder.mutation<
      IStatistics,
      IStatistics & { userId: string }
    >({
      query: ({ userId, ...body }) => ({
        url: `users/${userId}/statistics`,
        method: HttpMethod.PUT,
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetStatisticsQuery,
  useLazyGetStatisticsQuery,
  useUpdateStatisticsMutation,
} = statisticsApi;
