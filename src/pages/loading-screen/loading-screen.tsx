import { Layout, Typography, Spin } from 'antd';
import './loading-screen.style.css';

function LoadingScreen(): JSX.Element {
  return (
    <Layout className="container loading-screen">
      <Typography.Title className="loading-screen__title" level={2}>Loading...</Typography.Title>
      <Typography.Text className="loading-screen__text">please wait</Typography.Text>
      <Spin size="large"/>
    </Layout>
  );
}

export default LoadingScreen;
