import { configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { rootReducer } from './reducers/root-reducer';
import { setAuth, UserAction } from './reducers/user-reducer/user-reducer';
import { EventAction } from './reducers/event-reducer/event-reducer';
import { createApi } from '../services/api';
import { Database } from '../server/database';
import { Authenticator } from '../server/authenticator';
import { mockUsers } from '../mock';
import { AuthStatus } from '../const';


const server = new Authenticator(new Database(mockUsers));
const api = createApi(() => store.dispatch(setAuth(AuthStatus.NotAuth)), server);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

type Action = UserAction | EventAction

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkCreatorResult = ThunkAction<void, RootState, AxiosInstance, Action>;
