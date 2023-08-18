import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const ArticlesAPI = createAsyncThunk(
  "GetArticles",
  async () => {
    const response = await axios.get(
      `https://node-express-conduit.appspot.com/api/articles?limit=20&offset=0`,
    );
    return [...response.data.articles];
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
};
export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ArticlesAPI.pending, (state) => {
      state.isLoading = true;
      console.log("pending...")
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(ArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
      state.message = "Successfully";
    });
    builder.addCase(ArticlesAPI.rejected, (state,action) => {
      state.data = [];
      state.error = true;
      state.message = "Error";
    });
  },
});
export default articlesSlice.reducer;