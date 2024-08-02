// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// let counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     counter: 0,
//   },
//   reducers: {
//     increaseCounter: (state, action) => {
//       return state++;
//     },
//     decreseCounter: (state, action) => {
//       return state--;
//     },
//   },
// });

// export const { increaseCounter, decreseCounter } = counterSlice.actions;
// export default counterSlice.reducer;

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increaseCounter: (state, action) => {
      state.counter += action.payload;
    },
    reduceCounter: (state, action) => {
      state.counter -= action.payload;
    },
  },
});
export const { increaseCounter, reduceCounter } = counterSlice.actions;
export default counterSlice.reducer;
