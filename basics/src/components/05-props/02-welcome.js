import React from 'react'

const Welcome1 = (props) => {
   
  return (
    <div className='welkomen'>
        <h1>Welcome {props.firstName} {props.lastName}</h1>
       
        {
                props.disabled
                ||
                <p>
                    {props.desc}
                </p>
            }
            {
                props.disabled
                &&
                <p>
                    Burasi sadece Admin'e gosterilecek
                </p>
            }
    </div>
  )
}

export default Welcome1