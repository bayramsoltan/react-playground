import React from 'react'

export default function Jsx3() {

    const user = {
        firstName: 'John',
        lastName: 'Stones',
        age: 24,
        email: "hoho@examp.com",
        occupation: "Nerd Dev"
    };
    const {firstName, age} = user;
  return (
    <div>
        {
            age >= 18 && <h1>This suitable for over 18+</h1>
        }
        {
            age> 18 || <h1>Bu icer</h1>
        }
    </div>
  )
}
