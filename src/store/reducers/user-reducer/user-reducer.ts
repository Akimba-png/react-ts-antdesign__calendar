import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
}

const slice = createSlice({
  name: 'user-reducer',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const userReducer = slice.reducer;
export const { setAuth } = slice.actions;