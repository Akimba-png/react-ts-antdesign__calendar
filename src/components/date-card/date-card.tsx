import { Card, Divider, Row, Typography } from 'antd';
import { IEvent } from './../../types';
import DateConverter from '../../utils/date-converter';
import CompleteButton from '../complete-button/complete-button';
import './date-card.style.css';

const { Title, Text, Paragraph } = Typography;

type DateCardProps = {
  event: IEvent,
  eventsCount: number,
  eventIndex: number,
};

function DateCard({event, eventsCount, eventIndex}: DateCardProps): JSX.Element {
  const {id, date, author, guest, description, isComplete, isImportant} = event;
  const currentDate = DateConverter.dayToYear(date);

  return (
    <Card className="date-card">
      <Row justify="space-between" align="middle">
        <Title level={3}>{`Событие на ${DateConverter.dayToYearDivider(currentDate)}`}</Title>
        <Text strong>{`Всего: ${eventIndex}/${eventsCount}`}</Text>
      </Row>
      <Divider />
      <Paragraph>
        <Text strong>Автор: </Text>
        {author}
      </Paragraph>
      <Paragraph>
        <Text strong>Участники: </Text>
        {guest}
      </Paragraph>
      {isImportant && 
        <Paragraph type="warning" strong>
        Высокая Важность!
        </Paragraph>
      }
      {isComplete &&
        <Paragraph type="success" strong>
          Выполнено
        </Paragraph>
      }
      <Divider />
      <Paragraph strong>Описание: </Paragraph>
      <Paragraph>{description}</Paragraph>
      <Row className="date-card__footer">
        <Divider />
        <CompleteButton id={id} completeStatus={isComplete} />
      </Row>
    </Card>
  );
}

export default DateCard;
