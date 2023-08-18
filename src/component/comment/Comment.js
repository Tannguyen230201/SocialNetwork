import { useDispatch, useSelector } from "react-redux";
import CommentAPI from "../comment/CommentSlice";
import GetArticles from "../articles/Articles";

const Comment = () => {
  const comment1 = useSelector((state) => state.comment.data);
  const dispatch = useDispatch();
  const handleGetComment = () => {
    dispatch(CommentAPI());
  };
  return (
    <div>
      <button onClick={handleGetComment}>This is comment</button>
      <div>
        {comment1.map((item) => {
          return <li>{item?.body}</li>;
        })}
      </div>
    </div>
  );
};
export default Comment;
