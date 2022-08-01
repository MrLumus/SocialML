import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item nav__item_active"><a href="#">Profile</a></li>
          <li className="nav__item"><a href="#">Messages</a></li>
          <li className="nav__item"><a href="#">News</a></li>
          <li className="nav__item"><a href="#">Music</a></li>
          <li className="nav__item"><a href="#">Settings</a></li>
        </ul>
      </nav>
    );
}

export default Sidebar;