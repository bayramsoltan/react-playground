import React from 'react'

const Welcome2 = (props) => {
    const {firstName, lastName} = props
    //propslar dogrudan parametre icerisinde destructure edilebilir
  return (
    <div className='welcome'>
        <h2>
            Welcome {firstName} {lastName}
        </h2>
    </div>
  )
}

export default Welcome2