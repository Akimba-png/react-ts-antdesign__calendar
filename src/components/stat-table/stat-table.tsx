import { Link } from 'react-router-dom';
import { Table, Tag } from 'antd';
import { IEvent, } from '../../types';
import { useAppSelector } from '../../hooks/use-typed-selector';
import CompleteButton from '../complete-button/complete-button';
import DateConverter from '../../utils/date-converter';
import { ButtonStyle } from '../../const';

enum TagText {
  Complete = 'ВЫПОЛНЕНО',
  Important = 'ВАЖНО',
}


function StatTable(): JSX.Element {
  const events: IEvent[] = useAppSelector(state => state.eventReducer.events);
  const dataSource = events.map((event) => ({...event, key: event.id}));
  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => {
        const formatedDate = DateConverter.dayToYear(date);
        return (
        <Link to={`/date/${formatedDate}`}>
          {DateConverter.dayToYearDivider(formatedDate)}
        </Link> 
        );
      },
    },
    {
      title: 'Автор',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Участники',
      dataIndex: 'guest',
      key: 'guest',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Статус',
      dataIndex: 'isComplete',
      key: 'complete',
      render: (status: boolean) => status ? <Tag color='green'>{TagText.Complete}</Tag> : '',
    },
    {
      title: 'Важность',
      dataIndex: 'isImportant',
      key: 'important',
      render: (status: boolean) => status ? <Tag color='red'>{TagText.Important}</Tag> : '',
    },
    
    {
      title: 'Изменить статус',
      dataIndex: 'isComplete',
      key: 'complete-change',
      render: (status: boolean, event: IEvent) => (
        <CompleteButton
          id={event.id}
          completeStatus={status}
          style={ButtonStyle.Link}
        />
      ),
    },

  ];

  return (
      <Table
        dataSource={dataSource}
        columns={columns}
      />
  );
}

export default StatTable;
