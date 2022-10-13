import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';
import { AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { logout } from '../../store/assync-actions';
import { AuthStatus, AppRoute } from '../../const';
import './nav-menu.style.css';


const notAuthItems: MenuProps['items'] = [
  {
    label: 'Login',
    key: 'login',
  },
];

const authItems: MenuProps['items'] = [
  {
    label: 'Logout',
    key: 'logout',
  },
];

function NavMenu(): JSX.Element {


  const navigate = useNavigate();
  const path = useLocation().pathname;
  const dispatch = useDispatch() as AppDispatch;
  const userName = useAppSelector(state => state.userReducer.userName)

  const handleLoginClick = () => {
    navigate(AppRoute.SignIn);
  };
  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  if (isAuth === AuthStatus.Auth) {
    return (
      <>
        <div
          className="user-info"
        >
          {userName}
        </div>
        <Menu
          onClick={handleLogoutClick}
          mode="horizontal"
          theme="dark"
          items={authItems}
          selectable={false}
        />
      </>
    );
  }
  return (
    <>
      {path !== AppRoute.SignIn && (
        <Menu
          className="header-menu"
          onClick={handleLoginClick}
          mode="horizontal"
          theme="dark"
          items={notAuthItems}
          selectable={false}
        />
      )}
    </>
  );
}

export default NavMenu;
