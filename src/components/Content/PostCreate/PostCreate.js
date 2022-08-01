import React from "react";
import "./PostCreate.css";

const PostCreate = () => {
  return (
    <div className="content__post-create post-create">
      <p className="post-create__header">My Posts</p>
      <textarea
        name
        id
        cols={30}
        rows={2}
        className="post-create__input"
        placeholder="your news..."
        defaultValue={""}
      />
      <input type="submit" defaultValue="Send" className="post-create__btn" />
    </div>
  );
};

export default PostCreate;