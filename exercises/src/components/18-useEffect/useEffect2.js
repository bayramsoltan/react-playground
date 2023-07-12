import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const UseEffect2 = () => {

const [counter, setcounter] = useState(0);
//state in degismesi asagidaki counter degistiriyor


useEffect(() => {
  document.title = `Hello ${counter}`;
}, [counter])


  return (
    <Container className='text-center mt-5'>
        <h2>{counter} times clicked</h2>
        <Button variant='info' onClick={()=> setcounter(prev=>prev+1)}>
            Click me
        </Button>
    </Container>
  )
}

export default UseEffect2