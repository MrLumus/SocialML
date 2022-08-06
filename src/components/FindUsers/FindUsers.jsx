import React from "react";
import "./FindUsers.css";
import UsersContainer from "./Users/UsersContainer";

const FindUsers = (props) => {
  return (
    <div className="findUsers">
      <p className="findUsers__header">Users</p>
      <UsersContainer />
    </div>
  );
};

export default FindUsers;
