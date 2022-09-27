import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, pulblicRoutes } from '../../router/router';
import { AppRoute } from '../../const';

function AppRouter(): JSX.Element {
  const isAuth = true;
  return isAuth ? (
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
