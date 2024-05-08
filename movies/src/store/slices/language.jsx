import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { language: "en" },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
///and then waht
//we export the  {action} adn rerudcers
export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
