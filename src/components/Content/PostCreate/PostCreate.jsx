import React from "react";
import "./PostCreate.css";

const PostCreate = (props) => {

  const postTextChange = (e) => {
    const postText = e.target.value;
    props.postTextChange(postText);
  }

  const newPost = () => {
    props.newPost();
  };

  return (
    <div className="content__post-create post-create">
      <p className="post-create__header">My Posts</p>
      <textarea
        cols={30}
        rows={2}
        value={props.postText}
        className="post-create__input"
        placeholder="your news..."
        onChange={postTextChange}
      />
      <button className="post-create__btn" onClick={newPost}>
        publish
      </button>
    </div>
  );
};

export default PostCreate;