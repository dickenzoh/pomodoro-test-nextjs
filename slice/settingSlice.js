import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: [],
};

export const taskSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addSettings: (state, action) => {
      state.settings.push(action.payload);
    },
  },
});

export const { increment, decrement, addSettings } = taskSlice.actions;

export default taskSlice.reducer;
