import React from "react";
import "./MessagesInput.css";

const MessagesInput = (props) => {

  let sendMessage = () => {
    props.sendMessage();
  }

  const changeMessageText = (e) => {
    const messageText = e.target.value;
    props.changeMessageText(messageText);
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
