import { AxiosRequestConfig } from 'axios';
import { IEvent, IUserWithToken, UserName } from '../types';
import { EVENTS_SLOT } from '../const';


export interface IDatabase {
  users: IUserWithToken[];
  getUsers(): UserName[],
  getEvents(requst: AxiosRequestConfig): IEvent[],
  setEvent(request: AxiosRequestConfig): IEvent[],
  updateCompleteStatus(request: AxiosRequestConfig) : IEvent,
}


export class Database implements IDatabase {
  users: IUserWithToken[] = [];

  constructor (users: IUserWithToken[]) {
    this.users = users;
  }

  getUsers() {
    return this.users.map(user => user.username);
  }

  getEvents(request: AxiosRequestConfig): IEvent[] {
    const user = request.url!.replace(/\/events\//, '');
    const events: IEvent[] = this.parseEvents();
    return this.filterEvents(events, user);
  }

  setEvent(request: AxiosRequestConfig): IEvent[] {
    const event: IEvent = JSON.parse(request.data);
    const user = event.author;
    const currentEvents: IEvent[] = this.parseEvents();
    currentEvents.push(event);
    this.updateEvents(currentEvents);
    return this.filterEvents(currentEvents, user);
  }

  updateCompleteStatus(request: AxiosRequestConfig) {
    const id = request.data;
    const currentEvents: IEvent[] = this.parseEvents();
    const eventToUpdate = currentEvents.find((event) => event.id === id)!;
    eventToUpdate.isComplete = !eventToUpdate.isComplete;
    this.updateEvents(currentEvents);
    return eventToUpdate;
  }

  private parseEvents(): IEvent[] {
    return JSON.parse(localStorage.getItem(EVENTS_SLOT) ?? '[]');
  }

  private updateEvents(events: IEvent[]) {
    localStorage.setItem(EVENTS_SLOT, JSON.stringify(events));
  }

  private filterEvents(events: IEvent[], user: string): IEvent[] {
    return events.filter((event) => event.author === user || event.guest === user);
  }
}
