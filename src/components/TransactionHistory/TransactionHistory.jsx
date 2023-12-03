import React from 'react'
import { StyledTable, StyledTd, StyledTh, StyledTr } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Type</StyledTh>
            <StyledTh>Amount</StyledTh>
            <StyledTh>Currency</StyledTh>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }, index) => {
            return (
              <StyledTr $index={index} key={id}>
                <StyledTd>{type}</StyledTd>
                <StyledTd>{amount}</StyledTd>
                <StyledTd>{currency}</StyledTd>
              </StyledTr>
            )
          })}
        </tbody>
      </StyledTable>
    </>
  )
}


TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}