import React from 'react';
import './FriendList.css';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;
