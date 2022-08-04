import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="posts__post post">
      <div className="post__icon" ><img className="post__icon" src="https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg"></img></div>
      <div className="post-wrapper">
        <div className="post__text">{props.message}</div>
        <div className="post__likes">{props.likes}</div>
      </div>
    </div>
  );
};

export default Post;
