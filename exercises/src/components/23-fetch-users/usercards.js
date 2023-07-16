import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import UserCard from './usercard'

const UserCards = () => {


    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);



useEffect(() => {

setTimeout(()=>{
    fetch('https://648a1ab15fa58521cab0d197.mockapi.io/users')
    .then(resp => resp.json())
    .then(data=> {
        setUsers(data)
        setLoading(false);
    })
    
    .catch(err=>{
        console.log(err);
    })
    
    .finally(()=>{
    setLoading(false);
    });
    
  
    
},5000);

  }, [])
  return (
    <Container className='mt-5'>
        {loading && <Spinner animation="border" variant="primary" />}
        <Row className='g-4'>
            {users.map(user=>
            <Col sm={6} md={4} lg={3} xl={2} key={user.id}><UserCard {...user}/></Col>)}
            
        </Row>
    </Container>
  )
}

export default UserCards