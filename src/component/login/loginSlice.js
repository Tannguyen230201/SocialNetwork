import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const LoginAPI = createAsyncThunk("loginAPI", async (user) => {
  const response = await axios.post(
    "https://node-express-conduit.appspot.com/api/users/login",
    user
  );
  // try {
    return response.data.user;
  //   navigate("/home")
  // } catch (err) {
  //     console.log(err.response.data.user)
  // }
});

const Login = createSlice({
  name: "Login",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    token:''
  },
  extraReducers: (builder) => {
    builder.addCase(LoginAPI.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(LoginAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      state.isSuccess = true;
      state.token = action.payload.token;
      localStorage.setItem("token",action.payload.token)
      localStorage.setItem("user",JSON.stringify(action.payload))
    });
    builder.addCase(LoginAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.data = action.error.message;
      state.isError = true;
    });
  },
});

export default Login.reducer;
