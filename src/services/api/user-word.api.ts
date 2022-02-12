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
      providesTags: ['USER_WORD'],
    }),
    getUserWord: builder.query<IUserWord, Pick<IWord, 'id'>>({
      query: ({ id }) => ({
        url: `users/${getUserId()}/words/${id}`,
      }),
      providesTags: ['USER_WORD'],
    }),
    createUserWord: builder.mutation<IUserWord, IUserWord & { wordId: string }>(
      {
        query: ({ wordId, ...params }) => ({
          url: `users/${getUserId()}/words/${wordId}`,
          method: HttpMethod.POST,
          body: params,
        }),
        invalidatesTags: ['USER_WORD'],
      },
    ),
    updateUserWord: builder.mutation<IUserWord, IUserWord & { wordId: string }>(
      {
        query: ({ wordId, ...params }) => ({
          url: `users/${getUserId()}/words/${wordId}`,
          method: HttpMethod.PUT,
          body: params,
        }),
        invalidatesTags: ['USER_WORD'],
      },
    ),
    deleteUserWord: builder.mutation<IUserWord, { wordId: string }>({
      query: ({ wordId }) => ({
        url: `users/${getUserId()}/words/${wordId}`,
        method: HttpMethod.DELETE,
      }),
      invalidatesTags: ['USER_WORD'],
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
