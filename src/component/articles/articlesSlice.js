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
        "https://aspnetcorerealworld.okami101.io/api/articles",
        posts,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MjQiLCJuYW1lIjoidGFubmd1eWVuIiwiZW1haWwiOiJ0YW5uZ3V5ZW5AZ21haWwuY29tIiwibmJmIjoxNjkyMDcyMjY5LCJleHAiOjE2OTI2NzcwNjksImlhdCI6MTY5MjA3MjI2OSwiaXNzIjoiQ29uZHVpdCIsImF1ZCI6IkNvbmR1aXQifQ.mBmJYCHbnQEhhkDTjwZ7vZ5-_RS_kF0sr1l26eTqWoU",
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
