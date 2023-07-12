import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const UseEffect = ({id}) => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

console.log("bu satir render ve re-render ve alltaki return kismi render olamdan once calisiyor");


//! MOUNTING
useEffect(()=>{
    console.log("MOUNTING: bu satir sadece render da calisir");
// !UNMOUNTING
    return ()=>{
        console.log("UNMOUNTING: bu bolum component hafizadan atilmadan calisir");
    }
},[]);


//! UPDATING
useEffect(()=>{
    console.log("bu satir render ve re-render ve alltaki return kismi render olduktan sonra calisiyor");
})


//! UPDATING
useEffect(()=>{
    console.log("UPDATING: bu bolumdeki alt taraftaki yazilan dependency degismesi durumunda calisir");
},[message, id]);






  return (
    <div>
        <div>{message} - {error}</div>
        <Button variant='success' onClick={()=>setMessage("Hello")}>Set Message</Button>
        <Button variant='danger' onClick={()=>setError("Some Errors")}>Throw Error</Button>
    </div>

  )
}

export default UseEffect
