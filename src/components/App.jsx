import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import infoUser from './path/to/user.json';
import data from './path/to/data.json';
import friends from './path/to/friends.json';
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";

export const App = () => {
  return (
    <>
      {/* <Profile user={infoUser} /> */}
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <FriendList friends={friends} />; */}
      <TransactionHistory />
    </>
  );
};
