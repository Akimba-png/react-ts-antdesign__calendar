import moment from 'moment';
import { IEvent } from '../types';
import { mockEvents } from '../mock';
import { EVENTS_SLOT, DateFormat, INDEX_INCREMENT, SIGN_TO_MONTH } from '../const';


function appInit() {
  const currentDate = moment().format(DateFormat.YearMonth);
  
  const existEvents = JSON.parse(localStorage.getItem(EVENTS_SLOT) || '[]') as IEvent[];
  const dates = existEvents.map(event => event.date.slice(0, SIGN_TO_MONTH));
  
  if (!dates.includes(currentDate)) {
    const lastEventId =  existEvents.length ? existEvents.sort((a, b) => b.id - a.id)[0].id : 0;
    mockEvents.forEach((event, i) => {
      event.id = lastEventId + i + INDEX_INCREMENT;
      event.date = currentDate + event.date;
    });
    localStorage.setItem(EVENTS_SLOT, JSON.stringify(mockEvents));
  }
}

export { appInit };