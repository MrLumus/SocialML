import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import Resenders from "./Resenders/Resenders";

const Dialogs = (props) => {
  return (
    <div className="dialogs-wrapper">
      <h2 className="dialogs__header">Dialogs</h2>
      <Resenders resenders={props.state.resenders} />
      <MessagesWrapper msgs={props.state.messages} newMessageText={props.state.newMessageText} dispatch={props.dispatch} />
    </div>
  );
};

export default Dialogs;
