import React from 'react'
import {Alert, Button, Col, Container, Row} from 'react-bootstrap';
const ModernBootstr = () => {
  return (
    <Container>
       <h2>Bootstrap Modern Yontem</h2>
       <Alert variant ='primary'>Alert Message</Alert>
       <Row className='text-center'>
        <Col>H</Col>
        <Col>E</Col>
        <Col>L</Col>
        <Col>L</Col>
       </Row>
       <Button variant='outline-success'>Bootstrap Button</Button>
    </Container>
  )
}   

export default ModernBootstr