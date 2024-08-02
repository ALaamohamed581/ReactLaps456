import favoriteReducer from "./slices/favourite";
import prodcuctsReducer from "./slices/products";
// const store = configureStore({
//   reducer: {
//     language: languageReducer,
//     counter: conuterReducer,
//     favoures: favoriteReducer,
//     products: prodcuctsReducer,
//   },
// });
// export default store;

import { configureStore } from "@reduxjs/toolkit";

import languageReducer from "./slices/language";
import counterReducer from "./slices/conuter";
const stroe = configureStore({
  reducer: {
    language: languageReducer,
    counter: counterReducer,
    favoures: favoriteReducer,
    products: prodcuctsReducer,
  },
});

export default stroe;
