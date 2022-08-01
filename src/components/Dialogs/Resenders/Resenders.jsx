import React from "react";
import {NavLink} from 'react-router-dom';
import Resender from "./Resender/Resender";
import "./Resenders.css";

const Resenders = () => {
  return (
    <div className="dialogs">
      <Resender name="Ivan B." id="1"/>
      <Resender name="Kseniya Kh." id="2"/>
      <Resender name="Andrey K." id="3"/>
      <Resender name="Ivan R." id="4"/>
      <Resender name="Sergey P." id="5"/>
      <Resender name="Yuri K." id="6"/>
    </div>
  );
};

export default Resenders;
