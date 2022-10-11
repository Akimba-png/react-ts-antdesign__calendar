import { Link } from 'react-router-dom';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { IEvent } from '../../types';
import { useAppSelector } from '../../hooks/use-typed-selector';
import CompleteButton from '../complete-button/complete-button';
import { getUsersType } from './stat-table.utils';
import DateConverter from '../../utils/date-converter';
import { ButtonStyle } from '../../const';

enum TagText {
  Complete = 'ВЫПОЛНЕНО',
  Important = 'ВАЖНО',
}

type StatTableProps = {
  itemsCount: number,
}


function StatTable({itemsCount}: StatTableProps): JSX.Element {
  const events: IEvent[] = useAppSelector(state => state.eventReducer.events);
  const userType = getUsersType(events);
  const dataSource = events.map((event) => ({...event, key: event.id}));

  const columns: ColumnsType<IEvent> = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => (Number(a.date) - Number(b.date)),
      sortDirections: ['descend'],
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
      filters: [
        ...userType.authors.map((author) => {
          return {
            text: author,
            value: author,
          };
        })
      ],
      onFilter: ((value, event) => {
        return event.guest === value;
      }),
    },
    {
      title: 'Участники',
      dataIndex: 'guest',
      key: 'guest',
      filters: [
        ...userType.guests.map((guest) => {
          return {
            text: guest,
            value: guest,
          };
        })
      ],
      onFilter: ((value, event) => {
        return event.guest === value;
      }),
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
      render: (status: boolean) => {
        return status ? <Tag color='green'>{TagText.Complete}</Tag> : '';
      },
      filters: [
        {
          text: 'Выполнено',
          value: true,
        },
        {
          text: 'Не выполнено',
          value: false,
        },
      ],
      onFilter: ((value, event) => {
        return event.isComplete === value;
      }),
    },
    {
      title: 'Важность',
      dataIndex: 'isImportant',
      key: 'important',
      render: (status: boolean) => {
        return status ? <Tag color='red'>{TagText.Important}</Tag> : '';
      },
      filters: [
        {
          text: 'Важно',
          value: true,
        },
        {
          text: 'Менее важно',
          value: false,
        },
      ],
      onFilter: ((value, event) => {
        return event.isImportant === value;
      }),
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
        pagination={{pageSize: itemsCount}}
      />
  );
}

export default StatTable;
