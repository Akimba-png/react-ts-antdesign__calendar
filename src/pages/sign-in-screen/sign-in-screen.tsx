import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Layout from 'antd/lib/layout/layout';
import LoginForm from '../../components/login-form/login-form';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { AuthStatus } from '../../const';


function SignInScreen(): JSX.Element {

  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  
  if (isAuth === AuthStatus.Unknown) {
    return (<h1>Loading</h1>);
  }

  return (
    <Layout className="container" >
        <Title className='login-title'>Login Page</Title>
      <Row
        className="login-container"
        justify="center"
        align="middle"
      >
      <LoginForm />
      </Row>
    </Layout>
  );
}

export default SignInScreen;
