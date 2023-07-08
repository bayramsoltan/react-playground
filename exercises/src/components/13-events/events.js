import React from 'react'

const Events = () => {
    //event handler
    const sayHello1 = () =>{
        alert("Hi Bayram");
    }
    const sayHello2 = (name) =>{
        alert(`Hello ${name}`);
    }
  return (
    <div>
        {/* parametresiz */}
        <div onClick={sayHello1}>XAXA</div>
        {/* parametreli kullanim icin arrow function yazariz*/}
        <div onClick={() => sayHello2("Ali")}>KAXA</div>
    </div>
  )
}

export default Events