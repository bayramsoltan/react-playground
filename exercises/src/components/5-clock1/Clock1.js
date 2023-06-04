import React from 'react'
import "./Clock1.scss";
import moment from 'moment';
const Clock1 = () => {
    const digitalTime = moment();
    const time = digitalTime.format("HH:mm")
    const date = digitalTime.format("LL");
    const day = digitalTime.format("dddd");
    const hour = digitalTime.format("HH");
    let message = "";

    if(hour>=7 && hour<11){
        message = "morning";
    }
    else if(hour>=11 && hour<14){
        message = "NOON";
    }
    else if(hour>=14 && hour<17){
            message = "afternoon";
    }
    else if(hour>=17 && hour<22){
        message = "Evening";
    }else{
        message = "NIGHT";
    }
  return (
    <div className='clock-container'>
        <div className="time">{time}</div>
        <div>
            <div className='date'>{date}</div>
            <div className='day'>{day} {message}</div>
        </div>
    </div>
  )
}
export default Clock1