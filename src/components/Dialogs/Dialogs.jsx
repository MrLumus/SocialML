import React from "react";
import "./Dialogs.css";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import Resenders from "./Resenders/Resenders";

const Dialogs = (props) => {

  return (
    <div className="dialogs-wrapper">
      <h2 className="dialogs__header">Dialogs</h2>
      <Resenders resenders={props.resenders} />
      <MessagesWrapper messages={props.messages}/>
    </div>
  );
};

export default Dialogs;
