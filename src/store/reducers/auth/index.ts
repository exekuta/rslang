import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { IAuth, ITokens } from 'src/types/schemas';

interface AuthState {
  auth: IAuth | null;
  isAuthorized: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { auth: null, isAuthorized: false } as AuthState,
  reducers: {
    login: (state, action: PayloadAction<IAuth>) => {
      state.auth = action.payload;
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.auth = null;
      state.isAuthorized = false;
    },
    refreshTokens: (state, action: PayloadAction<ITokens>) => {
      if (!state.auth) return;
      const { refreshToken, token } = action.payload;
      Object.assign(state.auth, { refreshToken, token });
    },
  },
});

export const { login, logout, refreshTokens } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
