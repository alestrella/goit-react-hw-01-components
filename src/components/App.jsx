import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Box } from './Box/Box';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      gridGap={5}
      py={5}
      bg="background"
      as="main"
    >
      <Title>My first React components say "Hello world!"</Title>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Box>
  );
};
