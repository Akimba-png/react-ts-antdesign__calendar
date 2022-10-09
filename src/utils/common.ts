import { Moment } from 'moment';
import { IEvent } from '../types';
import DateConverter from './date-converter';
import { BadgeStatus, EVENTS_SLOT } from '../const';

const SIGN_TO_MONTH = 6;

export const validate = {
  required(text: string) {
    return { required: true, message: text };
  },
};

export const getEventsOnDate = (events: IEvent[], date: Moment) => {
  return events.filter((event) => event.date === DateConverter.yearToDate(date));
};

export const getEventsOnMonth = (events: IEvent[], date: Moment) => {
  return events.filter((event) => {
    return event.date.slice(0, SIGN_TO_MONTH) === DateConverter.yearToDate(date).slice(0, SIGN_TO_MONTH);
  });
};

export const checkEventOnDate = (events: IEvent[], date: Moment) => {
  return events.some((event) => event.date === DateConverter.yearToDate(date));
};

export const generateEventId = () => {
  return JSON.parse(localStorage.getItem(EVENTS_SLOT) || '[]').length++;
};

export const getCalendarBadgeStatus = (event: IEvent) => {
  return event.isImportant ? BadgeStatus.Important: BadgeStatus.Default;
}
export const noop = () => {};
