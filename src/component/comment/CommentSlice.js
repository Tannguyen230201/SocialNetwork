import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getComment = createAsyncThunk(
  "getComment",
  async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return [...response.data];
    } catch (err) {
      return err.message;
    }
  }
);
const initialState ={
  data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
}
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getComment.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
      state.message = "Successfully";
    });
    builder.addCase(getComment.rejected, (state) => {
      state.isSuccess = false;
      state.data = []
      state.error = true;
      state.message = "Error"
    });
  },
});
export default commentSlice.reducer
