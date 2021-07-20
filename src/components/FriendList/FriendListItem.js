import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data/data';
const FriendListItem = () => {
  return data.friends.map(({ isOnline, avatar, name }) => (
    <li className="item friends-item">
      <span className={isOnline ? 'green' : 'red'}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  ));
};
FriendListItem.defaultProps = {
  avatar:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
