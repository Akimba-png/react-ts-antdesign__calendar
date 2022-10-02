import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { IAuthenticator } from '../server/authenticator';
import { ApiRoute, StatusCode } from '../const';


export const mockApi = (api: AxiosInstance, delay: number, server: IAuthenticator) => {

  const apiAdapter = new MockAdapter(api, { delayResponse: delay });
    
    apiAdapter.onPost(ApiRoute.Login).reply((config) => {
      const isRegistered = server.checkRegistration(config);
      if (isRegistered) {
        return [
          StatusCode.Success,
          {
            username: JSON.parse(config.data).username,
            token: server.generateToken(config),
          },
        ];
      }
      return [StatusCode.UnRegistered];
    });
  
    apiAdapter.onGet(/events/).reply((config) => {
      const isTokenValid = server.validateToken(config);
      if (isTokenValid) {
        return [
          StatusCode.Success,
          server.dataBase.getEvents(config),
        ];
      }
      return [StatusCode.UnAuth];
    });
  
    apiAdapter.onGet(ApiRoute.Login).reply((config) => {
      const userName = server.checkAuth(config);
      if (userName) {
        return [ StatusCode.Success, userName];
      }
      return [StatusCode.UnAuth];
    });
  
    apiAdapter.onDelete(ApiRoute.Login).reply(StatusCode.Success);
};

