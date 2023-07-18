import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form3 = () => {


const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    phone:""
});

console.log(formData);


  return (
    <Container>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder='Enter your name'
                value={formData.firstName}
                onChange={(e)=>setFormData({...formData, firstName: e.target.value})}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                type="text"
                placeholder='Enter your surname'
                value={formData.lastName}
                onChange={(e)=>setFormData({...formData, lastName: e.target.value})}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="text"
                placeholder='Enter your email address'
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email: e.target.value})}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Number</Form.Label>
                <Form.Control
                type="text"
                placeholder='Enter your number'
                value={formData.phone}
                onChange={(e)=>setFormData({...formData, phone: e.target.value})}
                />
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Form3