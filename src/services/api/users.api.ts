import {
  IUserLogInData,
  IUserLogInResponse,
  IUserRegisterResponse,
} from 'src/types/api/User.types';
import { HttpMethod } from 'src/types/HttpMethod.type';
import { IUser } from 'src/types/schemas';
import { appApi } from '.';
import { getUserId } from './helpers/getUserId';

const usersApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation<IUserLogInResponse, IUserLogInData>({
      query: (body) => ({
        url: 'signin',
        method: HttpMethod.POST,
        body,
      }),
    }),
    register: builder.mutation<IUserRegisterResponse, IUserLogInData>({
      query: (body) => ({
        url: 'users',
        method: HttpMethod.POST,
        body,
      }),
    }),
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: `users/${getUserId()}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLogInMutation,
  useRegisterMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
} = usersApi;
