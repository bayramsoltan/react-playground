import React from 'react'
import { Alert, Button, Container } from 'react-bootstrap'

const Events = () => {

    const parameterless=()=>{
        alert("Parameterless touched")
    }
  return (
    <Container className='d-flex gap-2'>
        <Button variant='dark' onClick={parameterless}>Parameterless</Button>
        <Button variant='warning'>WithParameter</Button>
    </Container>
  )
}

export default Events