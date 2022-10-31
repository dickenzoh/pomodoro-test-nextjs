import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { increment, decrement, addTask } = taskSlice.actions;

export default taskSlice.reducer;
