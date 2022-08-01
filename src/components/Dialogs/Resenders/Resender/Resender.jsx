import React from "react";
import { NavLink } from "react-router-dom";
import "./Resender.css";



const Resender = (props) => {
  let url = `/dialogs/${props.id}`;
  return (
    <div className="dialogs__dialog-wrapper">
      <NavLink className={resenderData => resenderData.isActive ? "dialogs__dialog dialogs__dialog_active" : "dialogs__dialog"} to={url}>{props.name}</NavLink>
    </div>
  );
};

export default Resender;
