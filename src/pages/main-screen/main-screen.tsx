import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Layout, Row, Typography } from 'antd';
import { AppDispatch } from '../../store/store';
import { loadGuests } from '../../store/assync-actions';
import MainScreenModal from '../../components/main-screen-modal/main-screen-modal';
import AppCalendar from '../../components/app-calendar/app-calendar';
import { AppRoute } from '../../const';

const { Title } = Typography;

function MainScreen(): JSX.Element {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isGuestsLoading, setGuestsLoading] = useState<boolean>(false);
  const dispatch = useDispatch() as AppDispatch;

  const handleButtonClick = () => {
    setGuestsLoading(true);
    dispatch(loadGuests(() => {
      setModalOpen(true);
      setGuestsLoading(false);
    }));
  };

  return (
    <Layout className="main-container">
      <Row justify='space-between' align='middle'>
        <Title className="main-container__title" level={2}>Your events</Title>
        <Link className="main-container__link" to={AppRoute.Stat}>Все мероприятия</Link>
      </Row>
      <AppCalendar />
      <Button type="primary" onClick={handleButtonClick} loading={isGuestsLoading} >
        Add event
      </Button>
      {isModalOpen && <MainScreenModal onModalClose={setModalOpen} />}
    </Layout>
  );
}

export default MainScreen;
