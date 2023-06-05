import React from "react";
import "./ProfileCard.scss";
import Statistics from "./statistics/Statistics";


//TODO: propslari spread yaparak object olarak gonder...

const statisticsInfo = [
  { title: "Post", stat: 14 },
  { title: "Follower", stat: 287 },
  { title: "Following", stat: 145 },
  { title: "Likes", stat: 988 },
];

const ProfileCard = (props) => {
  const img = require(`../../assets/img/profile-card.jpg`);
  const profileBackground = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div className="profile-card">
      <div className="header" style={profileBackground}>
        {/* <img src={img} alt="" width={"300px"} /> */}
      </div>
      <div className="content">
        <div className="avatar" style={profileBackground}></div>
        <h3>{props.name}</h3>
        <h5>{props.location}</h5>
        <div className="stats">


        {
            statisticsInfo.map((item,index)=>(<Statistics key={index} title ={item.title} stat={item.stat}/>))
        }

         {/*  <Statistics title="Post" stat={14} />
          <Statistics title="Follower" stat={287} />
          <Statistics title="Following" stat={145} /> */}
          {/* <div>
                <h2>14</h2>
                <span>Post</span>
                </div>
            
            <div >
                <h2>287</h2>
                <span>Follower</span>
            </div>
            <div>
                <h2>145</h2>
                <span>Following</span>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
