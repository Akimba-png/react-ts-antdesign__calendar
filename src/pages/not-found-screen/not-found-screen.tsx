import { Link, Navigate, useLocation } from 'react-router-dom';
import { Layout, Row } from 'antd';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {

  const path = useLocation().pathname;

  if (path === AppRoute.SignIn) {
    return (<Navigate to={AppRoute.Main} />);
  }
  
  return (
    <Layout className="container">
      <h1>Page not Found</h1>
      <Link to={AppRoute.Main}>link to main page</Link>
    </Layout>
  );
}

export default NotFoundScreen;
