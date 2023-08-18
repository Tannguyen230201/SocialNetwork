
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CommentAPI = createAsyncThunk("getComment", async () => {
  const response = await axios.get(
    `https://node-express-conduit.appspot.com/api/articles/121-e1110530-3d6e-11ee-86eb-8925aa206720`
  );
  return response.data.article;
});

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  error: false,
};
export const getComment = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CommentAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(CommentAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(CommentAPI.rejected, (state, action) => {
      state.data = [];
      state.error = true;
    });
  },
});
export default getComment.reducer;
