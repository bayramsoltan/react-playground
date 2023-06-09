import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'

const UseRef = () => {

const emailRef = useRef(null);

const setFocus =() =>{
    console.log(emailRef);
    emailRef.current.focus();
    emailRef.current.style.backgroundColor = "red";
    // emailRef.current.classList.add("");
}


  return (
    <Container className="mt-5">
        <input type="text" placeholder='Enter your email' ref={emailRef}/>
        <button onClick={setFocus}>Set Focus</button>
    </Container>
  )
}

export default UseRef