import { configureStore } from '@reduxjs/toolkit';
import { appApi } from 'src/services/api';
import * as reducers from './reducers';

export const store = configureStore({
  reducer: {
    auth: reducers.auth,
    textbook: reducers.textbook,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (gDM) => gDM().concat(appApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
