import React from "react";
import "./Posts.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className="posts">
      <Post message="Hi, how are you?"/>
      <Post message="I already know HTML / CSS / JS very well"/>
      <Post message="I'm learning React"/>
      <Post message="I will learn Redux"/>
    </div>
  );
};

export default Posts;