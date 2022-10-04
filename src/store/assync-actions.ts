import { ThunkCreatorResult } from './store';
import { ILoginResponse, IUser, IEvent, IUserName, UserName } from '../types';
import { setEvents, setGuests } from './reducers/event-reducer/event-reducer';
import { setAuth, setUser } from './reducers/user-reducer/user-reducer';
import { setToken } from '../services/token';
import { ApiRoute, AuthStatus } from '../const';


const loadEvents = (username: string, onSuccess?: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .get<IEvent[]>(ApiRoute.Events + username)
    .then((response) => dispatch(setEvents(response.data)))
    .then(() => {
      dispatch(setAuth(AuthStatus.Auth));
      if (onSuccess) {
        onSuccess();
      }
    });
};

export const postEvent = (event: IEvent, onSuccess: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .post<IEvent[]>(ApiRoute.Events, event)
    .then((response) => {
      dispatch(setEvents(response.data));
      onSuccess();
    });
};

export const loadGuests = (onSuccess: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .get<UserName[]>(ApiRoute.Guests)
    .then((response) => {
      dispatch(setGuests(response.data));
      onSuccess();
    });
};

export const login = (userData: IUser, onSuccess: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .post<ILoginResponse>(ApiRoute.Login, userData)
    .then((response) => {
      setToken(response.data.token);
      dispatch(setUser(response.data.username));
      return response.data.username;
    })
    .then((userName) => dispatch(loadEvents(userName, onSuccess)));
};

export const checkAuth = (): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .get<IUserName>(ApiRoute.Login)
    .then((response) => {
      dispatch(setUser(response.data.username));
      return response.data.username;
    })
    .then((data) => dispatch(loadEvents(data)))
    .catch(() => {});
};

export const logout = (): ThunkCreatorResult => (dispatch, _store, api) => {
  api
    .delete(ApiRoute.Login)
    .then(() => {
      setToken('');
      dispatch(setAuth(AuthStatus.NotAuth));
    });
};