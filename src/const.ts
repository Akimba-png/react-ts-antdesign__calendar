export const AUTH_TOKEN = 'Calendar-token';
export const EVENTS_SLOT = 'events';
export const SIGN_TO_MONTH = 6;
export const INDEX_INCREMENT = 1;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Date = '/date/:id',
  Stat = '/stat/',
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

export enum BadgeStatus {
  Important = 'error',
  Default = 'default',
}

export enum DateFormat {
  DayMonthYear = 'DDMMYYYY',
  YearMonthDay = 'YYYYMMDD',
  YearMonth = 'YYYYMM',
}

export enum ButtonStyle {
  Primary = 'primary',
  Link = 'link',
}
