import React from "react";
import "./MessagesWrapper.css";
import Messages from "./Messages/Messages";
import MessagesInputContainer from "./MessagesInput/MessagesInputContainer";

const MessagesWrapper = (props) => {

  return (
    <div className="messages">
      <Messages msgs={props.messages} />
      <MessagesInputContainer />
    </div>
  );
};

export default MessagesWrapper;
