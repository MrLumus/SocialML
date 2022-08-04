import React from "react";
import "./MessagesWrapper.css";
import MessagesInput from "./MessagesInput/MessagesInput";
import Messages from "./Messages/Messages";

const MessagesWrapper = (props) => {
  return (
    <div className="messages">
      <Messages msgs={props.msgs} />
      <MessagesInput newMessageText={props.newMessageText} dispatch={props.dispatch} />
    </div>
  );
};

export default MessagesWrapper;
