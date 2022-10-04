import { Calendar } from 'antd';
import { Moment } from 'moment';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { getEventsOnDate, getEventsOnMonth } from '../../utils/common';


function AppCalendar(): JSX.Element {
  const events = useAppSelector(store => store.eventReducer.events);

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
    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} fullscreen={true} />
  );
}

export default AppCalendar;