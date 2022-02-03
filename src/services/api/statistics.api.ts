import { HttpMethod } from 'src/types/HttpMethod.type';
import { IStatistics } from 'src/types/schemas/Statistics.type';
import { appApi } from '.';
import { getUserId } from './helpers/getUserId';

const statisticsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query<IStatistics, void>({
      query: () => ({
        url: `users/${getUserId()}/statistics`,
      }),
    }),
    updateStatistics: builder.query<IStatistics, IStatistics>({
      query: (body) => ({
        url: `users/${getUserId()}/statistics`,
        method: HttpMethod.PUT,
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetStatisticsQuery,
  useUpdateStatisticsQuery,
} = statisticsApi;
