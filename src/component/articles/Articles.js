import { useDispatch, useSelector } from "react-redux";
import { postArticlesAPI } from "./articlesSlice";
import { getComment } from "../comment/CommentSlice";
import { useState } from "react";

const Articles = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tagList, setTagList] = useState("");
  const message = useSelector((state) => state.postArticles.message);
  const isLoading = useSelector((state) => state.postArticles.isLoading);
  const post = {
    article: {
      title: title,
      description: description,
      body: body,
      tagList: [tagList],
    },
  };
  const postList = async () => {
   await dispatch(postArticlesAPI(post));
   await dispatch(getComment());
  };
  const load = () => {
    setTimeout(() => {
      dispatch(getComment());
    }, 500);
  };
  return (
    <div>
      <h3>THÊM BÀI VIẾT</h3>
      <button onClick={load}>Load lại bài viết</button>
      <br />
      <button onClick={postList}>Thêm</button>
      <br />
      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <br />
      <input
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input placeholder="body" onChange={(e) => setBody(e.target.value)} />
      <br />
      <input
        placeholder="tagList"
        onChange={(e) => setTagList(e.target.value)}
      />
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <span>{message && <span>Thành công</span>}</span>
      )}
    </div>
  );
};
export default Articles;
