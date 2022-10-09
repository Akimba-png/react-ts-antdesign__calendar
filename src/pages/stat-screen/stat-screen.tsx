import { Layout, Typography } from 'antd';
import './stat-screen.style.css';

const { Title } = Typography;

function StatScreen(): JSX.Element {
  return (
    <Layout className="stat-screen section-container">
      <Title className="stat-screen__title" level={2}>Все мероприятия</Title>
    </Layout>
  );
}

export default StatScreen;