import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = (props) => {


 const addToCart =()=>{
    alert(`${title} added to cart` );
 }

  const { image, desc, title, price } = props;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className="text-center d-flex flex-column justify-content-between align-items-center">
        <Card.Title className="fs-2">{title}</Card.Title>
        <Card.Subtitle className="fs-3 text-info"><strong>${price}</strong></Card.Subtitle>
        <Card.Text >{desc}</Card.Text>

        <Button variant="danger" onClick={addToCart}>Buy now</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
