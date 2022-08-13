import React from "react";
import "./FindUsersPage.css";
import {NavLink} from 'react-router-dom';

const FindUsersPage = (props) => {
  return (
    <div className="findUsers__page-wrapper">
      <NavLink
        className={(pageData) =>
          pageData.isActive
            ? "findUsers__page findUsers__page_active"
            : "findUsers__page"
        }
        to={`/users/${props.to}`}
      >
        {props.page}
      </NavLink>
    </div>
  );
};

export default FindUsersPage;
