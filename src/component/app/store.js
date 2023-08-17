import { configureStore } from "@reduxjs/toolkit";
import CommentSlice from "../comment/CommentSlice";
import Post from "../articles/articlesSlice";
import loginSlice from "../login/loginSlice";

export const store = configureStore({
  reducer: {
    comment: CommentSlice,
    postArticles: Post,
    Login: loginSlice,
  },
});
