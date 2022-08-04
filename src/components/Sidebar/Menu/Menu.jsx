import React from "react";
import "./Menu.css";
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
  return (
    <div className="nav__list">
      <MenuItem name="Profile" link="/profile" />
      <MenuItem name="Messages" link="/dialogs" />
      <MenuItem name="News" link="/news" />
      <MenuItem name="Music" link="/music" />
      <MenuItem name="Settings" link="/settings" />
    </div>
  );
};

export default Menu;
