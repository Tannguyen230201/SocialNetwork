import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginAPI = createAsyncThunk(
  "loginAPI",
  async (user) => {
    // try {
      const response = await axios.post(
        "https://node-express-conduit.appspot.com/api/users/login",
        user
      );
      return response.data.user
    // } catch (err) {
    //     rejectWithValue(err.response.data.user)
    // }
  }
);

const Login = createSlice({
  name: "Login",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
    // token: null
  },
  extraReducers: (builder) => {
    builder.addCase(LoginAPI.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(LoginAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = true
    //   state.token = action.payload.token
    });
    builder.addCase(LoginAPI.rejected, (state, action) => {
      state.isLoading = false;
    //   state.data = action.error.message;
      state.data = action.error.message;
      state.isError = false;
    });
  },
});

export default Login.reducer;
