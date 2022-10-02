import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-reducer/user-reducer';
import { eventReducer } from './event-reducer/event-reducer';

export const rootReducer = combineReducers({
  userReducer,
  eventReducer,
});