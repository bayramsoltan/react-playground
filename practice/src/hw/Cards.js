import React from 'react'
import { Button,Card  } from 'react-bootstrap';
import "./cards.scss"
import { AiOutlineStar } from 'react-icons/ai';
const Cards = ({student}) => {
    const {isim,yas,kurs,img}=student;
  return (
    <Card  className='cards' style={{height:"600px"}}>
      <Card.Img variant="top" src={img}  style={{height:"300px"}}  />
      <Card.Body>
        <AiOutlineStar/>
        <Card.Title className='card-title'>{isim}</Card.Title>
        <Card.Text>
          {yas}<br />{kurs} 
          
        </Card.Text>
        <Button className = "buttons">Sepete Ekle</Button>
      </Card.Body>
    </Card>
  )
}
export default Cards