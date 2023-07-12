import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {FaTrash} from "react-icons/fa"
const PersonCard = ({image,name,age,deletePerson,id}) => {
  return (
    <Card className='mb-5 position-realtive'>
      <Row>
        <Col md={2}>
          <Card.Img src={require(`./images/${image}`)} />
        </Col>
        <Col md={10}>
          <Card.Body>
            <Card.Title className="fs-1">{name}</Card.Title>
            <Card.Subtitle>{age}</Card.Subtitle>
          </Card.Body>
        </Col>
      </Row>
      <span className='position-absolute end-0 bottom-0 me-2 mb-2 text-danger' onClick={()=>deletePerson(id)}><FaTrash/></span>
    </Card>
  )
}

export default PersonCard