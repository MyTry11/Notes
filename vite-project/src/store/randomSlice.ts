import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: number } = {
  value: 1,
};
// const initialState: number = 1;

export const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    someReducer: (state, action) => {
      console.log(state.value);
      console.log(action.payload);
      state.value = state.value + action.payload;
    },
  },
});

export const { someReducer } = randomSlice.actions;

export default randomSlice.reducer;
