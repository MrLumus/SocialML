import React from "react";
import Message from "./Message/Message";
import "./Messages.css";

let message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero voluptas neque id officiis saepe unde reiciendis doloremque nam commodi.";

const Messages = () => {
  return (
    <div className="messages">
      <Message from="Me" message={message}/>
      <Message from="Ivan B." message={message}/>
      <Message from="Me" message={message}/>
      <Message from="Ivan B." message={message}/>
      <Message from="Ivan B." message={message}/>
      <Message from="Me" message={message}/>
      <Message from="Me" message={message}/>
      <Message from="Ivan B." message={message}/>
      <Message from="Me" message={message}/>
      <Message from="Ivan B." message={message}/>
      <Message from="Ivan B." message={message}/>
      <Message from="Me" message={message}/>
    </div>
  );
};

export default Messages;
