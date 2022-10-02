import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { privateRoutes, pulblicRoutes } from '../../router/router';
import { AppRoute, AuthStatus } from '../../const';


function AppRouter(): JSX.Element {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  return isAuth === AuthStatus.Auth? (
    <Routes>
      {privateRoutes.map((route, i) => {
        const keyIndex = route.path + i.toString();
        return (
          <Route path={route.path} element={<route.element />} key={keyIndex} />
        );
      })}
    </Routes>
  ) : (
    <Routes>
      {pulblicRoutes.map((route, i) => {
        const keyIndex = route + i.toString();
        return (
          <Route path={route.path} element={<route.element />} key={keyIndex} />
        );
      })}
      <Route
        path={AppRoute.Unknown}
        element={<Navigate to={AppRoute.SignIn} />}
      />
    </Routes>
  );
}

export default AppRouter;
