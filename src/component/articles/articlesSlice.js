import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getComment } from "../comment/CommentSlice";

export const postArticlesAPI = createAsyncThunk(
  "PostAPI",
  async (posts, { rejectWithValue }) => {
    try {
    //   const dispatch = useDispatch();
      const response = await axios.post(
        "https://node-express-conduit.appspot.com/api/articles",
        posts,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDlhNzhjOWU1YmZhMDAwYjZiNDM2ZCIsInVzZXJuYW1lIjoidGFubmd1eWVuIiwiYWRtaW4iOmZhbHNlLCJleHAiOjE2OTczODI1NTEsImlhdCI6MTY5MjE5ODU1MX0.Sc9Du_NtRtR88T4kj3_I4vxaQjTIcbJ9w7JR6srel-I",
          },
        }
      );
    //   dispatch(getComment());
      return {...response.data.article};
    } catch (err) {
      return err.message;
    //   rejectWithValue(err.response.data.articles);
    }
  }
);

export const Articles = createSlice({
  name: "postArticles",
  initialState: {
    data: [],
    isLoading: false,
    message:false
  },
  extraReducers: (builder) => {
    builder.addCase(postArticlesAPI.pending, (state) => {
      state.isLoading = true;
      state.message = false
    });
    builder.addCase(postArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.message = true
    });
    builder.addCase(postArticlesAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
    });
  },
});
export default Articles.reducer;
