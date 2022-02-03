import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './helpers/fetchWithReauth';

export const appApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
