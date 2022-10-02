import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Layout from 'antd/lib/layout/layout';
import LoginForm from '../../components/login-form/login-form';


function SignInScreen(): JSX.Element {

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
