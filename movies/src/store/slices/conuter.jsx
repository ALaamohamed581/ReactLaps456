import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increaseCounter: (state, action) => {
      return state++;
    },
    decreseCounter: (state, action) => {
      return state--;
    },
  },
});

export const { increaseCounter, decreseCounter } = counterSlice.actions;
export default counterSlice.reducer;
