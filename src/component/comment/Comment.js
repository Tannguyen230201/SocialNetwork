import { useDispatch, useSelector } from "react-redux";
import { CommentAPI } from "../comment/CommentSlice";
import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const Comment = (slug) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.data);
  const getAPI = () => {
    dispatch(CommentAPI(slug));
  };
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={getAPI}>Comments</Accordion.Header>
          <Accordion.Body style={{ textAlign: "justify" }}>
            {comment.map((item, index) => {
              return (
                <div className="row bg-light rounded  mb-2" key={item.id}>
                  <div className="col-sm-2 col-md-2 col-3 col-lg-1 pt-2">
                    <img
                      className="img-fluid rounded-circle"
                      width="40"
                      src={item.author.image}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-9 col-md-9 col-7 col-lg-10 pt-1">
                    <div className="row fs-5 fw-bold">
                      {item.author.username}
                    </div>
                    <div className="row">{item.body}</div>
                    <div className="row" style={{ fontSize: "10px" }}>
                      {item.createdAt}
                    </div>
                  </div>
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Comment;
