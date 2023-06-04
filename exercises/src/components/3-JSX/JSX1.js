import React from 'react'

const JSX1 = () => {

const message = 
"Class name should be in className, attributes are written in camelCase";

  return (
    <>
{/* <> gorunmez DOM'da */}


        All elements need to be in one root element
        {/* div can be header or anything */}
        <div className='JsX'>{message}</div>
    </>
  )
}

export default JSX1