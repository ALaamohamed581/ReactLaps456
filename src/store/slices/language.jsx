// import { createSlice } from "@reduxjs/toolkit";

// const languageSlice = createSlice({
//   name: "language",
//   initialState: { language: "en" },
//   reducers: {
//     changeLanguage: (state, action) => {
//       state.language = action.payload;
//     },
//   },
// });
// ///and then waht
// //we export the  {action} adn rerudcers
// export const { changeLanguage } = languageSlice.actions;
// export default languageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const languageSlice = createSlice({
  name: "language",
  initialState: { langauge: "en" },
  reducers: {
    changelanguage: (state, action) => {
      state.langauge = action.payload;
    },
  },
});

export const { changelanguage } = languageSlice.actions;
export default languageSlice.reducer;
