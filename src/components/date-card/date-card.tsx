import { Button, Card, Divider, Row, Typography } from 'antd';
import './date-card.style.css';

const { Title, Text, Paragraph } = Typography;

function DateCard(): JSX.Element {
  return (
    <Card className="date-card">
      <Row justify="space-between" align="middle">
        <Title level={3}>События на 05.10.2022</Title>
        <Text strong>Всего: 2</Text>
      </Row>
      <Divider />
      <Paragraph>
        <Text strong>Автор: </Text>
        Foo
      </Paragraph>
      <Paragraph>
        <Text strong>Участники: </Text>
        Bar
      </Paragraph>
      <Paragraph type="warning" strong>
        Высокая Важность!
      </Paragraph>
      <Paragraph type="success" strong>
        Выполнено
      </Paragraph>
      <Divider />
      <Paragraph strong>Описание: </Paragraph>
      <Paragraph>To do App</Paragraph>
      <Row className="date-card__footer">
        <Divider />
        <Button type="primary">Ометить как выполненное</Button>
      </Row>
    </Card>
  );
}

export default DateCard;
