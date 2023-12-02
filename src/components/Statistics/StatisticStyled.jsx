import React from "react";
import { StyledItem, StyledList, StyledSection } from "./Statistic.styled";

export const Statistics = ({ title, stats }) => {
  return <>
    <StyledSection>
      {title && <h2 className="title">{title}</h2>}
      <StyledList>
        {stats.map((item, index) => {
          const { id, label, percentage } = item;
          return (<StyledItem $index={index} key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StyledItem>)
        })}
      </StyledList>
    </StyledSection>
  </>
}

