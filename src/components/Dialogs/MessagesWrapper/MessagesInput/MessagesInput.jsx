import React from "react";
import "./MessagesInput.css";
import { messageTextChangeActionCreator, addMessageActionCreator } from "./../../../../redux/dialogsReducer";

const MessagesInput = (props) => {

  let sendMessage = () => {
    const action = addMessageActionCreator();
    props.dispatch(action);
  }

  const changeMessageText = (e) => {
    const messageText = e.target.value;
    const action = messageTextChangeActionCreator(messageText);
    props.dispatch(action);
  }

  return (
    <div className="messages__input-wrapper">
      <textarea
        placeholder="new message..."
        className="messages__input"
        value={props.newMessageText}
        onChange={changeMessageText}
      ></textarea>
      <button type="button" className="messages__create-message" onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessagesInput;
