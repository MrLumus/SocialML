import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuItem from './MenuItem/MenuItem';
import "./Sidebar.css";

const Sidebar = () => {
    return (
      <nav className="nav">
        <div className="nav__list">
          <MenuItem name="Profile" link="/profile"/>
          <MenuItem name="Messages" link="/dialogs"/>
          <MenuItem name="News" link="/news"/>
          <MenuItem name="Music" link="/music"/>
          <MenuItem name="Settings" link="/settings"/>
        </div>
      </nav>
    );
}

export default Sidebar;