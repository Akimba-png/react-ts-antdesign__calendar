import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Layout from 'antd/lib/layout/layout';
import LoginForm from '../../components/login-form/login-form';
import './sign-in-screen.style.css';


function SignInScreen(): JSX.Element {

  return (
    <Layout className="login-container" >
        <Title className='login-title'>Login Page</Title>
      <Row
        justify="center"
      >
      <LoginForm />
      </Row>
    </Layout>
  );
}

export default SignInScreen;
