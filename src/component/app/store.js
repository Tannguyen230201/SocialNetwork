import { configureStore } from "@reduxjs/toolkit";
import CommentSlice from "../comment/CommentSlice";

export const store = configureStore({
  reducer: {comment: CommentSlice},
});
