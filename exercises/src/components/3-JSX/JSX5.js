import React from 'react'

const JSX5 = () => {
    const names = ["Henry","Silva","Xavi","Iniesta","Zidane"];
    const cities = ["Paris","Mary","Ashgabat","Istanbul","Izmir","Chicago","Los Angeles"];
  return (
    <div>
        <h2>bayram</h2>
        <ul>
            {
                names.map( (name,i) =><li key={i}>{name}</li>) 
            }
            {/* map does iteration here and we need to give each element a key  */}
        </ul>

        <select name="" id="">
            {cities.map((city,i)=> <option key={i}>{city}</option>)}
            {/* key is used for js, it is index */}


        </select>

            <ol>
                {
                    cities.map((city,i)=> <li key={i}>{city}</li>)
                }
            </ol>


            
    </div>
  )
}

export default JSX5