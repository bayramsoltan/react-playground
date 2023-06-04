import React from 'react'

const JSX2 = () => {
    const user = {
        name: "Rust Cohle",
        email: "rust@cohle.com",
        job: "Front Dev"
    }

  return (
    <div>
        <div>
            Name: {user.name}  
            {/* curly braces are used for taking JS in JSX */}
        </div>
        <div>Email: {user.email} </div>
        <div>Occupation: {user.job}</div>
    </div>
  )
}

export default JSX2