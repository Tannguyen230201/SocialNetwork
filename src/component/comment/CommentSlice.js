import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CommentAPI = createAsyncThunk("commetAPI", async (slug) => {
  const response = await axios.get(
    `https://node-express-conduit.appspot.com/api/articles/${slug}/comments`
    // "https://node-express-conduit.appspot.com/api/articles/quanh-a2c28480-3d7c-11ee-86eb-8925aa206720/comments"
  );
  return [...response.data.comments];
});

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CommentAPI.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(CommentAPI.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = true;
    });
    builder.addCase(CommentAPI.rejected, (state, action) => {
      // state.loading = true;
      state.data = [];
    });
  },
});
export default CommentSlice.reducer;
