import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Events = () => {
    const parametresizFonksiyon = () => {
        alert('Parametresiz fonksiyon tetiklendi');
    };
    
    return (
        <Container className='d-flex gap-3'>
            <Button variant='danger' onClick={parametresizFonksiyon}>
                Parametresiz
            </Button>
            <Button variant='warning'>
                Parametreli
            </Button>
        </Container>
    )
}

export default Events;