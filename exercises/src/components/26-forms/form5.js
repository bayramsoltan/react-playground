import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Form5 = () => {


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

const handleSubmit=(e)=>{

e.preventDefault();

try{

if(!formData.firstName) throw new Error("write your name");
if(!formData.lastName) throw new Error("write your lastname");
if(!formData.email) throw new Error("write your email");
if(!formData.phone) throw new Error("write your phone");


setTimeout(()=>{
alert("bilgiler sent");
},1000);



}catch(err){
console.log(err)
}

}
  return (
    <Container className='mt-5'>
        <Form method="post" onSubmit={handleSubmit} noValidate>
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
            <Button variant='info' type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default Form5