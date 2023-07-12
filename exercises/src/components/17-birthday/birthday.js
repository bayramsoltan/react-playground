import React from 'react'
import data from "./people.json";
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import PersonCard from './personCard';

const Birthday = () => {

    const [people, setPeople] = useState(data);

    const deletePerson = (id) =>{
        const arr = people.filter((item)=> item.id !== id);
        setPeople(arr);
    }

  return (
   
<Container>
<h1>Today borns</h1>
<p>Today {people.length} people were born</p>
    
{people.map((item)=><PersonCard {...item} key={item.id} deletePerson={deletePerson}/>)}

<Button variant="danger" onClick={()=>setPeople([])}>Clear All</Button>
<Button variant='success' onClick={()=> setPeople(data)} className='mx-2'>Reload</Button>
</Container>
    
  )
}

export default Birthday