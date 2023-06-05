import React from "react";

const Statistics = (props) => {
  return (
    <div>
      <div>
        <h2>{props.stat}</h2>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default Statistics;
