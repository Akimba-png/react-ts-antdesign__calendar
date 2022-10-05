export const AUTH_TOKEN = 'Calendar-token';
export const EVENTS_SLOT = 'events';
export const DATE_MONTH_FORMAT = 'L';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Date = '/date/:id',
  Unknown = '*',
}

export enum ApiRoute {
  Login = '/login',
  Events = '/events/',
  Guests = '/guests/',
}

export enum ValidateMessage {
  UserName = 'Please input your username!',
  Password = 'Please input your password!',
}

export enum StatusCode {
  Success = 200,
  UnAuth = 401,
  UnRegistered = 400,
}

export enum AuthStatus {
  Auth = 'auth',
  NotAuth = 'not-auth',
  Unknown = 'unknown',
}
