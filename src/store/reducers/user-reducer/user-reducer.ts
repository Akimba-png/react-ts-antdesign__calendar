import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../../const';

const initialState = {
  isAuth: AuthStatus.Unknown,
  userName: '',
};

const slice = createSlice({
  name: 'user-reducer',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthStatus>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const userReducer = slice.reducer;
export const { setAuth, setUser } = slice.actions;
export type UserAction =
  | ReturnType<typeof setAuth>
  | ReturnType<typeof setUser>
