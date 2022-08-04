import React from "react";
import "./Message.css";
import Resender from "./Resender/Resender";

const Message = (props) => {
  return (
    <div className="messages__message message">
      <Resender name={props.from} photoSrc="https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg" />
      <div className="message__text">{props.message}</div>
    </div>
  );
};

export default Message;
