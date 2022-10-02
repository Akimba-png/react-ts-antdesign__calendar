import { useNavigate } from 'react-router-dom';
import { Row, MenuProps, Menu, Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-typed-selector';
import NavMenu from '../nav-menu/nav-menu';

const { Title } = Typography;

function AppHeader(): JSX.Element {

  const isAuth = useAppSelector((state) => state.userReducer.isAuth);

  return (
    <Header>
      <Row className="header-container" justify="space-between">
        <>
          <Title className="header-title">Calendar App</Title>
          {isAuth !== AuthStatus.Unknown && <NavMenu />}
        </>
      </Row>
    </Header>
  );
}

export default AppHeader;
