import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent, UserName } from '../../../types';

const initialState = {
  events: [] as IEvent[],
  guests: [] as UserName[],
};

const slice = createSlice({
  name: 'event-reducer',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<IEvent[]>) {
      state.events = action.payload;
    },
    setGuests(state, action: PayloadAction<UserName[]>) {
      state.guests = action.payload;
    },
  },
});

export const eventReducer = slice.reducer;
export const { setEvents, setGuests } = slice.actions;
export type EventAction = 
  | ReturnType<typeof setEvents>
  | ReturnType<typeof setGuests>;
