import axios from "axios";
// import axios from "../../services/customize_axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getArticlesApi from "./../../services/UserService";

export const getComment = createAsyncThunk("getComment", async (user) => {
  try {
    const response = await axios.put(
      "https://aspnetcorerealworld.okami101.io/api/user",
      user,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTUiLCJuYW1lIjoidGFubmd1eWVuIiwiZW1haWwiOiJ0YW5uZ3V5ZW5AZ21haWwuY29tIiwibmJmIjoxNjkyMDAxMjg5LCJleHAiOjE2OTI2MDYwODksImlhdCI6MTY5MjAwMTI4OSwiaXNzIjoiQ29uZHVpdCIsImF1ZCI6IkNvbmR1aXQifQ.Z3bIHozxaT8-bnaTgwGrpi6II-HbFZxxoKja_IWEAJU",
        },
      }
    );
    return { ...response.data.user };
  } catch (err) {
    return err.message;
  }
});
const initialState = {
  // data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
};
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getComment.pending, (state) => {
      state.isLoading = true;
      console.log("pending...")
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("success:",{state,action})
      state.isSuccess = true;
      state.message = "Successfully";
    });
    builder.addCase(getComment.rejected, (state,action) => {
      console.log("rejected:",{state,action})
      state.data = [];
      state.error = true;
      state.message = "Error";
    });
  },
});
export default commentSlice.reducer;
