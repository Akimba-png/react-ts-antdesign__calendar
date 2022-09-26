import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-reducer/user-reducer';

export const rootReducer = combineReducers({
  userReducer,
});