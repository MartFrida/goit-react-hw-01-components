import styled from "styled-components";

export const StyledTable = styled.table`
font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`
export const StyledTh = styled.th`
border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
  text-align: center;
`
export const StyledTr = styled.tr`
background-color:${props => props.$index % 2 === 0 ? "#f2f2f2" : "#ddd"}
`

export const StyledTd = styled.td`
text-align:center;
border: 1px solid #ddd;
  padding: 8px;
`