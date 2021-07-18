import React from "react";
const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class={isOnline ? "green" : "red"}>{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export default FriendList;
