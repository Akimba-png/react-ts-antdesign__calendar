import { useNavigate } from 'react-router-dom';
import { Badge, Calendar } from 'antd';
import { Moment } from 'moment';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { showDateToast } from '../toast/toast';
import DateConverter from '../../utils/date-converter';
import { checkEventOnDate, getCalendarBadgeStatus, getEventsOnDate, getEventsOnMonth } from '../../utils/common';


function AppCalendar(): JSX.Element {
  const navigate = useNavigate();
  const events = useAppSelector(store => store.eventReducer.events);


  const handleChangeDate = (date: Moment) => {
    const isEventOnDate = checkEventOnDate(events, date);
    if (!isEventOnDate) {
      showDateToast();
      return;
    }
    navigate(`/date/${DateConverter.dayToYear(date)}`);
  };

  const dateCellRender = (date: Moment) => {
    const eventsOnDate = getEventsOnDate(events, date);
    return (
      <ul className="events events-list">
        {eventsOnDate.map((event, i) => {
          const keyIndex = event.description + i.toString();
          return (
            <li key={keyIndex}>
              <Badge status={getCalendarBadgeStatus(event)} text={
                <>
                  <span className="event-list__user">{event.guest} - </span>
                  <span className={
                    event.isComplete ? 
                    'events-list__description events-list__description--complete'
                    : ''
                  }>
                    {event.description}
                  </span>
                </>
              }>
              </Badge>
            </li>
          );
        })}
      </ul>
    );
  };
  
  const monthCellRender = (date: Moment) => {
    const eventsOnMonth = getEventsOnMonth(events, date);
    return (
      <div className="events-list__content events-list__content--by-month">
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
