import MainScreen from '../pages/main-screen/main-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import { AppRoute } from '../const';
import DateScreen from '../pages/date-screen/date-screen';

interface IRoute {
  path: string;
  element: React.ComponentType;
}

export const privateRoutes: IRoute[] = [
  {
    path: AppRoute.Main,
    element: MainScreen,
  },
  {  path: AppRoute.Date,
    element: DateScreen,
  },
  {
    path: AppRoute.Unknown,
    element: NotFoundScreen,
  },
];

export const pulblicRoutes: IRoute[] = [
  {
    path: AppRoute.SignIn,
    element: SignInScreen,
  },
];
