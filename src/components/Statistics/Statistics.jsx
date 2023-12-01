import React from "react";

export const Statistics = ({ stats }) => {

  return <>
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(item => {
          const { id, label, percentage } = item;
          console.log(id, label, percentage)
          return (<li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>)
        })}
      </ul>
    </section>
  </>
}