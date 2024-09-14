import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { listCardsMUI } from "../stories/ListCardsMUI";

const cardsExample = [
  {
    title: "Quarterly Review",
    content:
      "Review quarterly financials - 10/01/2024 10:00 AM - Conference Room A",
  },
  {
    title: "Product Launch",
    content: "Launch new product line - 10/05/2024 1:00 PM - Main Hall",
  },
  {
    title: "Client Presentation",
    content:
      "Present project proposal to client - 10/07/2024 2:30 PM - Client's Office",
  },
  {
    title: "Team Meeting",
    content: "Discuss project progress - 09/13/2024 9:00 AM - Home",
  },
  {
    title: "Gym Session",
    content: "Morning workout - 09/15/2024 7:00 AM - Local Gym",
  },
  {
    title: "Conference Call",
    content: "Weekly team sync-up - 09/16/2024 3:00 PM - Zoom",
  },
  {
    title: "Lunch with Sarah",
    content: "Catch up over lunch - 09/17/2024 12:30 PM - Café Downtown",
  },
  {
    title: "Dinner with Friends",
    content: "Social dinner - 09/18/2024 7:00 PM - Italian Bistro",
  },
  {
    title: "Workout Session",
    content: "Evening run - 09/19/2024 6:00 AM - City Park",
  },
  {
    title: "Doctor's Appointment",
    content: "Routine check-up - 09/20/2024 8:00 AM - Health Clinic",
  },
  {
    title: "Team Meeting",
    content: "Project kickoff meeting - 09/13/2024 9:00 AM - Home",
  },
];

interface eventsState {
  value: listCardsMUI[];
}

const initialState: eventsState = {
  value: cardsExample,
};

interface modifyEventPayload {
  index: number;
  event: listCardsMUI;
}

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<listCardsMUI>) => {
      state.value.unshift(action.payload);
    },
    removeEvent: (state, action) => {
      state.value = state.value.filter((event) => event !== action.payload);
    },
    modifyEvent: (state, action: PayloadAction<modifyEventPayload>) => {
      const { index, event } = action.payload;
      state.value[index] = event;
    },
  },
});

export const { addEvent, removeEvent, modifyEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
