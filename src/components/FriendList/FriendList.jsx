import { FriendItem } from '../FriendItem/FriendItem';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box display="flex" flexDirection="column" as="ul">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
