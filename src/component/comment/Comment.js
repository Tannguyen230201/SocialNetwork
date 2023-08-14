import { useDispatch, useSelector } from "react-redux";
import { getComment } from "./CommentSlice";
import { useState } from "react";

const Comment = () => {
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ bio, setBio ] = useState("");
  const [ image, setImage ] = useState("");
  const dataAll = useSelector((state) => state.comment.data);
  // const { data, error, isSuccess, isLoading, message } = dataAll;
  const isLoading = useSelector((state) => state.comment.isLoading);
  const message = useSelector((state) => state.comment.message)

  const getAll = () => {
    dispatch(
      getComment(user)
    );
  };
  const user ={
      "user": {
        "email": email,
        "username": username,
        "bio": bio,
        "image": image,
      }
  }
  return (
    <div>
      Comment
      <br />
      <button onClick={getAll}>Cập nhật</button>
      <br />
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input placeholder="bio" onChange={(e) => setBio(e.target.value)} />
      <br />
      <input placeholder="image" onChange={(e) => setImage(e.target.value)} />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          // dataAll.map((item, index) => {
          //   return <li key={index}>{item.title}</li>;
          // })
          message &&<div>{message}</div>
        )}
      </div>
    </div>
  );
};
export default Comment;
