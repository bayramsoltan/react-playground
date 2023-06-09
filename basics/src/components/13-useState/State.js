// import React, { useState } from 'react'
import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const State = () => {

    const [mode,setMode] = React.useState();

  return (
    <Container>
        <h1>Dark-Light Mode</h1>
        <ButtonGroup>
            <Button variant='dark'>Dark Mode</Button>
            <Button variant='light'>Light Mode</Button>
        </ButtonGroup>
    </Container>
  )
}

export default State