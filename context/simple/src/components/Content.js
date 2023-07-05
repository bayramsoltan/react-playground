import React, { useState } from 'react'

const Content = () => {
  const [amount, setAmount] = useState(0);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    if(name==="amount"){
        setAmount(value);
    }
    if(name ==="currency"){
        setCurrency(value);
    }

  };
  return (
    <div>
        <form>
            <input type='text' name='amount' placeholder='Enter amount'
            value={amount}
            onChange={handleChange}/>
            <select name="" id="">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
        </form>
    </div>
  )
}

export default Content