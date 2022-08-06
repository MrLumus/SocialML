import React from "react";
import "./User.css";
import defaultPhoto from "../../../../assets/img/defaultPhoto.jpg"

const User = (props) => {
  return (
    <div className="users__user">
      <div className="user__photo">
        <div className="user__avatar">
          <img
            src={props.photoUrl != null ? props.photoUrl : defaultPhoto}
            alt="avatar"
          />
        </div>
        {
        props.followed 
            ? <input type="button" className="user__follow" defaultValue="unfollow" onClick={() => {props.onUnfollow(props.id)}} /> 
            : <input type="button" className="user__follow" defaultValue="follow" onClick={() => {props.onFollow(props.id)}} />
        }
 
      </div>
      <div className="user__description">
        <div className="user__description-main">
          <p className="user__name">{props.name}</p>
          <div className="user__status">{props.status}</div>
        </div>
        <div className="user__description-location">
          <p className="user__country user__description-location_location">
            {props.country},
          </p>
          <p className="user__city user__description-location_location">
            {props.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
