import React from 'react';
import "./../css/Sidebar.css";

const Sidebar = () => {
    return (
        <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item nav__item_active">Profile</li>
          <li className="nav__item">Messages</li>
          <li className="nav__item">News</li>
          <li className="nav__item">Music</li>
          <li className="nav__item">Settings</li>
        </ul>
      </nav>
    );
}

export default Sidebar;