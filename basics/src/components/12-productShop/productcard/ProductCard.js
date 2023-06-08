import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = (props) => {
    const addToCard = () => { alert(`${props.title} sepete eklendi`) }
    const productImage = require(`../../../assets/img/${props.image}`);
    //shortcut for creating function is nfn
  return (
    <Card style={{width:"300px"}}>

        <Card.Img variant ="top" src={productImage}/>
        <Card.Body className='d-flex flex-column text-center'>
        <Card.Title>
            {props.title}
        </Card.Title>
        <Card.Subtitle>
            {props.desc}
        </Card.Subtitle>
        <Card.Text className='fs-3 text-info'>
            {props.price}$
        </Card.Text>
        <Button variant='dark' onClick={addToCard}>Add to Sepet</Button>
</Card.Body>
    </Card>
  )
}

export default ProductCard