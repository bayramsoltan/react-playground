import React, { useContext } from 'react'
import CurrencyContext from '../store/store'

const TopBar = () => {
    const store = useContext(CurrencyContext);
    const {currencies} = store;
    console.log(currencies);

    const formatCurrency =(currency) =>{
        return (1 / currencies[currency].toFixed(4));
    }
  return (
    <header>
        <nav>
            <h3>Exchange</h3>
            <div>
                <span>$: {formatCurrency("USD")} tl</span>
                <span>EU: {formatCurrency("EUR")} tl</span>
            </div>
        </nav>
    </header>
  )
}

export default TopBar