import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { itemsFetchData } from "../../redux/actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post_reducer.posts);
  useEffect(() => {
    dispatch(itemsFetchData("https://jsonplaceholder.typicode.com/posts"));
  }, [dispatch]);
  return (
    <div>
      <h2>This is post component</h2>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
