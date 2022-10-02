import { useState } from 'react';
import { Button, Calendar, Layout, Typography } from 'antd';
import MainScreenModal from '../../components/main-screen-modal/main-screen-modal';

const { Title } = Typography;

function MainScreen(): JSX.Element {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Layout className="container">
      <Title level={2}>Your events</Title>
      <Calendar fullscreen={true} />
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Add event
      </Button>
      {isModalOpen && <MainScreenModal onModalClose={setModalOpen} />}
    </Layout>
  );
}

export default MainScreen;
