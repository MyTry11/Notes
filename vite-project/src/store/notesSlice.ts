import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

export interface NotesInt {
  id: number;
  title: string;
  description: string;
  status: string;
  text: string;
  expirationDate: string;
  createdAt: string;
  updatedAt: string;
}

const initialState: { value: [] | NotesInt[] } = {
  value: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      console.log(state.value);
      state.value = action.payload;
      console.log(state.value);
    },
    addNote: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { setNotes, addNote } = notesSlice.actions;

export default notesSlice.reducer;
