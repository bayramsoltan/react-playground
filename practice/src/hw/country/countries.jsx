import React, { useEffect, useState } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(resp => resp.json())
      .then(resp => setCountries(resp));
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name}>
          <h2>{country.name}</h2>
          <img src={country.flag} style={{ width: "100px" }} alt={country.name} />
        </div>
      ))}
    </div>
  );
};

export default Countries;