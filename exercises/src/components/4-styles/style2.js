import React from "react";

const Style2 = () => {
    const styleTitle = {
        fontSize:"2rem",
        color:"crimson",
        fontWeight:"bold",
        textAlign:"right"
    }
  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet
        quibusdam, animi dolore debitis nemo quidem nihil nesciunt odio pariatur
        tempore ut minima necessitatibus ipsa dolor aperiam nisi consectetur
        reprehenderit?
      </p>
      <h2 style={{...styleTitle}}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet
        quibusdam, animi dolore debitis nemo quidem nihil nesciunt odio pariatur
        tempore ut minima necessitatibus ipsa dolor aperiam nisi consectetur
        reprehenderit?
      </p>
    </div>
  );
};

export default Style2;
