import React from 'react'

const JSX4 = () => {
    const age = 5;
  return (
    <div>
        {/* short circuit JSler guzel parantez icinde yazilir */}
        {age>=18 && <h1>Ehliyet alabilir</h1>}
        {age>=18 || <h1>Ehliyet Alamaz</h1>} {/* True arar, soldaki false onun icin  */}
    </div>
  )
}

export default JSX4