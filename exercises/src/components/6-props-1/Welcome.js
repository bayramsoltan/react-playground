import React from 'react'
import './Welcome.scss';
const Welcome = ({firstName,lastName}) => {

//const Welcome = ({props})
    //more shorter way is on top

// const {firstName, lastName} = props;
//destructuring
  return (
    <div className='welcome'>
        {/* <h2>Welcome {props.firstName} {props.lastName}</h2> */}
        <h2>Welcome {firstName} {lastName}</h2>
    </div>
  )
}

export default Welcome