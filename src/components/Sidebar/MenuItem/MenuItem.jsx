import React from "react";
import {NavLink} from 'react-router-dom';
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="nav__item-wrapper">
      <NavLink className={navData => navData.isActive ? "nav__item nav__item_active" : "nav__item"} to={props.link}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default MenuItem;
