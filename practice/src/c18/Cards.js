import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = (props) => {
  const {createdAt,name,avatar,price,id}=props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${avatar}?${id}`} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {createdAt}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards