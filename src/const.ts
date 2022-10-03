export const AUTH_TOKEN = 'Calendar-token';
export const EVENTS_SLOT = 'events';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
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
