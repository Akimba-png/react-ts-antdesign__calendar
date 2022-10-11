import { IEvent } from '../../types';

type Users = {
  authors: string[],
  guests: string[],
}

export const getUsersType = (events: IEvent[]) => {
  return events.reduce((acc, event) => {
    acc.authors = acc.authors.includes(event.author) ? acc.authors : [...acc.authors, event.author];
    acc.guests = acc.guests.includes(event.guest) ? acc.guests : [...acc.guests, event.guest];
    return acc;
  }, {authors: [], guests: []} as Users);
};