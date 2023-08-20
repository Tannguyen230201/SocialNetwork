import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../articles/articlesSlice";
import loginSlice from "../login/loginSlice";
import commentSlice from "../comment/CommentSlice";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    Login: loginSlice,
    comment: commentSlice,
  },
});
