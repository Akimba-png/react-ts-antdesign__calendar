export type UserName = string;

export interface IUserName {
  username: UserName;
}

export interface IUser {
  username: UserName,
  password: string,
}

export interface IUserWithToken extends IUser {
  token: string,
}

export interface ILoginResponse {
  username: UserName,
  token: string,
}

export interface IEvent {
  id: number,
  author: UserName,
  guest: UserName,
  date: string,
  description: string,
  isImportant: boolean,
  isComplete: boolean,
}