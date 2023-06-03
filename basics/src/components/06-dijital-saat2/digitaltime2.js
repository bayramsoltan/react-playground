import React from 'react'
import "./digitaltime2.scss";
import moment from 'moment';

const Digitaltime2 = (props) => {
    const dateTime = moment();
    const timeStr = dateTime.format("HH:mm");
    const dateStr = dateTime.format("LL");
    const dayStr = moment().format("dddd");
    const hour = moment().format("HH");
    //moment().hour() yada .hours() kullanilabilir

    let message = '';

    if(hour >= 7 &&  hour <11){
        message = "MORNING"
    }else if(hour>= 11 && hour <14){
        message = "NOON"
    }else if(hour>17 && hour < 22){
        message = "EVENING"
    }else{
        message = "NIGHT"
    }
    const clockStyle = {
        color: props.textColor,
        backgroundColor: props.bgColor,
    };

  return (
    <div style = {clockStyle} className='dijital-time-app2'>
        <div className='time'>{timeStr}</div>
        <div>
            <div className='date'>{dateStr}</div>
            <div className='day'>{dayStr} {message}</div>
        </div>
    </div>
  )
}

export default Digitaltime2