
import User from '../components/Profile/Profile';
import user from 'user';
import Statistics from '../components/Statistics/Statistics';
import data from 'data';
import FriendList from '../components/FriendList/FriendList';
import friends from 'friends';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from 'transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
        fontSize: 20, 
      }}
    >
      <User
        username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} /> 
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
