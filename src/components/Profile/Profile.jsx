import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileName,
  ProfileContact,
  ProfileStats,
  StatsItem,
  ItemLabel,
  ItemQuantity,
  Avatar,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Box
        minHeight="320px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar src={avatar} alt="User avatar" width="150" />
        <ProfileName>{username}</ProfileName>
        <ProfileContact>@{tag}</ProfileContact>
        <ProfileContact>{location}</ProfileContact>
      </Box>

      <ProfileStats>
        <StatsItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{followers}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{views}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{likes}</ItemQuantity>
        </StatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
