import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAuthenticator } from '../server/authenticator';
import { mockApi } from './mockApi';
import { getToken } from './token';
import { StatusCode, AUTH_TOKEN } from '../const';

const BASE_URL = 'https://';
const TIMEOUT_DELAY = 5000;
const DELAY_RESPONSE = 1000;


const createApi = (onUnAuth: () => void, server: IAuthenticator) => {
  
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_DELAY,
    headers: {
      [AUTH_TOKEN]: getToken(),
    },
  });

  const onSend = (config: AxiosRequestConfig) => {
    if ( !config.headers![AUTH_TOKEN] ) {
      config.headers![AUTH_TOKEN] = getToken();
    }
    return config;
  };

  const onSuccess = (response: AxiosResponse) => response;
  const onFail = (error: AxiosError) => {
    if (error.response?.status === StatusCode.UnAuth) {
      onUnAuth();
    }
    return Promise.reject(error);
  };

  api.interceptors.request.use(onSend);
  api.interceptors.response.use(onSuccess, onFail);

  mockApi(api, DELAY_RESPONSE, server);

  return api;
}; 

export { createApi };