import styled from "styled-components";

export const StyledList = styled.ul`
margin:10px;
`

export const StyledItem = styled.li`
display: flex;
    flex-direction: row;
    align-items: center;
    margin:10px;
`

export const StyledStatus = styled.span`
height: 10px;
width: 10px;
border-radius:50%;
background-color:${props => props.$status ? 'green' : 'red'};
`
export const StyledAvatar = styled.img`
margin:10px`