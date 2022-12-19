import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List, Item } from './FriendList.styled';
export default function FriendList({ friends = [] }) {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
