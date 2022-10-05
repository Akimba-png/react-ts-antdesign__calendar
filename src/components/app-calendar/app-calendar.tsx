import { useNavigate } from 'react-router-dom';
import { Calendar } from 'antd';
import { Moment } from 'moment';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { showDateToast } from '../toast/toast';
import { getEventsOnDate, getEventsOnMonth } from '../../utils/common';
import { DATE_MONTH_FORMAT } from '../../const';


function AppCalendar(): JSX.Element {
  const navigate = useNavigate();
  const events = useAppSelector(store => store.eventReducer.events);


  const handleChangeDate = (date: Moment) => {
    if (!events.some((event) => event.date === date.format(DATE_MONTH_FORMAT))) {
      showDateToast();
      return;
    }
    navigate(`/date/${date.format(DATE_MONTH_FORMAT).replaceAll('\/', '')}`);
  };

  const dateCellRender = (date: Moment) => {
    const eventsOnDate = getEventsOnDate(events, date);
    return (
      <ul className="events events-list">
        {eventsOnDate.map((event, i) => {
          const keyIndex = event.description + i.toString();
          return (
            <li key={keyIndex}>
                <span className="event-list__user">{event.guest}</span>
                {` - ${event.description}`}
            </li>
          );
        })}
      </ul>
    );
  };
  
  const monthCellRender = (date: Moment) => {
    const eventsOnMonth = getEventsOnMonth(events, date);
    return (
      <div className="events-list__content--by-month">
        {eventsOnMonth.length || ''}
      </div>
    );
  };


  return (
    <Calendar
      onChange={handleChangeDate}
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
      fullscreen={true}
    />
  );
}

export default AppCalendar;
