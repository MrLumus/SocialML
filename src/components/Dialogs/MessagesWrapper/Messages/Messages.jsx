import React from 'react';
import Message from './Message/Message';
import "./Messages.css"

const Messages = (props) => {
    return (
      <div className="messages__wrapper">
        {props.msgs.map((msg) => (
          <Message from={msg.from} message={msg.message} />
        ))}
      </div>
    );
  };

  export default Messages;