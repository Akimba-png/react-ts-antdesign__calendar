import { Moment } from 'moment';
import { IEvent } from '../types';
import { DATE_MONTH_FORMAT } from '../const';

const SIGN_TO_MONTH = 3;

export const validate = {
  required(text: string) {
    return { required: true, message: text };
  },
};

export const getEventsOnDate = (events: IEvent[], date: Moment) => {
  return events.filter((event) => event.date === date.format(DATE_MONTH_FORMAT));
};

export const getEventsOnMonth = (events: IEvent[], date: Moment) => {
  console.log(events)
  return events.filter((event) => {
    return event.date.slice(0, SIGN_TO_MONTH) === date.format(DATE_MONTH_FORMAT).slice(0,SIGN_TO_MONTH);
  });
};

export const noop = () => {};
