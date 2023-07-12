import React, { useEffect, useState } from 'react'
import "./Clock3.scss";
import moment from 'moment';

const Clock3 = (props) => {

const [dateTime, setDateTime] = useState(moment());

    const digitalTime = moment();
    const time = digitalTime.format("HH:mm")
    const date = digitalTime.format("LL");
    const day = digitalTime.format("dddd");
    const hour = digitalTime.format("HH");
    const minute = digitalTime.format("mm")
    const second = digitalTime.format("ss");

    let message = "";

    // console.log(props)
    const {textColor,bgColor} = props;
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

// console.log(time);
useEffect(()=>{

    const timer = setInterval(()=>{
        setDateTime(moment());
    },1000)

return()=>{
clearInterval(timer);
}
},[])



  return (
<div className='clock-container' style={{backgroundColor:bgColor}}>
        <div className="time">{hour}<span style={{opacity:second % 2 === 0 ? 1 : 0}}>:</span>{minute}</div>
        <div>
            <div className='date'>{date}</div>
            <div className='day'>{day} {message}</div>
        </div>
    </div>
  )
}
export default Clock3