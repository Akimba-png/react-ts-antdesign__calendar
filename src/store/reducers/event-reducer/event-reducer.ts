import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent } from '../../../types';

const initialState = {
  events: [] as IEvent[],
};

const slice = createSlice({
  name: 'event-reducer',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<IEvent[]>) {
      state.events = action.payload;
    },
  },
});

export const eventReducer = slice.reducer;
export const { setEvents } = slice.actions;
export type EventAction = ReturnType<typeof setEvents>;
