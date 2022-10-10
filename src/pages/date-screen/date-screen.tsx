import { useParams, Link } from 'react-router-dom';
import { Carousel, Col, Layout, Row, Typography } from 'antd';
import { useAppSelector } from '../../hooks/use-typed-selector';
import DateCard from '../../components/date-card/date-card';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import DateConverter from '../../utils/date-converter';
import { AppRoute, INDEX_INCREMENT } from '../../const';
import './date-screen.style.css';

const { Title } = Typography;

function DateScreen(): JSX.Element {
  const currentDate = useParams().id!;
  const events = useAppSelector(state => state.eventReducer.events);
  const eventsOnCurrentDate = events.filter(event => event.date === DateConverter.yearToDate(currentDate));
  const eventsCount = eventsOnCurrentDate.length;

  if (!eventsCount) {
    return (<NotFoundScreen />);
  }

  return (
    <Layout className="date-screen section-container">
      <Title className="date-screen__title" level={2}>
        События на день
      </Title>
      <Row justify="center" align="middle">
        <Col className="date-screen__carousel-containter">
          <Carousel className="date-screen__carousel" arrows>
            {
              eventsOnCurrentDate.map((event, i) => {
                const keyIndex = event.id + i;
                return (
                  <DateCard 
                    event={event}
                    eventsCount={eventsCount}
                    eventIndex={i + INDEX_INCREMENT}
                    key={keyIndex}
                  />
                );
              })
            }
          </Carousel>
          <Row className="date-screen__link-block" justify='space-between'>
            <Link to={AppRoute.Main}>К календарю</Link>
            <Link to={AppRoute.Stat}>Все мероприятия</Link>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}

export default DateScreen;
