import React, { useState } from 'react'

const App = () => {
    const [currencies, setCurrencies] = useState();

    const loadData = async()=>{
        try{
            const response = await
            fetch(`${settings.API_URL}/latest?
            from=${settings.currency.default}`)
        }
        catch (error){
            console.log(error)
        }
    }
  return (
    <div>App</div>
  )
}

export default App