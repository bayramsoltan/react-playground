import React, { useEffect, useState } from 'react'
import "./digitaltime3.scss";
import moment from 'moment';

const Digitaltime3 = (props) => {
    const [dateTime, setDateTime]= useState(moment())
    console.log(dateTime);

    const timeStr = dateTime.format("HH:mm");
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    const minute = dateTime.format("mm");
    const second = dateTime.format("ss");
    console.log(hour,minute,second);


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


    useEffect(()=>{
        const timer = setInterval(()=>{
            setDateTime(moment());
        },1000);

        return ()=>{
            clearInterval(timer);
        }
    },[])


  return (
    <div style = {clockStyle} className='dijital-time-app2'>
        <div className='time'>
                {hour}
                <span style={{ opacity: minute % 2 === 0 ? 1 : 0 }}>:</span>
                {minute}
                <span style={{ opacity: second % 2 === 0 ? 1 : 0 }}>:</span>
                {second}
            </div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} {message}</div>
            </div>
    </div>
  )

/* 
return (
        <div style={saatStili} className='dijital-saat-uygulamasi3'>
            <div className='time'>
                {hour}
                <span style={{ opacity: second % 2 === 0 ? 1 : 0 }}>:</span>
                {minute}
            </div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} {message}</div>
            </div>
        </div>
    ); */
}

export default Digitaltime3