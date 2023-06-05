import React from 'react'
import './ProfileCard.scss';

const ProfileCard = () => {
    const img = require(`../../assets/img/profile-card.jpg`);
    const profileBackground = {
        backgroundImage: `url(${img})`
    }
  return (
    <div className='profile-card'>
       <div className='header' style={profileBackground}>
    <img src={img} alt="" width={"300px"} />
       </div>
       <div className='content'>
            <div className="avatar" style={profileBackground}></div>
            <h3>Micheal Bayram</h3>
            <h5>Chicago, Illinois</h5>
            <div>
                <h2></h2>
                <span></span>
            </div>
            <div>
                <h2></h2>
                <span></span>
            </div>
            <div>
                <h2></h2>
                <span></span>
            </div>
       </div>
    </div>
  )
}

export default ProfileCard