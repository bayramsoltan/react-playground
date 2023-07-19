import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form4 = () => {


const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    phone:""
});

console.log(formData);

const handleFormData = (e) => {
    const {name, value} = e.target;
    setFormData({...formData,[name]: value})
 }


  return (
    <Container>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                name="firstName"
                placeholder='Enter your name'
                value={formData.firstName}
                onChange={(e)=>handleFormData(e)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                type="text"
                name="lastName"
                placeholder='Enter your surname'
                value={formData.lastName}
                onChange={(e)=>handleFormData(e)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="text"
                name="email"
                placeholder='Enter your email address'
                value={formData.email}
                onChange={(e)=>handleFormData(e)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Number</Form.Label>
                <Form.Control
                type="text"
                name="phone"
                placeholder='Enter your number'
                value={formData.phone}
                onChange={(e)=>handleFormData(e)}
                />
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Form4