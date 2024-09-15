import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import mapSearchReducer from "./mapSearchSlice";
import mapCoordReducer from "./mapCoordSlice";

const rootReducer = combineReducers({
  events: eventsReducer,
  mapSearch: mapSearchReducer,
  mapCoord: mapCoordReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
