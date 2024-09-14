import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import mapSearchReducer from "./mapSearchSlice";
import mapCoordReducer from "./mapCoordSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    mapSearch: mapSearchReducer,
    mapCoord: mapCoordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
