import React from 'react'

const ChildComp = ({handleCounter}) => {
  return (
    <div>
        <button onClick={()=>handleCounter(10)}>set counter</button>
    </div>
  )
}

export default ChildComp