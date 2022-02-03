import { store } from 'src/store';

export const getUserId = () => store.getState().auth.auth?.userId;
