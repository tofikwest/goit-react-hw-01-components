import React from 'react';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import data from './data/data';

const App = () => {
  return (
    <>
      <FriendList friends={data.friends} />
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <Statistics title="Upload stats" stats={data.stat} />
      <TransactionHistory items={data.transactions} />;
    </>
  );
};
export default App;
