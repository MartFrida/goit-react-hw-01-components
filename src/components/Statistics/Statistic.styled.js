import styled from "styled-components";

export const StyledSection = styled.section`
background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width:400px;
`
export const StyledList = styled.ul`
display: flex;
  list-style: none;
  padding:0;
`

export const StyledItem = styled.li`
${'' /* background-color: #52c3f7; */}
  /* #a33cf3 */
  /* #e74b69 */
  /* #20b8c5 */
  background-color:${props => props.$index % 2 === 0 ? '#52c3f7' : '#a33cf3'};
  color: antiquewhite;
  padding: 20px;
  display: flex;
  flex-direction: column; 
  align-items: center;
`

export const StyledLabel = styled.label`
padding-bottom: 10px;
`