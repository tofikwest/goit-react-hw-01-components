import React from 'react';
import data from './data/data';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <ul>
        {data.friends.map(friend => (
          <FriendList
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </ul>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <ul>
        <Statistics title="Upload stats" stats={data.stat} />
      </ul>
      <TransactionHistory items={data.transactions} />;
    </>
  );
};
export default App;
