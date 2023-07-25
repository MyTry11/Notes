import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice";
import randomSlice from "./randomSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    random: randomSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
