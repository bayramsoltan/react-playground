import React from "react";
import Scary from "../../assets/img/image2.jpg"

const Image = () => {
    const mutualStyle = {
        margin: '0 1rem',
        height:"200px"
    }
  return (
    <div>
      {/*State Image */}
      <img src="./image6.jpg" alt="idontknow" style={mutualStyle}/>
      {/* Harici Image*/}
      <img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="" style={mutualStyle}
      />
      {/* Import Yontemi */}
      <img src={Scary} alt="scares"style={mutualStyle} />
      {/* Require yontemi */}
      <img src={require("../../assets/img/image5.jpg")} alt="" style={mutualStyle} />
    </div>
  );
};

export default Image;
