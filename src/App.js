import React from "react";
import FriendList from "./components/FriendList";
import friends from "./JSON/friends.json";

const App = () => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendList
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};
export default App;
