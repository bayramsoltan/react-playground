import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const LoginPage = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  return (
    <Container>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default LoginPage