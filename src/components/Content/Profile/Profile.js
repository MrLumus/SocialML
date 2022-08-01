import React from "react";

const Profile = () => {
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
        <p className="profile__name">ivan b.</p>
        <ul className="profile__description-list">
          <li className="profile__list-item">Date of Birth: 18 May</li>
          <li className="profile__list-item">City: Orekhovo-Zuevo</li>
          <li className="profile__list-item">Education: GGTU'16</li>
          <li className="profile__list-item">
            Web Site:{" "}
            <a href="https://it-kamasutra.com">https://it-kamasutra.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
