import { useDispatch, useSelector } from "react-redux";
import { getComment } from "./CommentSlice";

const Comment = () => {
  const dispatch = useDispatch();
  const dataAll = useSelector((state) => state.comment.data);
  // const { data, error, isSuccess, isLoading, message } = dataAll;
  const isLoading = useSelector((state) => state.comment.isLoading);
 

  const getAll = () => {
    dispatch(getComment());
    console.log(dataAll);
  };
  return (
    <div>
      Comment
      <br />
      <button onClick={getAll}>GetAll</button>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          dataAll.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })
        )}
      </div>
    </div>
  );
};
export default Comment;
