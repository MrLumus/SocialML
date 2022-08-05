import React from "react";
import HeaderImg from "./HeaderImg/HeaderImg";
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";
import "./Content.css";
import PostCreateContainer from "./PostCreate/PostCreateContainer";

const Content = (props) => {

  return (
    <div className="content__wrapper">
      <HeaderImg />
      <Profile name="ivan b." dateOfBirth="18 May" city="Orekhovo-Zuevo" education="GGTU'16" website="https://vk.com/mrlumus"/>
      <PostCreateContainer />
      <Posts posts={props.posts} />
    </div>
  );
};

export default Content;
