import { useDispatch, useSelector } from "react-redux";
import { ArticlesAPI } from "../articles/articlesSlice";
import { useEffect, useState } from "react";
import GetArticles from "../articles/Articles";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ArticlesAPI());
  }, []);

  return (
    <div>
      <GetArticles />
    </div>
  );
};
export default Home;