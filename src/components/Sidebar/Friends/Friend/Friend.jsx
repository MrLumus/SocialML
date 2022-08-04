import React from "react";
import "./Friend.css";

const Friend = (props) => {
  return (
    <div className="friends__friend friend">
      <div className="friend__image">
        <img src={props.photoUrl}></img>
      </div>
      <div className="friend__name">{props.name}</div>
    </div>
  );
};

export default Friend;
