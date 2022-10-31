import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskSlice";
import settingsReducer from "./slice/settingSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    settings: settingsReducer,
  },
});
