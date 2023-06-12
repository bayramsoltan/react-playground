import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import peopleData from "../../assets/data/people.json"
import Person from './person/person'

const Birthday = () => {
    const [people, setPeople] = useState(peopleData)
    console.log(people);

    const deletePerson = (id) =>{
      const arr = people.filter((person)=>person.id !== id);
      setPeople(arr);
    }


    return (
        <Container>
            <h2>Bugun Doganlar</h2>
            <p>
                Bugun dogan {people.length} kisi var.
            </p>
            <Row>
            {
                people.map((person) => (<Person key={person.id} {...person} deletePerson={deletePerson}/>))
            }
            </Row>
            <Button variant='danger' onClick={()=> setPeople([])}>
                Hepsini Temizle
            </Button>
            <Button variant='success' onClick={()=> setPeople(peopleData)}>
                Geri getir
            </Button>
        </Container>
    )
}

export default Birthday