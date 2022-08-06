import React from "react";
import "./Posts.css";
import Post from "./Post/Post";

const Posts = (props) => {
  return (
    <div className="posts">
      {props.posts.map(post => <Post message={post.message} key={post.id} likes={post.likes} />)}
    </div>
  );
};

export default Posts;
