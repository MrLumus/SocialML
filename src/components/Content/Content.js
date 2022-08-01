import React from "react";
import HeaderImg from "./HeaderImg/HeaderImg";
import Profile from "./Profile/Profile";
import PostCreate from "./PostCreate/PostCreate";
import Posts from "./Posts/Posts";
import "./Content.css";

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
