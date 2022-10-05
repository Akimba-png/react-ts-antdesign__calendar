import { Carousel, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import DateCard from '../../components/date-card/date-card';
import { AppRoute } from '../../const';
import './date-screen.style.css';

const { Title } = Typography;

function DateScreen(): JSX.Element {
  return (
    <Layout className="date-screen section-container">
      <Title className="date-screen__title" level={2}>
        События на день
      </Title>
      <Row justify="center" align="middle">
        <Col className="date-screen__carousel-containter">
          <Carousel className="date-screen__carousel" arrows>
            <DateCard />
            <DateCard />
          </Carousel>
          <Link className="date-screen__calendar-link" to={AppRoute.Main}>К календарю</Link>
        </Col>
      </Row>
    </Layout>
  );
}

export default DateScreen;
