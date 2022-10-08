import { AxiosError } from 'axios';
import { ThunkCreatorResult } from './store';
import { ILoginResponse, IUser, IEvent, IUserName, UserName } from '../types';
import { setEvents, setGuests } from './reducers/event-reducer/event-reducer';
import { setAuth, setUser } from './reducers/user-reducer/user-reducer';
import { setToken } from '../services/token';
import { showErrorConnectionToast, showUnregisteredToast } from '../components/toast/toast';
import { noop } from '../utils/common';
import { ApiRoute, AuthStatus, StatusCode } from '../const';

const NEXT_ELEMENT_ID = 1;

const loadEvents = (username: string, onFinish?: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .get<IEvent[]>(ApiRoute.Events + username)
    .then((response) => dispatch(setEvents(response.data)))
    .then(() => {
      dispatch(setAuth(AuthStatus.Auth));
      if (onFinish) {
        onFinish();
      }
    })
    .catch(() => {
      if (onFinish) {
        onFinish();
      }
      showErrorConnectionToast();
    });
};

export const postEvent = (event: IEvent, onFinish: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .post<IEvent[]>(ApiRoute.Events, event)
    .then((response) => {
      dispatch(setEvents(response.data));
      onFinish();
    })
    .catch(() => {
      onFinish();
      showErrorConnectionToast();
    });
};

export const toggleCompleteStatus = (id: number, onFinish: () => void): ThunkCreatorResult => (dispatch, state, api) => {
  api
    .patch<IEvent>(ApiRoute.Events, id)
    .then((response) => {
      const events = state().eventReducer.events;
      const updatedEventIndex = events.findIndex((event) => event.id === id);
      const updatedEvents = [...events.slice(0, updatedEventIndex), response.data, ...events.slice(updatedEventIndex + NEXT_ELEMENT_ID)];
      dispatch(setEvents(updatedEvents));
      onFinish();
    })
    .catch(() => {
      onFinish();
      showErrorConnectionToast();
    });
};

export const loadGuests = (onFinish: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .get<UserName[]>(ApiRoute.Guests)
    .then((response) => {
      dispatch(setGuests(response.data));
      onFinish();
    })
    .catch(() => {
      onFinish();
      showErrorConnectionToast();
    });
};

export const login = (userData: IUser, onFinish: () => void): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .post<ILoginResponse>(ApiRoute.Login, userData)
    .then((response) => {
      setToken(response.data.token);
      dispatch(setUser(response.data.username));
      return response.data.username;
    })
    .then((userName) => dispatch(loadEvents(userName, onFinish)))
    .catch((error: AxiosError) => {
      if (error.response?.status === StatusCode.UnRegistered) {
        showUnregisteredToast();
        onFinish();
        return;
      }
      showErrorConnectionToast();
      onFinish();
    });
};

export const checkAuth = (): ThunkCreatorResult => (dispatch, _state, api) => {
  api
    .get<IUserName>(ApiRoute.Login)
    .then((response) => {
      dispatch(setUser(response.data.username));
      return response.data.username;
    })
    .then((data) => dispatch(loadEvents(data)))
    .catch((error: AxiosError) => {
      if (error.response?.status !== StatusCode.UnAuth) {
        showErrorConnectionToast();
        return;
      }
      noop();
    });
};

export const logout = (): ThunkCreatorResult => (dispatch, _store, api) => {
  api
    .delete(ApiRoute.Login)
    .then(() => {
      setToken('');
      dispatch(setAuth(AuthStatus.NotAuth));
    })
    .catch(() => showErrorConnectionToast());
};