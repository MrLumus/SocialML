import React from "react";
import HeaderImg from "./Content/HeaderImg";
import Profile from "./Content/Profile";
import PostCreate from "./Content/PostCreate";
import Posts from "./Content/Posts";
import "./../css/Content.css";

const Content = () => {
  return (
    <section className="content">
      <HeaderImg />
      <Profile />
      <PostCreate />
      <Posts />
    </section>
  );
};

export default Content;
