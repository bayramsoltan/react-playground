import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import UserCard from './02-user-card';
// const myObject = {
//     avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/992.jpg",
//     country: "Hungary",
//     email: "Rossie_Jacobs74@hotmail.com",
//     firstName: "Adam",
//     id: "1",
//     lastName: "Ratke"
// }

const Fetch2 = () => {
    const [users, setUsers] = useState([]);
    // TODO: API'yi env'de sakla​



    const updateUser = (userId, payload) => {
        fetch(`https://648a1ac75fa58521cab0d225.mockapi.io/api/v1/users/${userId}`, payload, {
            method: 'PUT',
            "Content-Type": "application/json"
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error.message));
    }

    const userInfo = {
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/992.jpg",
        country: "United Kingdom",
        email: "adamratke@example.com",
        firstName: "Adam",
        id: "1",
        lastName: "Ratke"
    }

    // load user data
    const loadUserData = () => {
        fetch('https://648a1ab15fa58521cab0d197.mockapi.io/login')
        //https://648a1ab15fa58521cab0d197.mockapi.io/login
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error.message));
    }

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <Container>
            <Row className='gap-1 mb-3'>
                {
                    users.map((user) => (<UserCard key={user.id} {...user} />))
                }
            </Row>
            <Button onClick={() => updateUser(1, userInfo)}>
                UPDATE USER
            </Button>
        </Container>
    )
}

export default Fetch2;