import React from "react";
import "./MessagesWrapper.css";
import Messages from "./Messages/Messages";
import MessagesInputContainer from "./MessagesInput/MessagesInputContainer";

const MessagesWrapper = (props) => {

  let state = props.store.getState();

  return (
    <div className="messages">
      <Messages msgs={state.dialogsPage.messages} />
      <MessagesInputContainer store={props.store} />
    </div>
  );
};

export default MessagesWrapper;
