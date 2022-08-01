import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";
import Messages from "./Messages/Messages";
import Resenders from "./Resenders/Resenders";

const Dialogs = (props) => {
  return (
    <div className="dialogs-wrapper">
      <h2 className="dialogs__header">Dialogs</h2>
      <Resenders />
      <Messages />
    </div>
  );
};

export default Dialogs;
