import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Slider, Typography } from 'antd';
import StatTable from '../../components/stat-table/stat-table';
import { AppRoute } from '../../const';
import './stat-screen.style.css';

const { Title, Text } = Typography;

enum SliderConfig {
  MinValue = 1,
  MaxValue = 9,
  DefaultValue = 8,
}

function StatScreen(): JSX.Element {
  const [sliderValue, setSliderValue] = useState<number>(
    SliderConfig.DefaultValue
  );
  return (
    <Layout className="stat-screen">
      <Title className="stat-screen__title" level={2}>
        Все мероприятия
      </Title>
      <Text strong>{`Событий на страницу: ${sliderValue}`}</Text>
      <Slider
        className="stat-screen__slider"
        min={SliderConfig.MinValue}
        max={SliderConfig.MaxValue}
        value={sliderValue}
        onChange={(value) => setSliderValue(value)}
      />
      <div className="stat-screen__container">
        <StatTable itemsCount={sliderValue}/>
        <Link className="stat-screen__link" to={AppRoute.Main}>
          К календарю
        </Link>
      </div>
    </Layout>
  );
}

export default StatScreen;
