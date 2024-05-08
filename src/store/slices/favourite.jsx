import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
  name: "favouriteMoviee",
  initialState: { fav: [] },
  reducers: {
    addToFavourite: (state, action) => {
      state.fav.push(action.payload);
    },
    removefromfavouris: (state, action) => {
      state.fav.splice(
        state.fav.findIndex((el) => el.id == action.payload),
        1
      );
    },
  },
});

export const { addToFavourite, removefromfavouris } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
