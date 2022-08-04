import React from "react";
import "./Resender.css";

const Resender = (props) => {
  return (
    <div className="message__resender">
      <div className="message__photo">
        <img
          src={props.photoSrc}
          alt="Photo"
        />
      </div>
      <p className="message__name">{props.name}</p>
    </div>
  );
};

export default Resender;
