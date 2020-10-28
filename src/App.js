import React, { Profiler } from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from "./data/user.json"
import statisticals from "./data/statistical-data.json"
import FriendList from './components/FriendList/FriendList';
import friends from "./data/friends.json"
import transactions from './data/transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" statisticals={statisticals} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;