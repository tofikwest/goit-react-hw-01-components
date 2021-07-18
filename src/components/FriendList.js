import React from "react";
import PropTypes from "prop-types";
const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class={isOnline ? "green" : "red"}>{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
FriendList.defaultProps = {
  avatar:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
};
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendList;
