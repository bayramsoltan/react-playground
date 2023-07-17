import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const Countries = () => {

const [countries, setCountries] = useState([]);
const [loading, setLoading] = useState(true);

const loadData = async () => { 
    const resp = await axios.get("https://restcountries.com/v3.1/all");
    console.log(resp.data);
    setCountries(resp.data);
}

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
          <th>country</th>
          <th>Population</th>
          <th>capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Countries