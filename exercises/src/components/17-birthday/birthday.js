import React from 'react'
import data from "./people.json";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import PersonCard from './personCard';

const Birthday = () => {

    const [people, setPeople] = useState(data);

  return (
   
<Container>
<h1>Today borns</h1>
<p>Today {people.length} people were born</p>

{people.map((item)=><PersonCard {...item} key={item.id}/>)}
</Container>
    
  )
}

export default Birthday