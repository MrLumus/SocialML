import React from "react";
import HeaderImg from "./HeaderImg/HeaderImg";
import Profile from "./Profile/Profile";
import PostCreate from "./PostCreate/PostCreate";
import Posts from "./Posts/Posts";
import "./Content.css";

const Content = (props) => {
  return (
    <div className="content__wrapper">
      <HeaderImg />
      <Profile name="ivan b." dateOfBirth="18 May" city="Orekhovo-Zuevo" education="GGTU'16" website="https://vk.com/mrlumus"/>
      <PostCreate postText={props.state.postText} dispatch={props.dispatch} />
      <Posts posts={props.state.posts} />
    </div>
  );
};

export default Content;
