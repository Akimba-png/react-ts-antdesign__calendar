import MainScreen from '../pages/main-screen/main-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import DateScreen from '../pages/date-screen/date-screen';
import StatScreen from '../pages/stat-screen/stat-screen';
import { AppRoute } from '../const';

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
    path: AppRoute.Stat,
    element: StatScreen,
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
