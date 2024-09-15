import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [19.33, 90],
};

export const mapCoordSlice = createSlice({
  name: "mapCoords",
  initialState,
  reducers: {
    setCoords: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { setCoords } = mapCoordSlice.actions;
export default mapCoordSlice.reducer;
