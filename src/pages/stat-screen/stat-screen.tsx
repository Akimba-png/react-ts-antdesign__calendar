import { Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import StatTable from '../../components/stat-table/stat-table';
import { AppRoute } from '../../const';
import './stat-screen.style.css';

const { Title } = Typography;

function StatScreen(): JSX.Element {
  return (
    <Layout className="stat-screen section-container">
      <Title className="stat-screen__title" level={2}>Все мероприятия</Title>
      <div className="stat-screen__container">
        <StatTable />
        <Link className="stat-screen__link" to={AppRoute.Main}>К календарю</Link>
      </div>
    </Layout>
  );
}

export default StatScreen;