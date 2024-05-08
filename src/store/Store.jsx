import { configureStore } from "@reduxjs/toolkit";
import conuterReducer from "./slices/conuter";
import languageReducer from "./slices/language";
import favoriteReducer from "./slices/favourite";
import prodcuctsReducer from "./slices/products";
const store = configureStore({
  reducer: {
    language: languageReducer,
    counter: conuterReducer,
    favoures: favoriteReducer,
    products: prodcuctsReducer,
  },
});
export default store;
