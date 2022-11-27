import PropTypes from 'prop-types';
import { Status, Img, Text } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Text>{name}</Text>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
