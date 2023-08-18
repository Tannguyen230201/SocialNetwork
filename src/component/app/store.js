import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../articles/articlesSlice";
import loginSlice from "../login/loginSlice";
import getComment from "../comment/CommentSlice";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    Login: loginSlice,
    comment: getComment,
  },
});
