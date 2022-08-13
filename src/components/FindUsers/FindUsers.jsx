import React from "react";
import "./FindUsers.css";
import FindUsersPages from "./FindUsersPages/FindUSersPages";
import UsersContainer from "./Users/UsersContainer";

const FindUsers = (props) => {
  return (
    <div className="findUsers">
      <p className="findUsers__header">Users</p>
      <UsersContainer />
      <FindUsersPages />
    </div>
  );
};

export default FindUsers;
