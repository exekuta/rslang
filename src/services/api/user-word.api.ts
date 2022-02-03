import { HttpMethod } from 'src/types/HttpMethod.type';
import { IWord } from 'src/types/schemas';
import { IUserWord } from 'src/types/schemas/UserWord.type';
import { appApi } from '.';
import { getUserId } from './helpers/getUserId';

const userWordsApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserWords: builder.query<IUserWord[], void>({
      query: () => ({
        url: `users/${getUserId()}/words`,
      }),
    }),
    getUserWord: builder.query<IUserWord[], Pick<IWord, 'id'>>({
      query: ({ id }) => ({
        url: `users/${getUserId()}/words/${id}`,
      }),
    }),
    createUserWord: builder.mutation<IUserWord, IUserWord & { wordId: string }>(
      {
        query: ({ wordId, ...params }) => ({
          url: `users/${getUserId()}/words/${wordId}`,
          method: HttpMethod.POST,
          body: params,
        }),
      },
    ),
    updateUserWord: builder.mutation<IUserWord, IUserWord & { wordId: string }>(
      {
        query: ({ wordId, ...params }) => ({
          url: `users/${getUserId()}/words/${wordId}`,
          method: HttpMethod.PUT,
          body: params,
        }),
      },
    ),
    deleteUserWord: builder.mutation<IUserWord, { wordId: string }>({
      query: ({ wordId }) => ({
        url: `users/${getUserId()}/words/${wordId}`,
        method: HttpMethod.DELETE,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserWordQuery,
  useGetUserWordsQuery,
  useCreateUserWordMutation,
  useUpdateUserWordMutation,
  useDeleteUserWordMutation,
} = userWordsApi;
