import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../../axiosConfig/axiosConfig";
import axios from "axios";
export const productsAction = createAsyncThunk("products/getAll", async () => {
  let {
    data: { results },
  } = await axiosConfig.get("/popular");
  console.log(results);
  return results;
});
export const navigateForwared = createAsyncThunk(
  "products/getAll",
  async (pagenumber) => {
    let api = axiosConfig
      .getUri()

      .concat(`&page=${pagenumber}`);
    console.log(api);
    let {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=373deafea50851fa286eb8b2dbbbf5b9&page=${pagenumber}`
    );

    console.log(api, "the result");
    return results;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  extraReducers: (builder) => {
    builder.addCase(productsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
