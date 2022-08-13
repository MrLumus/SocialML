import React from "react";
import User from "./User/User";
import * as axios from "axios";
import "./Users.css";

class Users extends React.Component{

  componentDidMount(){
    const baseUrl = "https://social-network.samuraijs.com/api/1.0";
    axios
      .get(`${baseUrl}/users?page=1&count=5`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      }); 
  }

  render(){
    return (
      <div className="findUsers__users users">
        {this.props.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            status={user.status ? user.status : "status is undefined"}
            country={"user.country"}
            city={"user.city"}
            followed={user.followed}
            photoUrl={user.photos.small}
            onFollow={this.props.onFollow}
            onUnfollow={this.props.onUnfollow}
          />
        ))}
      </div>
    );
  }
}

export default Users;
