import { useDispatch, useSelector } from "react-redux";
import { getComment } from "../comment/CommentSlice";
import { useEffect, useState } from "react";
import Articles from "../articles/Articles";

const Home = () => {
  const dispatch = useDispatch();
  const dataAll = useSelector((state) => state.comment.data);
  const isLoading = useSelector((state) => state.comment.isLoading);
  const message = useSelector((state) => state.comment.message);

  const error = useSelector((state) => state.comment.error);
  useEffect(() => {
    dispatch(getComment());
  }, []);

  return (
    <div>
      <h3>Tổng hợp bài viết</h3>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          dataAll.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })
        )}
        {error && <span>Có lỗi xảy ra</span>}
      </div>
      <div>
          <Articles />
      </div>
    </div>
  );
};
export default Home;
