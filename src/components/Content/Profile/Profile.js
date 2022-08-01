import React from "react";
import "./Profile.css"

const Profile = (props) => {
  return (
    <div className="content__profile profile">
      <div className="profile__image-wrapper">
        <img
          className="profile__image"
          src="https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg"
          alt="Profile"
        />
      </div>
      <div className="profile__info">
        <p className="profile__name">{props.name}</p>
        <ul className="profile__description-list">
          <li className="profile__list-item">Date of Birth: {props.dateOfBirth}</li>
          <li className="profile__list-item">City: {props.city}</li>
          <li className="profile__list-item">Education: {props.education}</li>
          <li className="profile__list-item">Web Site: <a href={props.website}>{props.website}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
