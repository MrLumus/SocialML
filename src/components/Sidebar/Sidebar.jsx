import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';
import Menu from './Menu/Menu';
import "./Sidebar.css";

const Sidebar = (props) => {
    return (
      <nav className="nav">
        <Menu />
        <Friends friends={props.state.friends} />
      </nav>
    );
}

export default Sidebar;