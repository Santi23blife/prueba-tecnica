import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Puebla",
};

export const mapSearchSlice = createSlice({
  name: "mapSearch",
  initialState,
  reducers: {
    setMapSearch: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { setMapSearch } = mapSearchSlice.actions;
export default mapSearchSlice.reducer;
