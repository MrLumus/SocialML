import React from "react";
import "./FindUsersPages.css";
import FindUsersPage from "./FindUsersPage/FindUsersPage";

const FindUsersPages = () => {
  return (
    <div className="findUsers__pages">
      <FindUsersPage page="1" to="page1" />
      <FindUsersPage page="2" to="page2" />
      <FindUsersPage page="3" to="page3" />
    </div>
  );
};

export default FindUsersPages;