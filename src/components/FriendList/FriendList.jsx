import React from 'react'
import { StyledAvatar, StyledItem, StyledList, StyledStatus } from './FriendsList.styled'

export const FriendList = ({ friends }) => {

  return (
    <StyledList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <StyledItem key={id}>
            <StyledStatus status={isOnline} />
            <StyledAvatar src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
          </StyledItem>
        )
      })}
    </StyledList>
  )
}
