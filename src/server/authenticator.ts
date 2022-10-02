import { AxiosRequestConfig } from 'axios';
import { IDatabase } from './database';
import { IUserName, IUser } from './../types'; 
import { AUTH_TOKEN } from './../const';

export interface IAuthenticator {
  dataBase: IDatabase;
  checkAuth(request: AxiosRequestConfig): IUserName | false,
  checkRegistration(request: AxiosRequestConfig): boolean,
  generateToken(request: AxiosRequestConfig): string,
  validateToken(request: AxiosRequestConfig): boolean,
}

export class Authenticator implements IAuthenticator {

  dataBase: IDatabase;
  
  constructor (dataBase: IDatabase) {
    this.dataBase = dataBase;
  }

  checkAuth(request: AxiosRequestConfig) {
    if (request.headers && request.headers[AUTH_TOKEN]) {
      const token = request.headers[AUTH_TOKEN];
      const user = this.dataBase.users.find(user => user.token === token);
      return {username: user!.username};
    }
    return false;
  }

  checkRegistration(request: AxiosRequestConfig) {
    const data: IUser = JSON.parse(request.data);
    return this.dataBase.users.some((user) => {
      return (
        user.username === data.username &&
        user.password === data.password
      );
    });
  }

  generateToken(request: AxiosRequestConfig) {
    const data: IUser = JSON.parse(request.data);
    return this.dataBase.users.find((user) => user.username === data.username)!.token;
  }

  validateToken(request: AxiosRequestConfig) {
    const token = request.headers![AUTH_TOKEN];
    return this.dataBase.users.some(users => users.token === token);
  }
}