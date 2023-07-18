import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Country from './country';

const Countries = () => {

const [countries, setCountries] = useState([]);
const [loading, setLoading] = useState(true);

const loadData = async () => { 


  try {
    const resp = await axios.get("https://restcountries.com/v3.1/all");
    

// const arr1 = resp.data.currencies.map((item)=>{
//   console.log(item);

// })


    const arr = resp.data.map((item)=>({
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        capital: item.capital?.join("-"),
        currencies: item.currencies ? Object.keys(item.currencies).map(cur=> item.currencies[cur].name).join("-") : ""

    }));
    setCountries(arr);

  } catch (err) {
    console.log(err);
    
  }
    
};

useEffect(() => {
 loadData();
}, [])

  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Country</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((item)=> <Country {...item} key={item.name}/>)}
      </tbody>
    </Table>
    </div>
  )
}

export default Countries