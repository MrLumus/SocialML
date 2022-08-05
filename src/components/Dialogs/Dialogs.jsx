import React from "react";
import "./Dialogs.css";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import Resenders from "./Resenders/Resenders";

const Dialogs = (props) => {

  let state = props.store.getState();

  return (
    <div className="dialogs-wrapper">
      <h2 className="dialogs__header">Dialogs</h2>
      <Resenders resenders={state.dialogsPage.resenders} />
      <MessagesWrapper store={props.store} />
    </div>
  );
};

export default Dialogs;
