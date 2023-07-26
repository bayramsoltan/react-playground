import React, { useContext } from 'react'
import "./topbar.scss";
import StoreContext from '../../store';
const Topbar = () => {

const store = useContext(StoreContext);

const {currencies} = store;


const formatCurrency = (val) => {
    return (1 / currencies[val]).toFixed(2);
 }

  return (
    <header className='exchange'>
        <nav>
            <h3>Exchange</h3>
            <div>
                <span>USD: {formatCurrency("USD")} tl</span>
                <span>EUR: {formatCurrency("EUR")} tl</span>
            </div>
        </nav>
    </header>
  )
}

export default Topbar