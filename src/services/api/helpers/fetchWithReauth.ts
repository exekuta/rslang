import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query';
import { SERVER_URI } from 'src/constants/api';
import { RootState } from 'src/store';
import { logout, refreshTokens } from 'src/store/reducers/auth';
import { ITokens } from 'src/types/schemas';

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URI,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.auth?.token;

    if (token && !headers.has('authorization')) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

interface IError {
  originalStatus: number;
}

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if ((result.error as IError)?.originalStatus === 401) {
    const { auth, isAuthorized } = (api.getState() as RootState).auth;
    if (isAuthorized && auth) {
      const { userId, refreshToken } = auth;

      const refreshResult = (await baseQuery(
        {
          url: `users/${userId}/tokens`,
          headers: {
            authorization: `Bearer ${refreshToken}`,
          },
        },
        api,
        extraOptions,
      )) as { data: ITokens };
      if (refreshResult.data) {
        api.dispatch(refreshTokens(refreshResult.data));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
  }

  return result;
};
