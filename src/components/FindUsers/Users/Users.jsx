import React from "react";
import User from "./User/User";
import * as axios from "axios";
import "./Users.css";

const Users = (props) => {

    if (props.users.length === 0){
        const baseUrl = "https://social-network.samuraijs.com/api/1.0";
        axios
            .get(`${baseUrl}/users`)
            .then((response) => {
                props.setUsers(response.data.items);
            });
    }

    //{id: 1, photoUrl: "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg", name: "Ivan B.", status: "I'm learning React / Redux :D", country: "Russia", city: "Orekhovo-Zuevo", followed: true},
    //{id: 2, photoUrl: "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg", name: "Kseniya Kh.", status: "Unreal Engine forever <3", country: "Russia", city: "Orekhovo-Zuevo", followed: true},
    //{id: 3, photoUrl: "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg", name: "Andrey K.", status: "I'm a middle Frontend developer'", country: "Turkey", city: "Ankara ", followed: false},
    //{id: 4, photoUrl: "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg", name: "Ivan R.", status: "I will learn Python and Computer Science", country: "Russia", city: "Ryazan'", followed: true},
    //{id: 5, photoUrl: "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg", name: "Sergey P.", status: "D&D it's my life!", country: "Russia", city: "Orekhovo-Zuevo", followed: false},
    //{id: 6, photoUrl: "https://yur-info.ru/media/k2/items/cache/97d2860871f3d35e35f6eb0477d3015a_XL.jpg", name: "Yuri K.", status: "Garry Potter is my love", country: "Russia", city: "Kabanovo", followed: true}


  return (
    <div className="findUsers__users users">
      {props.users.map(user => 
        <User 
            key={user.id} 
            id={user.id}
            name={user.name} 
            status={user.status ? user.status : "status is undefined"} 
            country={"user.country"} 
            city={"user.city"} 
            followed={user.followed} 
            photoUrl={user.photos.small}
            onFollow={props.onFollow}
            onUnfollow={props.onUnfollow} />)}
    </div>
  );
};

export default Users;
