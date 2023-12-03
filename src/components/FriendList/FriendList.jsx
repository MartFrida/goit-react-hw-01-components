import React from 'react'
import { StyledAvatar, StyledItem, StyledList, StyledStatus } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {

  return (
    <StyledList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <StyledItem key={id}>
            <StyledStatus status={isOnline} />
            <StyledAvatar src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </StyledItem>
        )
      })}
    </StyledList>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }))

}