import { useLocation, Link } from 'react-router-dom';
import { Row, Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useAppSelector } from '../../hooks/use-typed-selector';
import NavMenu from '../nav-menu/nav-menu';
import { AppRoute, AuthStatus } from '../../const';
import './app-header.style.css';

const { Title } = Typography;

function AppHeader(): JSX.Element {

  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const route = useLocation().pathname;

  const renderLogo = (): JSX.Element => {
    if (route !== AppRoute.Main && route !== AppRoute.SignIn) {
      return (
        <Link to={AppRoute.Main}>
          <Title className="header-title">Calendar App</Title>
        </Link>
      );
    }
    return (
      <Title className="header-title">Calendar App</Title>
    );
  };

  return (
    <Header>
      <Row className="header-container" justify="space-between">
        <>
          {renderLogo()}
          {isAuth !== AuthStatus.Unknown && <NavMenu />}
        </>
      </Row>
    </Header>
  );
}

export default AppHeader;
