// import PropTypes from 'prop-types';
import {
  FriendAvatar,
  FriendName,
  Item,
  FriendStatus,
} from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

// FriendItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ),
// };
