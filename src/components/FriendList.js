import React from "react";
import PropTypes from "prop-types";
const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className="item friends-item">
      <span className={isOnline ? "green" : "red"}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
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
