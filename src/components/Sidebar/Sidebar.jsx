import React from 'react';
import FriendsContainer from './Friends/FriendsContainer';
import Menu from './Menu/Menu';
import "./Sidebar.css";

const Sidebar = (props) => {
    return (
      <nav className="nav">
        <Menu />
        <FriendsContainer />
      </nav>
    );
}

export default Sidebar;