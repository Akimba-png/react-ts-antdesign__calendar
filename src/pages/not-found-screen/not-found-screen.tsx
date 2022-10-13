import { Link, Navigate, useLocation } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import { AppRoute } from '../../const';
import './not-found-screen.style.css';

const { Title } = Typography;

function NotFoundScreen(): JSX.Element {

  const path = useLocation().pathname;

  if (path === AppRoute.SignIn) {
    return (<Navigate to={AppRoute.Main} />);
  }
  
  return (
    <Layout className="not-found-screen">
      <div className="not-found-screen__container">
        <Title level={2}>Page not Found</Title>
        <Link className="not-found-screen__link" to={AppRoute.Main}>link to main page</Link>
      </div>
    </Layout>
  );
}

export default NotFoundScreen;
