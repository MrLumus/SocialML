import React from "react";
import Resender from "./Resender/Resender";
import "./Resenders.css";

const Resenders = (props) => {
  return (
    <div className="dialogs">
      {props.resenders.map(res => <Resender name={res.name} id={res.id} />)}
    </div>
  );
};

export default Resenders;
