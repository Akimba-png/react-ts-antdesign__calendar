import { Layout } from 'antd';
import  AppRouter from '../app-router/app-router';
import AppHeader from '../app-header/app-header';
import 'antd/dist/antd.css';

const { Content } = Layout;

function App(): JSX.Element {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
}

export default App;
